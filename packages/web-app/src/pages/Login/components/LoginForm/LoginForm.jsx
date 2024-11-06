// DEPENDENCIES
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

// REDUX
import { loginAction } from "store/slices/authSlice";

// COMPONENTS
import CustomInput from "components/CustomInput/CustomInput";

// STYLES
import { SendInfoButton } from "./LoginForm.styled";

// UTILS
import { validateLogin } from "utils/validationUtil";

// COMMONS
import { states } from "@myracketpartner/common";
import { useFormValidation } from "@myracketpartner/common";

// FUNCTION
const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { formState, errors, handleChange, handleValidation } =
    useFormValidation(states.initialStateLoginForm, validateLogin, true);

  const onSubmit = async () => {
    const isValid = handleValidation();
    if (!isValid) return;

    try {
      await dispatch(loginAction(formState)).unwrap();
      navigate("/");
    } catch (error) {
      // await dispatch(
      //   toastAction({ message: error.message, type: "ERROR" })
      // ).unwrap();
    }
  };

  return (
    <>
      <CustomInput
        label={errors.email}
        placeholder={t("Login.Email")}
        name="email"
        value={formState.email}
        onChange={handleChange}
        error={errors.email}
      />
      <CustomInput
        type="password"
        label={errors.password}
        placeholder={t("Login.Password")}
        name="password"
        value={formState.password}
        onChange={handleChange}
        error={errors.password}
        maxLength={12}
        showCount
      />
      <Link to="/forgotpassword"> {t("Login.ForgotPassword")} </Link>
      <SendInfoButton onClick={onSubmit}>
        {t("Login.SendButton")}
      </SendInfoButton>
    </>
  );
};

export default LoginForm;
