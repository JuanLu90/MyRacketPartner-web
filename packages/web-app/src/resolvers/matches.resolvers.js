const API_URL = `${import.meta.env.VITE_API_URL}/api/matches`;

export const getMatchesUrl = () => `${API_URL}/matches`;
export const getMatchDetailsUrl = (matchId) =>
  `${API_URL}/matchDetails/${matchId}`;
export const getMatchDetailsHeadToHeadUrl = (data) =>
  `${API_URL}/matchDetails/headtohead/${data.user1Id}/${data.user2Id}`;
export const getNewMatchUrl = () => `${API_URL}/newMatch`;
export const getEditMatchUrl = () => `${API_URL}/editMatch`;
