// DEPENDENCIES
import { useNavigate } from "react-router-dom";

// STYLED
import {
  MenuIcon,
  UserDefaultIcon,
  WrapperMenu,
  WrapperMenuIcon,
  WrapperRightContent,
} from "./RightContent.styled";

// IMAGES
import UserDefaultImg from "images/user-default.png";

// FUNCTION
const RightContent = ({ id, profileImage, isOpen, toggleMenu }) => {
  const navigate = useNavigate();

  const handleMenuIconClick = (event) => {
    event.stopPropagation();
    toggleMenu();
  };

  return (
    <WrapperRightContent>
      {id && (
        <UserDefaultIcon
          src={profileImage ?? UserDefaultImg}
          onClick={() => navigate(`/profile/${id}`)}
        />
      )}
      <WrapperMenu isOpen={isOpen} onClick={toggleMenu}>
        <WrapperMenuIcon>
          <MenuIcon isOpen={isOpen} onClick={handleMenuIconClick} />
        </WrapperMenuIcon>
      </WrapperMenu>
    </WrapperRightContent>
  );
};

export default RightContent;
