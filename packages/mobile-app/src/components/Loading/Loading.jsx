// DEPENDENCIES
import { View, ActivityIndicator } from "react-native";

// STYLES
import styles from "./Loading.styled";

// COMMONS
import { styles as stylesCommons } from "@myracketpartner/common";

// FUNCTION
const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={stylesCommons.colors.green} />
    </View>
  );
};

export default Loading;
