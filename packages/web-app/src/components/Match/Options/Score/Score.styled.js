import styled from "styled-components";

export const WrapperScore = styled.div`
  display: flex;
  align-items: flex-end;
  height: 65px;
  padding: 25px;
`;

export const UsersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  margin-right: 80px;
  overflow: hidden;
`;

export const UserStyled = styled.span`
  display: flex;
  align-items: center;
  font-weight: ${(props) => props.winner && "bold"};
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const ResultScore = styled.div`
  display: flex;
  gap: 15px;
  height: 100%;
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
  }

  span {
    margin: 0 5px;
  }
`;

export const ResultStyled = styled.div`
  font-weight: ${(props) => props.winner && "bold"};
`;
