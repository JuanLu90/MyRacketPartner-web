import { StyleSheet } from "react-native";
import { styles as stylesCommons } from "@myracketpartner/common";

const styles = StyleSheet.create({
  button: {
    backgroundColor: stylesCommons.colors.white,
    borderRadius: 4,
    height: 40,
    paddingHorizontal: 12,
    justifyContent: "center",
  },
  contentWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrapper: {
    width: 20,
    height: 20,
    marginRight: 12,
  },
  contents: {
    fontSize: 14,
    fontWeight: "500",
  },
});

export default styles;
