// DEPENDENCIES
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

// REDUX
import { authGoogleAction } from "store/slices/authSlice";

// FUNCTION
const GoogleAuthButton = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const login = useGoogleLogin({
    onSuccess: async (response) => {
      try {
        const token = response?.access_token;
        await dispatch(authGoogleAction(token)).unwrap();

        navigate("/");
      } catch (error) {
        console.log(error);
      }
    },
    onError: () => {
      console.log("Login Failed");
    },
  });

  return <button onClick={() => login()}>Login with Google</button>;
};

export default GoogleAuthButton;
