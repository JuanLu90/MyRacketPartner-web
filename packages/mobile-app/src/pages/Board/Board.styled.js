import { StyleSheet } from "react-native";
import { styles as stylesCommons } from "@myracketpartner/common";

const styles = StyleSheet.create({
  wrapperTitle: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    color: stylesCommons.colors.white,
    fontSize: 17,
    fontWeight: "bold",
  },
});

export default styles;
