// DEPENDENCES
import React from "react";
import {
  Wrapper,
  WrapperRRSS,
  Links,
  LogoIcon,
  DonatePaypalImage,
  Separator,
} from "./Footer.styled";
import FBIcon from "../../images/facebook.png";
import IGIcon from "../../images/instagram.png";
import PaypalIcon from "../../images/donate-paypal.png";

const Footer = () => {
  return (
    <Wrapper>
      {/* <span>MyRacketPartner</span> */}
      <LogoIcon />
      <WrapperRRSS>
        <img src={FBIcon} alt="" />
        <img src={IGIcon} alt="" />
      </WrapperRRSS>
      <Links>
        <span>© 2023 MyRacketPartner </span>
        <span>Avisos Legales</span>
        <span>Política de cookies</span>
        <span>Política de privacidad</span>
      </Links>
      <Separator />
      <p>
        MyRacketPartner es una aplicación totalmente gratuita. Si te gusta y
        quieres apoyar el proyecto, puedes hacerlo mediante PayPal.
        <br />
        <br />
        Todas las contribuciones se destinan a cubrir gastos fijos como hosting,
        dominio, entre otros. ¡Gracias!
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
