import { Link } from "react-router-dom";
import CustomInput from "../../CustomInput/CustomInput";
import {
  Registered,
  SendInfoButton,
  Subtitle,
  Title,
  Wrapper,
  Separator,
  WrapperLoginRRSS,
} from "./RegisterForm.styled";
// import FBIcon from "../../../images/facebook.png";
import GoogleAuthButton from "../../GoogleAuthButton/GoogleAuthButton";

const RegisterForm = (props) => {
  const { state, handleChange, onSubmit, errors } = props;

  return (
    <Wrapper>
      <Title>Welcome</Title>
      <Subtitle>Insert your info</Subtitle>

      <Separator> Sign up with </Separator>

      <WrapperLoginRRSS>
        <GoogleAuthButton />
      </WrapperLoginRRSS>

      <Separator> or </Separator>

      <CustomInput
        type="text"
        label={errors.userName}
        placeholder="Username"
        name="userName"
        value={state.userName}
        onChange={handleChange}
        error={errors.userName}
      />
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
      <CustomInput
        type="password"
        label={errors.confirmPassword}
        placeholder="Confirm Password"
        name="confirmPassword"
        value={state.confirmPassword}
        onChange={handleChange}
        error={errors.confirmPassword}
      />
      <SendInfoButton onClick={onSubmit}>Send</SendInfoButton>

      <Registered>
        Do you already have an account? <Link to="/login">Sign in</Link>
      </Registered>
    </Wrapper>
  );
};

export default RegisterForm;
