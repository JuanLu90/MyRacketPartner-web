// DEPENDENCIES
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// STYLED
import {
  Wrapper,
  UserProfileIcon,
  NameInfo,
  UsernameInfo,
} from "./FirstBlock.styled";

// IMAGES
import UserDefaultImg from "images/user-default.png";

// FUNCTION
const FirstBlock = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const userInfo = useSelector((state) => state.users.userInfo);
  const userIdPath = Number(currentPath.split(["/"]).slice(-1)[0]);

  return (
    <Wrapper>
      <UserProfileIcon src={userInfo?.profileImage ?? UserDefaultImg} />
      <NameInfo>
        {userInfo?.firstName} {userInfo?.lastName}
      </NameInfo>
      <UsernameInfo>
        {userInfo?.userName} #{userIdPath}
      </UsernameInfo>
    </Wrapper>
  );
};

export default FirstBlock;
