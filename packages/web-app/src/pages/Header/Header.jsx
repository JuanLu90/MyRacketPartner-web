// DEPENDENCIES
import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

// COMPONENTS
import MenuItems from "./components/MenuItems/MenuItems";
import SelectLanguage from "./components/SelectLanguage/SelectLanguage";
import RightContent from "./components/RightContent/RightContent";

// STYLES
import {
  Wrapper,
  DropdownWrapper,
  LogoIcon,
  WrapperLogo,
} from "./Header.styled";

// FUNCTION
const Header = () => {
  const navigate = useNavigate();

  const {
    user: { id, profileImage },
  } = useSelector((state) => state.auth);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [wrapperRef]);

  return (
    <Wrapper ref={wrapperRef} onClick={() => setIsOpen(false)}>
      <WrapperLogo>
        <LogoIcon onClick={() => navigate("/")} />
      </WrapperLogo>
      <RightContent
        id={id}
        profileImage={profileImage}
        isOpen={isOpen}
        toggleMenu={toggleMenu}
      />
      <DropdownWrapper open={isOpen}>
        <div>
          <SelectLanguage />
          <MenuItems id={id} toggleMenu={toggleMenu} />
        </div>
      </DropdownWrapper>
    </Wrapper>
  );
};

export default Header;
