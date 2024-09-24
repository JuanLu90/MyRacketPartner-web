import { lazy } from "react";

// const Home = lazy(() => import("../pages/Board/Board"));
const Board = lazy(() => import("pages/Board/Board"));
const MatchInfo = lazy(() => import("pages/MatchInfo/MatchInfo"));
// const TournamentDetails = lazy(() =>
//   import("../pages/TournamentDetails/TournamentDetails")
// );
// const TournamentInvitation = lazy(() =>
//   import("../pages/TournamentInvitation/TournamentInvitation")
// );
// const NewTournament = lazy(() =>
//   import("../pages/NewTournament/NewTournament")
// );
// const Tournaments = lazy(() => import("../pages/Tournaments/Tournaments"));
const Profile = lazy(() => import("pages/Profile/Profile"));
const Register = lazy(() => import("pages/Register/Register"));
const Login = lazy(() => import("pages/Login/Login"));
// const ForgotPassword = lazy(() =>
//   import("../pages/ForgotPassword/ForgotPassword.jsx")
// );
// const ResetPassword = lazy(() =>
//   import("../pages/ResetPassword/ResetPassword.jsx")
// );
const Suggestions = lazy(() => import("pages/Suggestions/Suggestions.jsx"));

export const routesTypes = {
  "/": {
    baseRoute: "/",
    title: "Board",
    component: Board,
    type: "public",
  },
  "/match/:matchId": {
    baseRoute: "/match",
    title: "Match Info",
    component: MatchInfo,
    type: "public",
  },
  // "/home": {
  //   baseRoute: "/home",
  //   title: "Home",
  //   component: Home,
  //   type: "public",
  // },
  // "/tournament/:tournamentID": {
  //   baseRoute: "/tournament",
  //   title: "Tournament",
  //   component: TournamentDetails,
  //   type: "public",
  // },
  // "/tournamentInvitation/:tournamentUrl/:email": {
  //   baseRoute: "/tournamentInvitation",
  //   title: "TournamentInvitation",
  //   component: TournamentInvitation,
  //   type: "public",
  // },
  // "/newtournament": {
  //   baseRoute: "/newtournament",
  //   title: "New Tournament",
  //   component: NewTournament,
  //   type: "private",
  // },
  // "/tournaments": {
  //   baseRoute: "/tournaments",
  //   title: "Your Tournaments",
  //   component: Tournaments,
  //   type: "private",
  // },
  "/profile/:userID": {
    baseRoute: "/profile",
    title: "Your profile",
    component: Profile,
    type: "private",
  },
  "/suggestions": {
    baseRoute: "/suggestions",
    title: "Suggestions",
    component: Suggestions,
    type: "private",
  },
  "/login": {
    baseRoute: "/login",
    title: "Login",
    component: Login,
    type: "noPrivate",
  },
  "/register": {
    baseRoute: "/register",
    title: "Register",
    component: Register,
    type: "noPrivate",
  },
  // "/forgotpassword": {
  //   baseRoute: "/forgotpassword",
  //   title: "Forgot Password",
  //   component: ForgotPassword,
  //   type: "noPrivate",
  // },
  // "/resetpassword/:userID/:uuid": {
  //   baseRoute: "/resetpassword",
  //   title: "Reset Password",
  //   component: ResetPassword,
  //   type: "noPrivate",
  // },
};
