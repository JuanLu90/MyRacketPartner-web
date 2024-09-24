import styled from "styled-components";
import { colors } from "utils/stylesUtil";
import LogoImg from "images/logo-icon.svg?react";

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${colors.primary};
  z-index: 3;
`;

export const LogoIcon = styled(LogoImg)`
  height: 2.5rem;
  cursor: pointer;

  path {
    fill: ${colors.green};
  }
`;

export const DropdownWrapper = styled.div`
  position: absolute;
  top: 60px;
  right: 0;
  width: 200px;
  max-height: ${(props) => (props.open ? "400px" : "0")};
  background-color: ${colors.green};
  overflow: auto;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  > div {
    ul {
      padding: 0;

      > li {
        display: block;

        > a,
        button {
          display: block;
          padding: 8px 20px;
          text-decoration: none;
          background-color: transparent;
          border: none;
          color: ${colors.primary};
        }
      }
    }
  }
`;

export const WrapperLogo = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
`;
