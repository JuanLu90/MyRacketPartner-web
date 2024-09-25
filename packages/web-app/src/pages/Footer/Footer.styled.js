import styled from "styled-components";
import { styles } from "@myracketpartner/common";
import LogoImg from "images/logo.svg?react";

export const Wrapper = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding: 20px;
  background-color: ${styles.colors.orange};
  color: black;
  font-weight: bold;
  text-align: center;

  > span:first-child {
    margin-bottom: 20px;
    font-size: 25px;
  }

  > p {
    margin-top: 25px;
  }
`;

export const WrapperRRSS = styled.div`
  display: flex;
  margin: 20px 0;

  > span {
    margin: 0 20px;
  }

  > img {
    width: 30px;
    height: 30px;
    margin: 0 15px;
  }
`;

export const Links = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;

  > span {
    margin: 3px;
  }
`;

export const LogoIcon = styled(LogoImg)`
  width: 300px;
  margin: 10px 0;
`;

export const DonatePaypalImage = styled.img`
  width: 150px;
`;

export const Separator = styled.hr`
  width: 100%;
  border-top: 2px solid ${styles.colors.primary};
  border-bottom: none;
`;
