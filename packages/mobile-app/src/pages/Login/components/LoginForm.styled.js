import { StyleSheet } from "react-native";
import { styles as stylesCommons } from "@myracketpartner/common";

const styles = StyleSheet.create({
  input: {
    width: 40,
    height: 45,
    marginBottom: 6,
    paddingHorizontal: 10,
    color: stylesCommons.colors.white,
    borderWidth: 1,
  },
  sendButton: {
    marginHorizontal: "auto",
    marginBottom: 80,
    marginTop: 30,
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 12,
    backgroundColor: stylesCommons.colors.green,
  },
  textSenfButton: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  forgotPassword: {
    marginLeft: "auto",
    marginTop: 15,
  },
  textForgotPassword: {
    margin: "auto",
    fontSize: 18,
    color: stylesCommons.colors.green,
  },
  errorLabel: {
    fontSize: 17,
    color: stylesCommons.colors.orange,
  },
});

export default styles;
