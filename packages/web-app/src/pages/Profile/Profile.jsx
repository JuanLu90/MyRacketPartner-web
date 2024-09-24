// DEPENDENCIES
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";

// REDUX
import { userProfileAction } from "store/slices/usersSlice";

// COMPONENTS
import EditProfile from "./components/EditProfile/EditProfile";
import UserInfo from "./components/UserInfo/UserInfo";
import FirstBlock from "./components/FirstBlock/FirstBlock";
import HandInfoBox from "./components/HandInfoBox/HandInfoBox";

// STYLES
import {
  Wrapper,
  WrapperButtons,
  WrapperProfileInfo,
  Button,
} from "./Profile.styled";

// import ChangePasswordModal from "./Modals/ChangePasswordModal.jsx";
// import EditPlayerBoxrmationModal from "./Modals/EditPlayerBoxrmationModal.jsx";

// FUNCTION
const Profile = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const { t } = useTranslation();

  //   const [isModalOpenChangePassword, setIsModalOpenChangePassword] =
  //     useState(false);
  const [isModalOpenEditPersonalInfo, setIsModalOpenEditPersonalInfo] =
    useState(false);
  //   const [isModalOpenEditPlayerBox, setIsModalOpenEditPlayerBox] =
  //     useState(false);

  const currentPath = location.pathname;

  const userIdPath = Number(currentPath.split(["/"]).slice(-1)[0]);
  const userId = useSelector((state) => state.auth.user.id);

  const [editProfileActive, setEditProfileActive] = useState(false);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        await dispatch(userProfileAction(userIdPath)).unwrap();
      } catch (error) {
        console.log(error);
      }
    };

    getUserInfo();
  }, [dispatch, userIdPath]);

  const isAdmin = userId === userIdPath;

  return (
    <>
      <Wrapper>
        <FirstBlock />

        {isAdmin && (
          <WrapperButtons>
            {editProfileActive ? (
              <Button onClick={() => setEditProfileActive(false)}>
                Volver
              </Button>
            ) : (
              <Button onClick={() => setEditProfileActive(true)}>
                Editar perfil
              </Button>
            )}
          </WrapperButtons>
        )}

        {editProfileActive ? (
          <EditProfile
            isAdmin={isAdmin}
            closeEditProfile={() => setEditProfileActive(false)}
          />
        ) : (
          <WrapperProfileInfo>
            <UserInfo />
            <h3>{t("Profile.AsPlayer")}</h3>
            <HandInfoBox hand="dominationHand" />
            <HandInfoBox hand="backHand" />
          </WrapperProfileInfo>
        )}
      </Wrapper>

      {/* <ChangePasswordModal
        isOpen={isModalOpenChangePassword}
        closeModal={() => setIsModalOpenChangePassword(false)}
      />

      <EditPlayerBoxrmationModal
        isOpen={isModalOpenEditPlayerBox}
        closeModal={() => setIsModalOpenEditPlayerBox(false)}
        personalInfo={{
          userName,
          dominantHand,
          backhand,
        }}
      /> */}

      {/* <EditPersonalInformationModal
        isOpen={isModalOpenEditPersonalInfo}
        closeModal={() => setIsModalOpenEditPersonalInfo(false)}
        personalInfo={{
          firstName: userState?.firstName,
          lastName: userState?.lastName,
          gender: userState?.gender,
          birthdate: userState?.birthdate,
        }}
      /> */}
    </>
  );
};

export default Profile;