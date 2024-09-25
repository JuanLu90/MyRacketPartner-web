import styled from "styled-components";
import { styles } from "@myracketpartner/common";
import PlusImg from "images/plus.svg?react";
import MinusImg from "images/minus.svg?react";
import WarningImg from "images/warning.svg?react";

export const Wrapper = styled.div`
  padding: 10px;
`;
export const WrapperInfoResult = styled.div`
  display: grid;
  grid-template-columns: 90px auto;
`;

export const DateStyle = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
  font-size: 0.75rem;
  /* margin: 0 10px; */
  color: ${styles.colors.greyLight};

  > span {
    width: 100%;
    margin-top: 13px;
  }
`;

export const Result = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 30px 0;
  gap: 20px;

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`;

export const UsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 90px;
  overflow: hidden;
  gap: 25px;
`;

export const UserStyled = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: -webkit-fill-available;
  opacity: ${(props) => props.unfocus && "0.3"};

  > span {
    max-width: -webkit-fill-available;
    margin-top: 7px;
    font-size: 0.85rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

export const InputResult = styled.input`
  width: 30px;
  color: ${styles.colors.white};
  background: transparent;
  font-size: 2rem;
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.error ? styles.colors.orange : styles.colors.greyLight)};
  text-align: center;
  font-weight: ${(props) => props.winner && "bold"};
  color: ${(props) =>
    props.error ? styles.colors.orange : styles.colors.white};

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
`;

export const PlusIcon = styled(PlusImg)`
  height: 100%;
  cursor: pointer;

  path {
    fill: ${(props) =>
      props.error ? styles.colors.orange : styles.colors.white};
  }
`;

export const MinusIcon = styled(MinusImg)`
  position: absolute;
  right: 14px;
  bottom: 20px;
  width: 12px;
  padding: 5px;
  background-color: ${styles.colors.blue};
  border-radius: 100%;
  cursor: pointer;

  path {
    fill: ${styles.colors.white};
  }
`;

export const UserDefaultIconWrapper = styled.button`
  position: relative;
`;

export const NotSelectedUser = styled.button`
  width: 60px;
  height: 60px;
  padding: 16px;
  background-color: transparent;
  border: 2px dashed
    ${(props) => (props.error ? styles.colors.orange : styles.colors.white)};
  border-radius: 100%;
`;

export const Separator = styled.div`
  flex: 0 0 1px;
  background-color: ${styles.colors.green};
  height: 36px;
  opacity: 0.6;
`;

export const WrapperEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditIcon = styled.img`
  width: 17px;
`;

export const UserDefaultIcon = styled.img`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  height: ${(props) => props.height && `${props.height}px`};
  border-radius: 100%;
`;
export const SelectedUserIcon = styled.img`
  width: ${(props) => (props.width ? `${props.width}px` : "100%")};
  border-radius: 100%;
  border: 4px solid ${styles.colors.blue};
  box-sizing: border-box;
`;

export const SearchUser = styled.div`
  padding-left: 35px;
`;

export const InputSearchUser = styled.input`
  width: 100%;
  padding-bottom: 5px;
  color: ${styles.colors.white};
  background: transparent;
  font-size: 1rem;
  border: none;
  border-bottom: 1px solid ${styles.colors.greyLight};

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
`;

export const SearchUserResults = styled.div`
  background-color: ${styles.colors.primary};
  margin-top: 10px;
  padding: 8px 0;
  max-height: 140px;
  overflow: scroll;
`;

export const Option = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  grid-gap: 7px;
  cursor: pointer;
`;

export const OptionInfo = styled.div`
  > span:first-child {
    font-size: 0.9rem;
    font-weight: 500;
  }
  > span:nth-child(2) {
    font-size: 0.7rem;
  }
`;

export const WrapperErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
  height: 20px;

  > div {
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${styles.colors.orange};
    font-weight: 500;
  }
`;

export const WarningIcon = styled(WarningImg)`
  height: 1.2rem;
  margin-right: 10px;

  path {
    fill: ${styles.colors.orange};
  }
`;
