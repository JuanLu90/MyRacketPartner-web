import styled from "styled-components";
import { colors } from "utils/stylesUtil";

export const Wrapper = styled.div`
  margin-bottom: 55px;

  > div {
    display: flex;
    justify-content: space-between;
    margin: 20px;
    padding: 12px;
    background-color: ${colors.greyLightSemiTransparent};
  }
`;

export const CountryInfo = styled.div`
  display: flex;

  > img {
    margin-right: 10px;
  }
`;
