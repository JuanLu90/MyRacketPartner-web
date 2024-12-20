// DEPENDENCIES
import { useMemo } from "react";
import {
  View,
  Text,
  ScrollView,
  Dimensions,
  TextInput,
  Button,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { useTranslation } from "react-i18next";
import RNPickerSelect from "react-native-picker-select";
import DateTimePicker from "@react-native-community/datetimepicker";

// REDUX
import { editUserInfoAction, userProfileAction } from "store/slices/usersSlice";

// STYLES
import styles from "./EditProfile.styled";

// COMMONS
import {
  styles as stylesCommons,
  types,
  states,
  useFormValidation,
  validates,
} from "@myracketpartner/common";

// FUNCTION
const EditProfile = ({ isAdmin, closeEditProfile, userId }) => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const userInfo = useSelector((state) => state.users.userInfo);

  const initialState = useMemo(
    () => states.initialStateEditProfile(userInfo),
    [userInfo],
  );

  const {
    formState,
    errors,
    handleChange,
    handleChangeBirthdate,
    handleValidation,
  } = useFormValidation(initialState, validates.validateEditProfile);

  const onSubmit = async () => {
    const isValid = handleValidation();
    if (!isValid) return;

    try {
      await dispatch(editUserInfoAction(formState)).unwrap();
      await dispatch(userProfileAction(userId)).unwrap();
      closeEditProfile();
      // await dispatch(toastAction(response)).unwrap();
    } catch (error) {
      // await dispatch(
      //   toastAction({ message: error.message, type: "ERROR" })
      // ).unwrap();
    }
  };

  const compareObj = JSON.stringify(initialState) === JSON.stringify(formState);

  const { width } = Dimensions.get("window");

  const generalWidth = width - 65;

  if (!isAdmin) return;

  return (
    <ScrollView>
      <Text style={styles.sectionTitle}>{t("EditProfile.Personal.Title")}</Text>
      <View
        style={{
          marginBottom: 30,
          paddingVertical: 20,
          paddingHorizontal: 20,
          backgroundColor: stylesCommons.colors.greyDarkSemiTransparent,
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: stylesCommons.colors.greyLight }}>
            {t("EditProfile.Personal.Email")}
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                width: generalWidth,
                backgroundColor: stylesCommons.colors.greyDark,
                opacity: 0.5,
              },
            ]}
            onChangeText={(value) => handleChange(value, "email")}
            value={userInfo?.email}
            editable={false}
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: stylesCommons.colors.greyLight }}>
            {t("EditProfile.Personal.Name")}
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                width: generalWidth,
                borderColor: errors.firstName
                  ? stylesCommons.colors.orange
                  : stylesCommons.colors.greyDark,
              },
            ]}
            onChangeText={(value) => handleChange(value, "firstName")}
            value={formState?.firstName}
            placeholder={t("EditProfile.Personal.Name")}
            placeholderTextColor={stylesCommons.colors.greyDark}
          />
          {errors.firstName && (
            <Text style={styles.errorLabel}>{errors.firstName}</Text>
          )}
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: stylesCommons.colors.greyLight }}>
            {t("EditProfile.Personal.Lastname")}
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                width: generalWidth,
                borderColor: errors.lastName
                  ? stylesCommons.colors.orange
                  : stylesCommons.colors.greyDark,
              },
            ]}
            onChangeText={(value) => handleChange(value, "lastName")}
            value={formState?.lastName}
            placeholder={t("EditProfile.Personal.Lastname")}
            placeholderTextColor={stylesCommons.colors.greyDark}
          />
          {errors.lastName && (
            <Text style={styles.errorLabel}>{errors.lastName}</Text>
          )}
        </View>
        {/* <View style={{ marginBottom: 20 }}>
          <Text style={{ color: stylesCommons.colors.greyLight }}>
            {t("EditProfile.Personal.Birthdate")}
          </Text>
          <DateTimePicker
            testID="dateTimePicker"
            value={formState.birthdate}
            mode="date"
            onChange={handleChangeBirthdate}
            display="default"
            style={{ ...styles.inputSelect, width: generalWidth }}
          />
        </View> */}
        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: stylesCommons.colors.greyLight }}>
            {t("EditProfile.Personal.Gender.Title")}
          </Text>
          <RNPickerSelect
            onValueChange={(value) => handleChange(value, "gender")}
            value={formState.gender}
            items={types.translateOptions(types.genderOptions, t)}
            style={{
              inputIOS: { ...styles.inputSelect, width: generalWidth },
              inputAndroid: { ...styles.inputSelect, width: generalWidth },
            }}
            darkTheme
            doneText="OK"
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: stylesCommons.colors.greyLight }}>
            {t("EditProfile.Personal.Height")}
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                width: generalWidth,
                borderColor: errors.height
                  ? stylesCommons.colors.orange
                  : stylesCommons.colors.greyDark,
              },
            ]}
            onChangeText={(value) => handleChange(value, "height")}
            value={formState?.height && String(formState?.height)}
            placeholder={t("EditProfile.Personal.Height")}
            placeholderTextColor={stylesCommons.colors.greyDark}
          />
          {errors.height && (
            <Text style={styles.errorLabel}>{errors.height}</Text>
          )}
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: stylesCommons.colors.greyLight }}>
            {t("EditProfile.Personal.Weight")}
          </Text>
          <TextInput
            style={[
              styles.input,
              {
                width: generalWidth,

                borderColor: errors.weight
                  ? stylesCommons.colors.orange
                  : stylesCommons.colors.greyDark,
              },
            ]}
            onChangeText={(value) => handleChange(value, "weight")}
            value={formState?.weight && String(formState?.weight)}
            placeholder={t("EditProfile.Personal.Weight")}
            placeholderTextColor={stylesCommons.colors.greyDark}
          />
          {errors.weight && (
            <Text style={styles.errorLabel}>{errors.weight}</Text>
          )}
        </View>
        {/* <View style={{ marginBottom: 20 }}>
          <Text style={{ color: stylesCommons.colors.greyLight }}>
            {t("Profile.Country")}
          </Text>
          <RNPickerSelect
            onValueChange={(value) => handleChange(value, "country")}
            value={formState.country}
            items={countries}
            style={{
              inputIOS: { ...styles.inputSelect, width: generalWidth },
              inputAndroid: { ...styles.inputSelect, width: generalWidth },
            }}
            darkTheme
            doneText="OK"
          />
        </View> */}
      </View>
      <Text style={styles.sectionTitle}>{t("EditProfile.Player.Title")}</Text>
      <View
        style={{
          marginBottom: 30,
          paddingVertical: 20,
          paddingHorizontal: 20,
          backgroundColor: stylesCommons.colors.greyDarkSemiTransparent,
        }}
      >
        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: stylesCommons.colors.greyLight }}>
            {t("EditProfile.Player.DominantHand.Title")}
          </Text>
          <RNPickerSelect
            onValueChange={(value) => handleChange(value, "dominantHand")}
            value={formState.dominantHand}
            items={types.translateOptions(types.dominantHandOptions, t)}
            style={{
              inputIOS: { ...styles.inputSelect, width: generalWidth },
              inputAndroid: { ...styles.inputSelect, width: generalWidth },
            }}
            darkTheme
            doneText="OK"
          />
        </View>
        <View style={{ marginBottom: 20 }}>
          <Text style={{ color: stylesCommons.colors.greyLight }}>
            {t("EditProfile.Player.Backhand.Title")}
          </Text>
          <RNPickerSelect
            onValueChange={(value) => handleChange(value, "backhand")}
            value={formState.backhand}
            items={types.translateOptions(types.backhandOptions, t)}
            style={{
              inputIOS: { ...styles.inputSelect, width: generalWidth },
              inputAndroid: { ...styles.inputSelect, width: generalWidth },
            }}
            darkTheme
            doneText="OK"
          />
        </View>
      </View>
      <View style={styles.wrapperSendButton}>
        <Button
          onPress={onSubmit}
          title={t("EditProfile.SendButton")}
          accessibilityLabel={t("EditProfile.SendButton")}
          disabled={compareObj}
        />
      </View>
    </ScrollView>
  );
};

export default EditProfile;
