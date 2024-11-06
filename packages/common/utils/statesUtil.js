import { dates } from "../utils";

const initialStateLoginForm = {
  email: "",
  password: "",
};

const initialStateRegisterForm = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const initialStateSuggestions = {
  suggestions: "",
  shareSuggestion: 0,
};

const initialStateAuthSlice = {
  isLoggedIn: false,
  token: null,
  user: { id: "", name: "", userName: "", email: "" },
};

const initialStateMatchSlice = {
  matches: [],
  matchDetails: {},
  matchDetailsHeadToHead: [],
};

const initialStateUsersSlice = {
  userInfo: {},
};

const initialStateEditProfile = (userInfo) => {
  return {
    firstName: userInfo.firstName,
    lastName: userInfo.lastName,
    birthdate: dates.normalizeDate(userInfo.birthdate),
    gender: userInfo.gender,
    dominantHand: userInfo.dominantHand,
    backhand: userInfo.backhand,
    height: userInfo.height,
    weight: userInfo.weight,
    country: userInfo.country,
  };
};

const states = {
  initialStateLoginForm,
  initialStateRegisterForm,
  initialStateSuggestions,
  initialStateAuthSlice,
  initialStateMatchSlice,
  initialStateUsersSlice,
  initialStateEditProfile,
};

export default states;
