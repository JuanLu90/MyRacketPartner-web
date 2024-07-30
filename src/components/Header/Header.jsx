import { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../../redux/slices/authSlice";
import {
  Wrapper,
  DropdownWrapper,
  WrapperMenu,
  WrapperMenuIcon,
  WrapperSelectLanguage,
  LogoIconIcon,
  MenuIcon,
  UserDefaultIcon,
  Separator,
  RightContent,
  WrapperLogo,
  LanguageOption,
} from "./Header.styled";
import UserDefaultImg from "../../images/user-default.png";
// import LanguageImg from "../../images/language.png";
// import { useTranslation } from "react-i18next";

const Header = () => {
  // const dispatch = useDispatch();
  const navigate = useNavigate();
  // const { i18n } = useTranslation();

  const {
    user: { id, profileImage },
  } = useSelector((state) => state.auth);

  const toggleMenu = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen);
  };

  // const changeLanguage = (lng) => {
  //   localStorage.setItem("language", lng);
  //   i18n.changeLanguage(lng);
  // };

  // const logoutAction = async () => {
  //   try {
  //     await dispatch(logout()).unwrap();
  //     navigate("/login");
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const [isOpen, setIsOpen] = useState(false);

  const wrapperRef = useRef(null);

  useEffect(() => {
    const handleOutsideClick = (event) => {
      // Si el clic no está dentro del menú, ciérralo
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    // Agregar el event listener cuando el componente se monta
    document.addEventListener("mousedown", handleOutsideClick);

    // Limpiar el event listener cuando el componente se desmonta
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [wrapperRef]);

  const handleMenuIconClick = (event) => {
    // Evitar que el menú se cierre cuando se hace clic en el icono del menú
    event.stopPropagation();
    toggleMenu();
  };

  return (
    <Wrapper ref={wrapperRef} onClick={() => setIsOpen(false)}>
      <WrapperLogo>
        <LogoIconIcon onClick={() => navigate("/")} />
      </WrapperLogo>
      <RightContent>
        {id && (
          <UserDefaultIcon
            src={profileImage ?? UserDefaultImg}
            onClick={() => navigate("/profile")}
          />
        )}
        <WrapperMenu isOpen={isOpen} onClick={toggleMenu}>
          <WrapperMenuIcon>
            <MenuIcon isOpen={isOpen} onClick={handleMenuIconClick} />
          </WrapperMenuIcon>
        </WrapperMenu>
      </RightContent>

      <DropdownWrapper open={isOpen}>
        <div>
          {/* <WrapperSelectLanguage>
            <img src={LanguageImg} alt="" />
            <LanguageOption
              languageSelected={i18n.language === "es"}
              onClick={() => changeLanguage("es")}
              onClick={() => changeLanguage("es")}
            >
              ES
            </LanguageOption>
            <LanguageOption
              languageSelected={i18n.language === "en"}
              onClick={() => changeLanguage("en")}
            >
              EN
            </LanguageOption>
          </WrapperSelectLanguage> */}
          <ul>
            {/* {id ? (
              <>
                <li>
                  <Link to="/tournaments" onClick={toggleMenu}>
                    <span>Tournaments</span>
                  </Link>
                </li>
                <li>
                  <Separator />
                </li>
                <li>
                  <Link to="/suggestions" onClick={toggleMenu}>
                    <span>Suggestions</span>
                  </Link>
                </li>
                <li>
                  <Separator />
                </li>
                <li>
                  <button onClick={logoutAction}> Logout</button>
                </li>
              </>
            ) : (
              <>
                <li>
                  <button onClick={() => navigate("/login")}>Log in</button>
                </li>
                <li>
                  <Separator />
                </li>
                <li>
                  <button onClick={() => navigate("/register")}>Sign up</button>
                </li>
              </>
            )} */}
            <li>
              <button onClick={() => console.log("login")}>Log in</button>
            </li>
            <li>
              <Separator />
            </li>
            <li>
              <button onClick={() => console.log("signup")}>Sign up</button>
            </li>
          </ul>
        </div>
      </DropdownWrapper>
    </Wrapper>
  );
};

export default Header;
