import { StyleSheet } from "react-native";
import { styles as stylesCommons } from "@myracketpartner/common";

const styles = StyleSheet.create({
  wrapper: {
    position: "sticky",
    top: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: stylesCommons.colors.primary,
    zIndex: 3,
  },
  logoIcon: {
    height: 40,
    cursor: "pointer",
    fill: stylesCommons.colors.green,
  },
  wrapperMenuIcon: {
    flexDirection: "row",
    alignItems: "center",
  },
  menuIcon: {
    height: 40,
    cursor: "pointer",
    fill: stylesCommons.colors.green,
  },
  dropdownWrapper: {
    position: "absolute",
    top: 60,
    right: 0,
    width: 200,
    backgroundColor: stylesCommons.colors.green,
    overflow: "hidden",
  },
  listItem: {
    display: "flex",
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: "transparent",
    borderBottomWidth: 1,
    borderBottomColor: stylesCommons.colors.primary,
  },
  listItemText: {
    color: stylesCommons.colors.primary,
  },
  separator: {
    width: "100%",
    opacity: 0.4,
    borderTopWidth: 2,
    borderTopColor: stylesCommons.colors.greyDark,
  },
  wrapperSelectLanguage: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 20,
  },
  languageOption: {
    marginHorizontal: 7,
    paddingVertical: 3,
    paddingHorizontal: 7,
    borderRadius: 5,
    borderWidth: 2,
    borderColor: "transparent",
  },
  languageOptionText: {
    color: stylesCommons.colors.primary,
    fontSize: 18,
  },
  languageOptionSelected: {
    borderColor: "black",
  },
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  list: {
    width: "80%",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    marginVertical: 10,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    textAlign: "center",
  },
  rightContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  menu: {
    position: "absolute",
    top: 97,
    right: 0,
    width: 250,
    height: "100%",
    backgroundColor: stylesCommons.colors.green,
    padding: 20,
    zIndex: 10,
  },
  menuItem: {
    marginBottom: 20,
    borderWidth: 1,
    borderColor: stylesCommons.colors.primary,
  },
  menuText: {
    padding: 10,
    color: stylesCommons.colors.primary,
    fontSize: 18,
    borderWidth: 1,
    borderColor: stylesCommons.colors.primary,
    textAlign: "center",
  },
  suggestionsLink: {
    padding: 30,
    textAlign: "center",
  },
});

export default styles;
