// DEPENDENCIES
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// COMPONENTS
import RegisterForm from "pages/Register/components/RegisterForm/RegisterForm";
import GoogleAuthButton from "components/GoogleAuthButton/GoogleAuthButton";

// import { toastAction } from "../../redux/slices/alertSlice";

// STYLES
import {
  Registered,
  Subtitle,
  Title,
  Wrapper,
  Separator,
  WrapperLoginRRSS,
} from "./Register.styled";

// FUNCTION
const Register = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t("Register.Title")}</Title>
      <Subtitle>{t("Register.Subtitle")}</Subtitle>

      <Separator> {t("Register.Separator1")} </Separator>

      <WrapperLoginRRSS>
        <GoogleAuthButton />
      </WrapperLoginRRSS>

      <Separator> {t("Register.Separator2")} </Separator>
      <RegisterForm />

      <Registered>
        {t("Register.haveAccount")}{" "}
        <Link to="/login">{t("Register.Signin")}</Link>
      </Registered>
    </Wrapper>
  );
};

export default Register;
