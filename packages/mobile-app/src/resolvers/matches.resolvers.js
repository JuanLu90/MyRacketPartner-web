import { REACT_APP_API_URL } from "@env";

export const getMatchesUrl = () => {
  const API_URL = `${REACT_APP_API_URL}/api/matches`;
  return `${API_URL}/matches`;
};

export const getMatchDetailsUrl = (matchId) => {
  const API_URL = `${REACT_APP_API_URL}/api/matches`;
  return `${API_URL}/matchDetails/${matchId}`;
};

export const getMatchDetailsHeadToHeadUrl = (data) => {
  const API_URL = `${REACT_APP_API_URL}/api/matches`;
  return `${API_URL}/matchDetails/headtohead/${data.user1Id}/${data.user2Id}`;
};

export const getNewMatchUrl = () => {
  const API_URL = `${REACT_APP_API_URL}/api/matches`;
  return `${API_URL}/newMatch/`;
};

export const getEditMatchUrl = () => {
  const API_URL = `${REACT_APP_API_URL}/api/matches`;
  return `${API_URL}/editMatch/`;
};
