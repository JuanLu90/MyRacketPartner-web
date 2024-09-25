import styled from "styled-components";
import FriendlyImg from "images/friendly.svg?react";
import { styles } from "@myracketpartner/common";

export const WrapperTitle = styled.div`
  display: grid;
  grid-template-columns: 57px auto;
  grid-gap: 10px;
  align-items: center;
  margin: 10px;

  > h3 {
    margin: 0;
  }
`;

export const FriendlyIcon = styled(FriendlyImg)`
  width: 2.5rem;
  margin: auto;

  path {
    fill: ${styles.colors.greyLight};
  }
`;
