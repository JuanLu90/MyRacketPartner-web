import styled from "styled-components";
import { colors } from "utils/stylesUtil";

export const WrapperSelectLanguage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 20px;

  > img {
    width: 20px;
    margin-right: 7px;
  }

  > select {
    background-color: transparent;
    border: none;
  }
`;

export const LanguageOption = styled.span`
  margin: 0 7px;
  padding: 3px 7px;
  color: ${colors.primary};
  border-radius: 5px;
  ${(props) => (props) => props.languageSelected && "border: 2px solid black;"}
`;
