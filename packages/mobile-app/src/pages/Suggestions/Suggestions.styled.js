import { StyleSheet } from "react-native";
import { styles as stylesCommons } from "@myracketpartner/common";

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    padding: 20,
    backgroundColor: stylesCommons.colors.primary,
  },
  title: {
    marginBottom: 10,
    fontSize: 24,
    fontWeight: "bold",
    color: stylesCommons.colors.white,
  },
  subtitle: {
    marginBottom: 25,
    color: stylesCommons.colors.greyLight,
    fontSize: 16,
  },
  textAreaInput: {
    width: "100%",
    height: 100,
    marginBottom: 7,
    padding: 10,
    backgroundColor: "transparent",
    color: stylesCommons.colors.white,
    borderColor: stylesCommons.colors.greyDark,
    borderWidth: 1,
    borderRadius: 5,
    textAlignVertical: "top", // Ensure the text starts at the top in multiline TextInput
  },
  wrapperCheckBox: {
    flexDirection: "row",
    marginTop: 30,
    marginBottom: 34,
  },
  checkboxLabel: {
    marginLeft: 8,
    color: stylesCommons.colors.white,
  },
  createSuggestionsButton: {
    alignSelf: "center",
    paddingVertical: 12,
    paddingHorizontal: 20,
    backgroundColor: stylesCommons.colors.orange,
    borderRadius: 5,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: stylesCommons.colors.primary,
  },
  errorLabel: {
    fontSize: 17,
    color: stylesCommons.colors.orange,
  },
});

export default styles;
