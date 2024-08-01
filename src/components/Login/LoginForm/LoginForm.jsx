import { Link } from "react-router-dom";
import CustomInput from "../../CustomInput/CustomInput";
import {
  Logged,
  SendInfoButton,
  Subtitle,
  Title,
  Wrapper,
  // FacebookButton,
  Separator,
  WrapperLoginRRSS,
} from "./LoginForm.styled";
import GoogleAuthButton from "../../GoogleAuthButton/GoogleAuthButton";
// import FBIcon from "../../../images/facebook.png";

const LoginForm = (props) => {
  const { state, handleChange, onSubmit, errors } = props;

  return (
    <Wrapper>
      <Title>Welcome Back</Title>
      <Subtitle>Log into your account</Subtitle>
      <Separator> Log in with </Separator>
      {/* <GoogleButton onClick={() => console.log("Google login")}>
        <img src={GoogleIcon} alt="" />
        Google
      </GoogleButton> */}
      <WrapperLoginRRSS>
        <GoogleAuthButton />
      </WrapperLoginRRSS>
      {/* <FacebookButton onClick={() => console.log("Facebook login")}>
        <img src={FBIcon} alt="" />
        Facebook
      </FacebookButton> */}
      <Separator> or </Separator>
      <CustomInput
        type="text"
        label={errors.email}
        placeholder="Email"
        name="email"
        value={state.email}
        onChange={handleChange}
        error={errors.email}
      />
      <CustomInput
        type="password"
        label={errors.password}
        placeholder="Password"
        name="password"
        value={state.password}
        onChange={handleChange}
        error={errors.password}
      />
      <Link to="/forgotpassword"> I forgot my password </Link>
      <SendInfoButton onClick={onSubmit}>Send</SendInfoButton>
      <Logged>
        Are you not registered yet? <Link to="/register">Sign up</Link>
      </Logged>
    </Wrapper>
  );
};

export default LoginForm;
