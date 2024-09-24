import styled from "styled-components";
import { colors } from "utils/stylesUtil";
import MenuImg from "images/menu-icon.svg?react";

export const WrapperRightContent = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperMenu = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  ${(props) => props.isOpen && `background-color: ${colors.green};`}
`;

export const WrapperMenuIcon = styled.div`
  display: flex;
  align-items: center;
`;
export const MenuIcon = styled(MenuImg)`
  height: 2.5rem;
  cursor: pointer;

  path {
    fill: ${(props) => (props.isOpen ? colors.primary : colors.green)};
  }

  &:focus {
    outline: none;
  }
`;

export const UserDefaultIcon = styled.img`
  height: 2.5rem;
  margin-right: 10px;
  border-radius: 100%;
  cursor: pointer;
`;