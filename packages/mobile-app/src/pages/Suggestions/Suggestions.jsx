// DEPENDENCIES
import { useState } from "react";
import { View, Text, TextInput, Pressable, Dimensions } from "react-native";
import CheckBox from "@react-native-community/checkbox";
import { useTranslation } from "react-i18next";
import { useDispatch } from "react-redux";

// REDUX
import { sendSuggestionsAction } from "store/slices/usersSlice";

// STYLES
import styles from "./Suggestions.styled";

// COMMONS
import {
  styles as stylesCommons,
  states,
  useFormValidation,
  validates,
} from "@myracketpartner/common";

// FUNCTION
const Suggestions = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const { formState, setFormState, errors, handleChange, handleValidation } =
    useFormValidation(
      states.initialStateSuggestions,
      validates.validateSuggestions,
    );

  // const handleChange = (event) => {
  //   const { name, value, type, checked } = event.target;

  //   let finalValue = value;

  //   if (type === "checkbox") {
  //     finalValue = checked ? 1 : 0;
  //   }

  //   setSuggestionsState((prevSuggestions) => {
  //     return {
  //       ...prevSuggestions,
  //       [name]: finalValue,
  //     };
  //   });
  // };

  const handleSendSuggestions = async () => {
    const isValid = handleValidation();
    if (!isValid) return;

    try {
      await dispatch(sendSuggestionsAction(formState)).unwrap();
      setFormState(states.initialStateSuggestions);
      // await dispatch(
      //   toastAction({ message: response, type: "SUCCESS" })
      // ).unwrap();
    } catch (error) {
      console.log(error);
      // await dispatch(
      //   toastAction({ message: error.message, type: "ERROR" })
      // ).unwrap();
    }
  };

  const { width } = Dimensions.get("window");
  const generalWidth = width - 65;

  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>{t("Suggestions.Title")}</Text>
      <Text style={styles.subtitle}>{t("Suggestions.Description")}</Text>

      <TextInput
        style={[
          styles.textAreaInput,
          errors.suggestions && { borderColor: stylesCommons.colors.orange },
        ]}
        multiline
        numberOfLines={4}
        value={formState.suggestions}
        onChangeText={(value) => handleChange(value, "suggestions")}
        placeholder={t("Suggestions.PlaceholderTextArea")}
        placeholderTextColor={stylesCommons.colors.greyDark}
      />
      {errors.suggestions && (
        <Text style={styles.errorLabel}>{errors.suggestions}</Text>
      )}

      {/* <View style={[styles.wrapperCheckBox, { maxWidth: generalWidth }]}>
        <CheckBox
          value={formState.shareSuggestion}
          onValueChange={(newValue) =>
            handleChange(newValue, "shareSuggestion")
          }
          onTintColor={stylesCommons.colors.orange}
          onFillColor={stylesCommons.colors.orange}
          onCheckColor={stylesCommons.colors.white}
          animationDuration="0"
          boxType="square"
          style={{ width: 20, height: 20 }}
        />
        <Pressable
          onPress={() =>
            setFormState((prevState) => ({
              ...prevState,
              shareSuggestion: prevState.shareSuggestion === 1 ? 0 : 1,
            }))
          }
        >
          <Text style={styles.checkboxLabel}>
            {t("Suggestions.CheckboxShare")}
          </Text>
        </Pressable>
      </View> */}

      <Pressable
        style={styles.createSuggestionsButton}
        onPress={handleSendSuggestions}
      >
        <Text style={styles.buttonText}>{t("Suggestions.SendButton")}</Text>
      </Pressable>
    </View>
  );
};

export default Suggestions;
