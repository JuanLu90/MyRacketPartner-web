// DEPENDENCIES
import { Pressable } from "react-native";

// STYLES
import styles from "./FloatingButton.styled";

// IMAGES
import PlusIcon from "images/svg-components/PlusIcon";

// COMMONS
import { styles as stylesCommons } from "@myracketpartner/common";

// FUNCTION
const FloatingButton = ({ action }) => {
  return (
    <Pressable onPress={action} style={styles.button}>
      <PlusIcon pathFill={stylesCommons.colors.primary} />
    </Pressable>
  );
};

export default FloatingButton;
