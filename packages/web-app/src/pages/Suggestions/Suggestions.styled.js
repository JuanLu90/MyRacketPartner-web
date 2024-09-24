import styled from "styled-components";
import { colors } from "utils/stylesUtil";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: -webkit-fill-available;
  padding: 20px;
`;

export const Title = styled.h1`
  margin: 0 0 10px;
`;

export const Subtitle = styled.span`
  margin-bottom: 15px;
  color: ${colors.greyLight};
`;

export const WrapperInputArea = styled.div`
  margin-bottom: 20px;
  font-size: 14px;
  color: ${(props) => (props.error ? colors.orange : colors.white)};
`;

export const Label = styled.span`
  font-size: 14px;
  color: ${(props) => (props.error ? colors.orange : colors.white)};
`;

export const TextAreaInput = styled.textarea`
  width: -webkit-fill-available;
  height: 100px;
  margin-top: 15px;
  padding: 10px 10px 90px 10px;
  background-color: transparent;
  color: ${colors.white};
  border: 1px solid
    ${(props) => (props.error ? colors.orange : colors.greyDark)};
  resize: vertical;

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
`;

export const WrapperCheckBox = styled.label`
  display: grid;
  grid-template-columns: 21px 1fr;
  margin: 7px 0 34px 0;
`;

export const HiddenCheckbox = styled.input.attrs({ type: "checkbox" })`
  border: 0;
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
`;

export const StyledCheckbox = styled.div`
  position: relative;
  display: inline-block;
  width: 16px;
  height: 16px;
  background-color: ${(props) =>
    props.checked ? `${colors.orange}` : `${colors.greyDark}`};

  &::after {
    content: "";
    position: absolute;
    display: ${(props) => (props.checked ? "block" : "none")};
    left: 5px;
    top: 2px;
    width: 3px;
    height: 7px;
    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;

export const CreateSuggestionsButton = styled.button`
  margin: auto 0 30px 0;
  padding: 12px;
  background: ${colors.orange};
  border: 0;
  color: ${colors.primary};
  font-size: 18px;
  font-weight: bold;
  border-radius: 5px;
  cursor: pointer;
`;
