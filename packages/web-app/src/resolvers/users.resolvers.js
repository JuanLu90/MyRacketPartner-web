const API_URL = `${import.meta.env.VITE_API_URL}/api/users`;

export const getUserProfileInfoUrl = (userId) =>
  `${API_URL}/userProfile/${userId}`;

export const getSendSuggestionsUrl = () => `${API_URL}/sendSuggestions`;

export const getEditUserProfileInfo = () =>
  `${API_URL}/currentUserProfile/editUserProfile`;

export const getUsersSearch = (value) => `${API_URL}/usersSearch/${value}`;
