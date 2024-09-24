import styled from "styled-components";
import { colors } from "utils/stylesUtil";
export const Wrapper = styled.div`
  /*  display: flex;
  align-items: center;
  height: 48px;
  width: 400px; 
  margin: 10px 0;*/
  padding: 10px;

  > div:first-child {
    display: grid;
    grid-template-columns: ${(props) =>
      props.isEditable ? "57px 1px auto auto 1px 25px" : "57px 1px auto auto"};
    grid-gap: 10px;
    align-items: center;
  }
`;

export const DateStyle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 0.75rem;
  /* margin: 0 10px; */
  color: ${colors.greyLight};
`;

export const Result = styled.div`
  display: flex;
  justify-content: end;
  font-size: 0.9rem;

  div {
    display: flex;
    flex-direction: column;
    text-align: center;
    gap: 5px;
  }

  span {
    margin: 0 5px;
  }
`;

export const UsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
  font-size: 0.9rem;
  gap: 3px;
`;

export const UserStyled = styled.span`
  display: flex;
  align-items: center;
  font-weight: ${(props) => props.winner && "bold"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ResultStyled = styled.span`
  font-weight: ${(props) => props.winner && "bold"};
`;

export const Separator = styled.div`
  flex: 0 0 1px;
  background-color: ${colors.greyLight};
  height: 36px;
  opacity: 0.6;
`;

export const UserDefaultIcon = styled.img`
  height: 1.2rem;
  margin-right: 10px;
  border-radius: 100%;
`;
