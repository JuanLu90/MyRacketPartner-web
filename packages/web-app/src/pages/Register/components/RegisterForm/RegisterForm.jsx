// DEPENDENCIES
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// COMPONENTS
import CustomInput from "components/CustomInput/CustomInput";

// STYLES
import { SendInfoButton } from "./RegisterForm.styled";
import { loginAction, registerAction } from "store/slices/authSlice";

// COMMONS
import { states, useFormValidation, validates } from "@myracketpartner/common";

// FUNCTION
const RegisterForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { formState, errors, handleChange, handleValidation } =
    useFormValidation(
      states.initialStateRegisterForm,
      validates.validateRegister,
      true
    );

  const onSubmit = async () => {
    const isValid = handleValidation();
    if (!isValid) return;

    try {
      await dispatch(registerAction({ user: formState })).unwrap();
      // await dispatch(
      //   toastAction({ message: response, type: "SUCCESS" })
      // ).unwrap();

      const credentials = {
        email: formState.email,
        password: formState.password,
      };
      await dispatch(loginAction(credentials)).unwrap();
      navigate("/");
    } catch (error) {
      console.log(error);
      // if (error?.errorCode === "01") {
      //   setErrorState({ email: "Email already exists" });
      // } else if (error?.errorCode === "02") {
      //   setErrorState({ userName: "Username already exists" });
      // }
      // await dispatch(toastAction(error)).unwrap();
    }
  };

  return (
    <>
      <CustomInput
        label={errors.userName}
        placeholder={t("Register.Username")}
        name="userName"
        value={formState.userName}
        onChange={handleChange}
        error={errors.userName}
        maxLength={20}
        showCount
      />
      <CustomInput
        label={errors.email}
        placeholder={t("Register.Email")}
        name="email"
        value={formState.email}
        onChange={handleChange}
        error={errors.email}
      />
      <CustomInput
        type="password"
        label={errors.password}
        placeholder={t("Register.Password")}
        name="password"
        value={formState.password}
        onChange={handleChange}
        error={errors.password}
        maxLength={12}
        showCount
      />
      <CustomInput
        type="password"
        label={errors.confirmPassword}
        placeholder={t("Register.ConfirmPassword")}
        name="confirmPassword"
        value={formState.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
        maxLength={12}
        showCount
      />
      <SendInfoButton onClick={onSubmit}>
        {t("Register.SendButton")}
      </SendInfoButton>
    </>
  );
};

export default RegisterForm;
