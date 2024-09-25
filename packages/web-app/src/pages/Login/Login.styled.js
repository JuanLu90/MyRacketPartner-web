import styled from "styled-components";
import { styles } from "@myracketpartner/common";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 25px;
  color: #f8f9fa;

  a {
    color: ${styles.colors.green};
    text-decoration: none;
    margin: 10px 0 0 auto;
  }
`;

export const Title = styled.span`
  margin: 0 auto;
  font-size: 35px;
  font-weight: bold;
`;

export const Subtitle = styled.span`
  margin: 3px auto 25px auto;
  font-size: 14px;
  font-weight: 600;
  color: ${styles.colors.greyLight};
`;

export const Logged = styled.span`
  margin-top: 50px;
  text-align: center;

  a {
    color: ${styles.colors.green};
    text-decoration: none;
  }
`;

export const Separator = styled.span`
  margin: 10px auto;
  color: ${styles.colors.white};
`;

export const WrapperLoginRRSS = styled.div`
  display: flex;
  justify-content: center;
  margin: 20px;
`;
