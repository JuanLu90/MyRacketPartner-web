import styled from "styled-components";
import { colors } from "utils/stylesUtil";

export const SendInfoButton = styled.button`
  /* height: 40px; */
  margin: 30px auto 20px auto;
  padding: 5px 20px;
  background-color: ${colors.green};
  color: ${colors.primary};
  font-size: 18px;
  font-weight: bold;
  border-radius: 12px;
  border: none;
  cursor: pointer;
`;
