// DEPENDENCIES
import { Text, View, ScrollView } from "react-native";
import { Link, Stack } from "expo-router";
import { useTranslation } from "react-i18next";

// COMPONENTS
import RegisterForm from "./components/RegisterForm";
// import GoogleAuthButton from "components/GoogleAuthButton/GoogleAuthButton";

// STYLES
import styles from "./Register.styled";

// COMMONS
import { styles as stylesCommons } from "@myracketpartner/common";

// FUNCTION
const Register = () => {
  const { t } = useTranslation();

  return (
    <ScrollView>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: stylesCommons.colors.green },
          headerTintColor: stylesCommons.colors.primary,
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: "Sign up",
        }}
      />
      <View style={styles.wrapper}>
        <Text style={[styles.textColor, styles.title]}>
          {t("Register.Title")}
        </Text>
        <Text style={[styles.textColor, styles.subtitle, { marginBottom: 40 }]}>
          {t("Register.Subtitle")}
        </Text>
        {/* <Text style={[styles.textColor, styles.Register]}>
          {t("Register.Separator1")}
        </Text> */}
        {/* <GoogleAuthButton /> */}
        {/* <Text style={[styles.textColor, styles.Register]}>
          {t("Register.Separator2")}
        </Text> */}
        <RegisterForm />
        <Text style={[styles.textColor, { fontSize: 18 }]}>
          {t("Register.haveAccount")}{" "}
          <Link href="/login" style={styles.forgotPassword}>
            <Text style={{ color: stylesCommons.colors.green }}>
              {t("Register.Signin")}
            </Text>
          </Link>
        </Text>
      </View>
    </ScrollView>
  );
};

export default Register;
