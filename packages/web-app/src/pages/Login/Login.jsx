// DEPENDENCIES
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

// import { toastAction } from "../../redux/slices/alertSlice";

// COMPONENTS
import LoginForm from "./components/LoginForm/LoginForm";
import GoogleAuthButton from "components/GoogleAuthButton/GoogleAuthButton";

// STYLES
import {
  Logged,
  Subtitle,
  Title,
  Wrapper,
  Separator,
  WrapperLoginRRSS,
} from "./Login.styled";

// FUNCTION
const Login = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <Title>{t("Login.Title")}</Title>
      <Subtitle>{t("Login.Subtitle")}</Subtitle>
      <Separator> {t("Login.Separator1")} </Separator>
      <WrapperLoginRRSS>
        <GoogleAuthButton />
      </WrapperLoginRRSS>
      <Separator> {t("Login.Separator2")} </Separator>
      <LoginForm />
      <Logged>
        {t("Login.NoRegisterYet")}{" "}
        <Link to="/register">{t("Login.Signup")}</Link>
      </Logged>
    </Wrapper>
  );
};

export default Login;
