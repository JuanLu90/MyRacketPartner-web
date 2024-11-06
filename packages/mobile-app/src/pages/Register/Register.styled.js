import { StyleSheet } from "react-native";
import { styles as stylesCommons } from "@myracketpartner/common";

const styles = StyleSheet.create({
  wrapper: { alignItems: "center", marginTop: 50 },
  textColor: {
    color: stylesCommons.colors.white,
  },
  title: {
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 3,
  },
  subtitle: {
    fontSize: 15,
    fontWeight: "bold",
    color: stylesCommons.colors.greyLight,
  },
  Register: {
    fontSize: 18,
    marginVertical: 30,
  },
});

export default styles;
