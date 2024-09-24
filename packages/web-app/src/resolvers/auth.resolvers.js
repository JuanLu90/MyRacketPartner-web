const API_URL = `${import.meta.env.VITE_API_URL}/api/auth`;

export const getLoginUrl = () => `${API_URL}/login`;
export const getRegistersUrl = () => `${API_URL}/register`;
export const getAuthGoogleUrl = () => `${API_URL}/google/`;
