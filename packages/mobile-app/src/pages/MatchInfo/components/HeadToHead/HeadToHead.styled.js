import { StyleSheet } from "react-native";
import { styles as stylesCommons } from "@myracketpartner/common";

const styles = StyleSheet.create({
  wrapperScore: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  usersWrapper: {
    flexDirection: "column",
    marginRight: 80,
    overflow: "hidden",
  },
  userStyled: {
    alignItems: "center",
    marginVertical: 3,
    whiteSpace: "nowrap",
    overflow: "hidden",
    textOverflow: "ellipsis",
    color: stylesCommons.colors.white,
    fontSize: 15,
  },
  winner: {
    fontWeight: "bold",
  },
  resultScore: {
    flexDirection: "row",
    gap: 8,
    height: "100%",
  },
  setWrapper: {
    flexDirection: "column",
    justifyContent: "center",
  },
  resultStyled: {
    margin: 3,
    color: stylesCommons.colors.white,
    fontSize: 15,
  },
  date: {
    marginRight: 15,
    fontSize: 13,
    fontWeight: "bold",
    color: stylesCommons.colors.greyLight,
  },
  tournamentName: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: stylesCommons.colors.white,
    backgroundColor: stylesCommons.colors.greyLightSemiTransparent,
    fontSize: 15,
    fontWeight: "bold",
  },
});

export default styles;
