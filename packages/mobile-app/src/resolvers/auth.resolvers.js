import { REACT_APP_API_URL } from "@env";

export const getLoginUrl = () => {
  const API_URL = `${REACT_APP_API_URL}/api/auth`;
  return `${API_URL}/login`;
};

export const getRegistersUrl = () => {
  const API_URL = `${REACT_APP_API_URL}/api/auth`;
  return `${API_URL}/register`;
};

export const getAuthGoogleUrl = () => {
  const API_URL = `${REACT_APP_API_URL}/api/auth`;
  return `${API_URL}/google/`;
};
