// DEPENDENCIES
import { useTranslation } from "react-i18next";

// STYLES
import { LanguageOption, WrapperSelectLanguage } from "./SelectLanguage.styled";

// IMAGES
import LanguageImg from "images/language.png";

// FUNCTION
const SelectLanguage = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng) => {
    localStorage.setItem("language", lng);
    i18n.changeLanguage(lng);
  };

  return (
    <WrapperSelectLanguage>
      <img src={LanguageImg} alt="" />
      <LanguageOption
        languageSelected={i18n.language === "es"}
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
    </WrapperSelectLanguage>
  );
};

export default SelectLanguage;
