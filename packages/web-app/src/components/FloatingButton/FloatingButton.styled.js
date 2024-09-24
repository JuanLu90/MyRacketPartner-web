import styled from "styled-components";
import PlusImg from "images/plus.svg?react";

import { colors } from "utils/stylesUtil";

export const Button = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  background-color: ${colors.green};
  color: white;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  font-size: 16px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${colors.greenSemiTransparent};
  }
`;

export const PlusIcon = styled(PlusImg)`
  height: 2.5rem;
  cursor: pointer;

  path {
    fill: ${colors.primary};
  }
`;
