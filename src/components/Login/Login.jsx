import React, { useState } from "react";
import { loginAction } from "../../redux/slices/authSlice";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { toastAction } from "../../redux/slices/alertSlice";
import LoginForm from "./LoginForm/LoginForm";
// import { validateEmail, validatePassword } from "../../utils/validationUtil";

const Login = () => {
  const initialCredentials = {
    email: "",
    password: "",
  };
  const [credentials, setCredentials] = useState(initialCredentials);
  const [errorState, setErrorState] = useState({});

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChange = (event) => {
    const { name, value } = event.target;

    setCredentials((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };

  const validateLogin = () => {
    const { email, password } = credentials;
    const errors = {};

    // if (!email) errors.email = "Email is required.";
    // else if (!validateEmail(email))
    //   errors.email = "Enter a valid email address.";

    // if (!password) errors.password = "Password is required";
    // else if (!validatePassword(password))
    //   errors.password =
    //     "Password must contain at least one lowercase letter, one uppercase letter, one digit, and between 6 and 12 characters.";

    setErrorState(errors);
    return Object.keys(errors).length === 0;
  };

  const onSubmit = async () => {
    if (!validateLogin()) return;

    try {
      await dispatch(loginAction(credentials)).unwrap();
      navigate("/");
    } catch (error) {
      // await dispatch(
      //   toastAction({ message: error.message, type: "ERROR" })
      // ).unwrap();
    }
  };

  return (
    <LoginForm
      handleChange={handleChange}
      state={credentials}
      onSubmit={onSubmit}
      errors={errorState}
    />
  );
};

export default Login;
