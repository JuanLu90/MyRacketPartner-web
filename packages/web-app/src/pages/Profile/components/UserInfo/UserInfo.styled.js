import styled from "styled-components";
import { styles } from "@myracketpartner/common";

export const Wrapper = styled.div`
  margin-bottom: 55px;

  > div {
    display: flex;
    justify-content: space-between;
    margin: 20px;
    padding: 12px;
    background-color: ${styles.colors.greyLightSemiTransparent};
  }
`;

export const CountryInfo = styled.div`
  display: flex;

  > img {
    margin-right: 10px;
  }
`;
