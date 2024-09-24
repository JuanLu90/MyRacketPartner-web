// DEPENDENCIES
import { useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

// REDUX
import { editUserInfoAction, userProfileAction } from "store/slices/usersSlice";

// COMPONENTS
import CustomInput from "components/CustomInput/CustomInput";
import DropDownInput from "components/DropdownInput/DropdownInput";
import DatePickerInput from "components/DatePicker/DatePicker";

// HOOKS
import useFormValidation from "hooks/useFormValidation";

// STYLES
import {
  Wrapper,
  WrapperInfo,
  WrapperSendButton,
  Button,
} from "./EditProfile.styled";

// UTILS
import {
  backhandOptions,
  dominantHandOptions,
  genderOptions,
} from "utils/typesUtil";
import { normalizeDate } from "utils/dateUtil";
import { countries } from "utils/countriesUtil";
import { validateEditProfile } from "utils/validationUtil";

// import ChangePasswordModal from "./Modals/ChangePasswordModal.jsx";
// import EditPlayerInformationModal from "./Modals/EditPlayerInformationModal.jsx";

// FUNCTION
const EditProfile = ({ isAdmin, closeEditProfile }) => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { t } = useTranslation();

  const currentPath = location.pathname;
  const userId = currentPath.split(["/"]).slice(-1)[0];

  const userInfo = useSelector((state) => state.users.userInfo);

  const initialState = useMemo(
    () => ({
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      birthdate: normalizeDate(userInfo.birthdate),
      gender: userInfo.gender,
      dominantHand: userInfo.dominantHand,
      backhand: userInfo.backhand,
      height: userInfo.height,
      weight: userInfo.weight,
      country: userInfo.country,
    }),
    [userInfo]
  );

  const {
    formState,
    errors,
    handleChange,
    handleChangeBirthdate,
    handleValidation,
  } = useFormValidation(initialState, validateEditProfile);

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

  if (!isAdmin) return;

  return (
    <Wrapper>
      <WrapperInfo>
        <h3>{t("EditProfile.Personal.Title")}</h3>
        <div>
          <div>
            <CustomInput
              title={t("EditProfile.Personal.Email")}
              placeholder={t("EditProfile.Personal.Email")}
              name="email"
              value={userInfo?.email}
              disabled
            />
          </div>
          <div>
            <CustomInput
              title={t("EditProfile.Personal.Name")}
              label={errors.firstName}
              placeholder={t("EditProfile.Personal.Name")}
              name="firstName"
              value={formState.firstName}
              onChange={handleChange}
              error={errors.firstName}
              maxLength={12}
              showCount
            />
          </div>
          <div>
            <CustomInput
              title={t("EditProfile.Personal.Lastname")}
              label={errors.lastName}
              placeholder={t("EditProfile.Personal.Lastname")}
              name="lastName"
              value={formState.lastName}
              onChange={handleChange}
              error={errors.lastName}
              maxLength={30}
              showCount
            />
          </div>
          <div>
            <DatePickerInput
              title={t("EditProfile.Personal.Birthdate")}
              value={formState.birthdate}
              handleChange={handleChangeBirthdate}
            />
          </div>
          <div>
            <DropDownInput
              title={t("EditProfile.Personal.Gender.Title")}
              name="gender"
              handleChange={handleChange}
              options={genderOptions}
              value={formState.gender}
            />
          </div>
          <div>
            <CustomInput
              title={t("EditProfile.Personal.Height")}
              label={errors.height}
              placeholder={t("EditProfile.Personal.Height")}
              name="height"
              value={formState.height}
              onChange={handleChange}
              error={errors.height}
            />
          </div>
          <div>
            <CustomInput
              title={t("EditProfile.Personal.Weight")}
              label={errors.weight}
              placeholder={t("EditProfile.Personal.Weight")}
              name="weight"
              value={formState.weight}
              onChange={handleChange}
              error={errors.weight}
            />
          </div>
          <div>
            <DropDownInput
              title={t("Profile.Country")}
              name="country"
              handleChange={handleChange}
              options={countries}
              value={formState.country}
            />
          </div>
        </div>
      </WrapperInfo>
      {/* <WrapperInfo>
          <h3>{t("EditProfile.Account.Title")}</h3>
          <div>
            <div>
              <span>{t("EditProfile.Account.Id")}</span>
              <span> #{userId} </span>
            </div>
            <div>
              <span>{t("EditProfile.Account.Username")}</span>
              <span> {userName} </span>
            </div>
            <div>
              <span>{t("EditProfile.Account.CreationDate")}</span>
              <span> {formatDate(createDate)} </span>
            </div>
            <div>
              <span>{t("EditProfile.Account.Password")}</span>
               <span>
                <button onClick={() => setIsModalOpenChangePassword(true)}>
                  Change
                </button>
              </span> 
            </div>
          </div>
        </WrapperInfo> */}
      <WrapperInfo>
        <h3>{t("EditProfile.Player.Title")}</h3>
        <div>
          <div>
            <DropDownInput
              title={t("EditProfile.Player.DominantHand.Title")}
              name="dominantHand"
              handleChange={handleChange}
              options={dominantHandOptions}
              value={formState.dominantHand}
            />
          </div>
          <div>
            <DropDownInput
              title={t("EditProfile.Player.Backhand.Title")}
              name="backhand"
              handleChange={handleChange}
              options={backhandOptions}
              value={formState.backhand}
            />
          </div>
        </div>
      </WrapperInfo>

      <WrapperSendButton>
        <Button disabled={compareObj} onClick={onSubmit}>
          {t("EditProfile.SendButton")}
        </Button>
      </WrapperSendButton>
    </Wrapper>
  );
};

export default EditProfile;
