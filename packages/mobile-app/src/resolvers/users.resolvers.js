import { REACT_APP_API_URL } from "@env";

export const getUserProfileInfoUrl = (userId) => {
  const API_URL = `${REACT_APP_API_URL}/api/users`;
  return `${API_URL}/userProfile/${userId}`;
};

export const getSendSuggestionsUrl = () => {
  const API_URL = `${REACT_APP_API_URL}/api/users`;
  return `${API_URL}/sendSuggestions`;
};

export const getEditUserProfileInfo = () => {
  const API_URL = `${REACT_APP_API_URL}/api/users`;
  return `${API_URL}/currentUserProfile/editUserProfile`;
};

export const getUsersSearch = (value) => {
  const API_URL = `${REACT_APP_API_URL}/api/users`;
  return `${API_URL}/usersSearch/${value}`;
};
