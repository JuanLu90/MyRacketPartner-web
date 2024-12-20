import styled from "styled-components";
import { styles } from "@myracketpartner/common";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 13px;
`;

export const WrapperInput = styled.div`
  position: relative;

  > input {
    width: -webkit-fill-available;
    height: 40px;
    margin: 7px 0 5px 0;
    padding: 0 10px;
    color: ${styles.colors.white};
    border: 1px solid ${styles.colors.greyDark};

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
      -webkit-box-shadow: 0 0 0 30px #343a40 inset !important;
      -webkit-text-fill-color: ${styles.colors.white} !important;
    }
  }

  > span {
    position: absolute;
    top: 18px;
    right: 12px;
    color: ${styles.colors.greyDark};
  }

  .error {
    border-color: ${styles.colors.orange};
  }

  img {
    position: absolute;
    top: 11px;
    right: 13px;
    width: 25px;
    cursor: pointer;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${(props) =>
    props.error ? styles.colors.orange : styles.colors.white};
`;

export const Title = styled.span`
  font-size: 0.85rem;
  font-weight: 400;
  color: ${styles.colors.greyLight};
`;
