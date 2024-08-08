import { lazy } from "react";

// const Home = lazy(() => import("../components/Board/Board"));
const Board = lazy(() => import("../components/Board/Board"));
const MatchInfo = lazy(() => import("../components/MatchInfo/MatchInfo"));
// const TournamentDetails = lazy(() =>
//   import("../components/TournamentDetails/TournamentDetails")
// );
// const TournamentInvitation = lazy(() =>
//   import("../components/TournamentInvitation/TournamentInvitation")
// );
// const NewTournament = lazy(() =>
//   import("../components/NewTournament/NewTournament")
// );
// const Tournaments = lazy(() => import("../components/Tournaments/Tournaments"));
// const Profile = lazy(() => import("../components/Profile/Profile"));
const Register = lazy(() => import("../components/Register/Register"));
const Login = lazy(() => import("../components/Login/Login"));
// const ForgotPassword = lazy(() =>
//   import("../components/ForgotPassword/ForgotPassword.jsx")
// );
// const ResetPassword = lazy(() =>
//   import("../components/ResetPassword/ResetPassword.jsx")
// );
// const Suggestions = lazy(() =>
//   import("../components/Suggestions/Suggestions.jsx")
// );

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
  // "/profile": {
  //   baseRoute: "/profile",
  //   title: "Your profile",
  //   component: Profile,
  //   type: "private",
  // },
  // "/suggestions": {
  //   baseRoute: "/suggestions",
  //   title: "Suggestions",
  //   component: Suggestions,
  //   type: "private",
  // },
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
