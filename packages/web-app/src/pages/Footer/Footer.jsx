// DEPENDENCIES
import { useTranslation } from "react-i18next";

// STYLES
import {
  Wrapper,
  WrapperRRSS,
  Links,
  LogoIcon,
  DonatePaypalImage,
  Separator,
} from "./Footer.styled";

// IMAGES
import FBIcon from "images/facebook.png";
import IGIcon from "images/instagram.png";
import PaypalIcon from "images/donate-paypal.png";

// FUNCTION
const Footer = () => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <LogoIcon />
      <WrapperRRSS>
        <img src={FBIcon} alt="" />
        <img src={IGIcon} alt="" />
      </WrapperRRSS>
      <Links>
        <span>{t("Footer.Link1")}</span>
        <span>{t("Footer.Link2")}</span>
        <span>{t("Footer.Link3")}</span>
        <span>{t("Footer.Link4")}</span>
      </Links>
      <Separator />
      <p>
        {t("Footer.Info1")}
        <br />
        <br />
        {t("Footer.Info2")}
      </p>

      <a
        href="https://www.paypal.com/paypalme/jlmorenocalderon"
        target="_blank"
        rel="noreferrer"
      >
        <DonatePaypalImage src={PaypalIcon} alt="" />
      </a>
    </Wrapper>
  );
};

export default Footer;
