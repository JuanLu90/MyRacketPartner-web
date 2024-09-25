import styled from "styled-components";
import { styles } from "@myracketpartner/common";

export const Wrapper = styled.div`
  margin-top: 13px;
  width: 100%;

  > select {
    width: -webkit-fill-available;
    margin: 7px 0 5px 0;
    padding: 10px;
    color: ${styles.colors.white};
    border: 1px solid
      ${(props) =>
        props.error ? styles.colors.orange : styles.colors.greyDark};

    background-color: ${(props) =>
      props.disabled ? `${styles.colors.greyDark}` : "transparent"};
    ${(props) => props.disabled && "opacity: 0.3; cursor: not-allowed"};

    &:focus {
      outline: none;
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
      -webkit-box-shadow: 0 0 0 30px ${styles.colors.greyDark} inset !important;
      -webkit-text-fill-color: ${styles.colors.white} !important;
    }
  }
`;

export const Title = styled.span`
  font-size: 0.85rem;
  font-weight: 400;
  color: ${styles.colors.greyLight};
`;
