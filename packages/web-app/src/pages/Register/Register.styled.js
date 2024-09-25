import styled from "styled-components";
import { styles } from "@myracketpartner/common";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 315px; */
  padding: 25px;
  /* background-color: #343a40; */
  color: #f8f9fa;
  /* border: 2px solid #3f4652; */
`;

export const Title = styled.span`
  margin: 0 auto;
  font-size: 35px;
  font-weight: bold;
  /* color: #b2b1b9; */
`;

export const Subtitle = styled.span`
  margin: 3px auto 25px auto;
  font-size: 14px;
  font-weight: 600;
  color: ${styles.colors.greyLight};
`;

export const Registered = styled.span`
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
