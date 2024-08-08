// DEPENDENCIES
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginAction, registerAction } from "../../redux/slices/authSlice";
import RegisterForm from "./RegisterForm/RegisterForm";
import { validateEmail, validatePassword } from "../../utils/validationUtil";
// import { toastAction } from "../../redux/slices/alertSlice";

// FUNCTION
const Register = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

  const params = new URLSearchParams(location.search);

  const tournamentUrl = params.get("tournamentUrl");
  const email = params.get("email");

  const initialRegisterInfo = {
    userName: "",
    email: email ?? "",
    password: "",
    confirmPassword: "",
    userRole: "Admin",
  };

  const [registerInfo, setRegisterInfo] = useState(initialRegisterInfo);
  const [errorState, setErrorState] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    setRegisterInfo((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const validateRegister = () => {
    const { userName, email, password, confirmPassword } = registerInfo;
    const errors = {};

    if (!userName) errors.userName = "Username is required";

    if (!email) errors.email = "Email is required.";
    else if (!validateEmail(email))
      errors.email = "Enter a valid email address.";

    if (!password) errors.password = "Password is required";
    else if (!validatePassword(password))
      errors.password =
        "Password must contain at least one lowercase letter, one uppercase letter, one digit, and between 6 and 12 characters.";

    if (!confirmPassword)
      errors.confirmPassword = "Confirm password is required";
    else if (confirmPassword !== password) {
      errors.confirmPassword = "Passwords do not match";
    }

    setErrorState(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async () => {
    if (!validateRegister()) return;
    try {
      const response = await dispatch(
        registerAction({ user: registerInfo, tournamentUrl }),
      ).unwrap();

      // await dispatch(
      //   toastAction({ message: response, type: "SUCCESS" })
      // ).unwrap();

      if (tournamentUrl) {
        navigate(`/tournament/${tournamentUrl}`);
      }
      const credentials = {
        email: registerInfo.email,
        password: registerInfo.password,
      };
      await dispatch(loginAction(credentials)).unwrap();
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error?.errorCode === "01") {
        setErrorState({ email: "Email already exists" });
      } else if (error?.errorCode === "02") {
        setErrorState({ userName: "Username already exists" });
      }
      // await dispatch(toastAction(error)).unwrap();
    }
  };

  return (
    <RegisterForm
      handleChange={handleChange}
      state={registerInfo}
      onSubmit={onSubmit}
      errors={errorState}
    />
  );
};

export default Register;
