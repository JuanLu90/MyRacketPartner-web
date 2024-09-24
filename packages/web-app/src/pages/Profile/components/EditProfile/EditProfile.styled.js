import styled from "styled-components";
import { colors } from "utils/stylesUtil";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const FirstBlock = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 40px 30px;
  background: linear-gradient(
    ${colors.greyDarkSemiTransparent},
    ${colors.primary}
  );
`;

export const UserProfileIcon = styled.img`
  height: 100px;
  border-radius: 100%;
  margin-bottom: 15px;
`;

export const NameInfo = styled.span`
  font-size: 30px;
  font-weight: bold;
`;

export const UsernameInfo = styled.span`
  font-size: 16px;
`;

export const WrapperInfo = styled.div`
  margin-bottom: 30px;

  > h3 {
    display: flex;
    justify-content: space-between;
    padding: 0 20px;
    margin-bottom: 10px;
  }
  > div {
    padding: 10px 20px;
    background-color: ${colors.greyDarkSemiTransparent};

    > div {
      display: flex;
      justify-content: space-between;

      > span:first-child {
        color: ${colors.greyLight};
      }

      > span {
        margin: 10px 0;
      }
    }
  }
`;

export const EditIcon = styled.img`
  width: 17px;
  height: 17px;
`;

export const Button = styled.button`
  margin-bottom: 30px;
  padding: 10px 20px;
  background-color: ${colors.orange};
  font-size: 1.1rem;
  font-weight: bold;
  color: ${colors.primary};
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:disabled {
    background-color: ${colors.greyDark};
    opacity: 0.5;
    color: ${colors.white};
    cursor: not-allowed;
  }
`;

export const WrapperSendButton = styled.div`
  display: flex;
  justify-content: center;
`;
