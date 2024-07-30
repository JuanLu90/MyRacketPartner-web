import styled from "styled-components";
import { colors } from "myracketpartner-commons";
import { ReactComponent as LogoIconImg } from "../../images/logo-icon.svg";
import { ReactComponent as MenuImg } from "../../images/menu-icon.svg";

export const Wrapper = styled.header`
  position: sticky;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* width: 100%; */
  background-color: ${colors.primary};
  /* padding: 10px 20px; */
  z-index: 3;
`;

export const LogoIconIcon = styled(LogoIconImg)`
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
  /* padding: 20px; */
  background-color: ${colors.green};

  /* transition: max-height 0.5s ease-in-out; */
  overflow: auto;

  overflow-y: auto;
  scrollbar-width: none; /* Para Firefox */
  -ms-overflow-style: none; /* Para Internet Explorer y Edge */

  &::-webkit-scrollbar {
    display: none; /* Para Chrome, Safari y Opera */
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

export const UserDefaultIcon = styled.img`
  height: 2.5rem;
  margin-right: 10px;
  border-radius: 100%;
  cursor: pointer;
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

export const Description = styled.span`
  font-size: 14px;
`;

export const Separator = styled.hr`
  width: 100%;
  opacity: 0.4;
  border-top: 2px solid ${colors.greyDark};
  border-bottom: none;
`;

export const RightContent = styled.div`
  display: flex;
  align-items: center;
`;

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
