import styled from "styled-components";
import HandImg from "images/hand.svg?react";
import { styles } from "@myracketpartner/common";

export const Wrapper = styled.div`
  display: flex;
  margin: 20px;
  padding: 7px 20px;
  border: 1px solid ${styles.colors.greyDark};

  > span {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-right: 20px;
  }

  > div {
    display: flex;
    flex-direction: column;
    /* padding: 7px 0; */
    width: 100%;

    > span {
      padding: 7px 0;
    }

    span:nth-child(2) {
      font-weight: bold;
    }
  }
`;

export const DominationHandIcon = styled(HandImg)`
  height: 2.5rem;
  cursor: pointer;

  path {
    fill: #d2a679;
  }
`;

export const BackhandIcon = styled(HandImg)`
  height: 2.5rem;
  cursor: pointer;
  transform: scaleX(-1);

  path {
    fill: #d2a679;
  }
`;
