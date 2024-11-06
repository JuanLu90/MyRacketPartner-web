// DEPENDENCIES
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Stack, useLocalSearchParams } from "expo-router";

// REDUX
import { userProfileAction } from "store/slices/usersSlice";

// COMPONENTS
import ProfileComponent from "pages/Profile/Profile";

// COMMONS
import { styles } from "@myracketpartner/common";

// FUNCTION
const ProfileId = () => {
  const { profileId } = useLocalSearchParams();

  const dispatch = useDispatch();

  const userIdPath = Number(profileId);
  const userInfo = useSelector((state) => state.users.userInfo || {});
  const userId = useSelector((state) => state.auth.user.id);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        await dispatch(userProfileAction(userIdPath)).unwrap();
      } catch (error) {
        console.log(error);
      }
    };
    // if (!createDate) {
    //   getUserInfo();
    // }
    getUserInfo();
  }, [dispatch, userIdPath]);

  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: styles.colors.green },
          headerTintColor: styles.colors.primary,
          headerLeft: () => {},
          headerRight: () => {},
          headerTitle: `${userInfo.userName} - Profile`,
        }}
      />
      <ProfileComponent
        userInfo={{ ...userInfo }}
        userIdPath={userIdPath}
        userId={userId}
      />
    </>
  );
};
export default ProfileId;
