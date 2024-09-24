import styled from "styled-components";
import { colors } from "utils/stylesUtil";

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 13px;

  > div {
    width: 100%;

    input {
      width: -webkit-fill-available;
      margin: 7px 0 5px 0;
      padding: 10px;
      color: ${colors.white};
      border: 1px solid
        ${(props) => (props.error ? colors.orange : colors.greyDark)};

      background-color: ${(props) =>
        props.disabled ? `${colors.greyDark}` : "transparent"};
      ${(props) => props.disabled && "opacity: 0.3; cursor: not-allowed"};

      &:focus {
        outline: none;
      }

      &:-webkit-autofill,
      &:-webkit-autofill:hover,
      &:-webkit-autofill:focus,
      &:-webkit-autofill:active {
        -webkit-box-shadow: 0 0 0 30px ${colors.greyDark} inset !important;
        -webkit-text-fill-color: ${colors.white} !important;
      }
    }
  }
`;

export const Title = styled.span`
  margin-bottom: 13px;
  font-size: 0.85rem;
  font-weight: 400;
  color: ${colors.greyLight};
`;

export const Label = styled.label`
  font-size: 14px;
  color: ${(props) => (props.error ? colors.orange : colors.white)};
`;
