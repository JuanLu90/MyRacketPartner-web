import styled from "styled-components";
import { styles } from "@myracketpartner/common";

export const WrapperScore = styled.div`
  display: flex;
  align-items: center;
  height: 45px;
  padding: 10px 15px;
  font-size: 0.9rem;
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

export const Date = styled.div`
  margin-right: 15px;
  font-size: 0.75rem;
  font-weight: bold;
  color: ${styles.colors.greyLight};
`;

export const ResultStyled = styled.div`
  font-weight: ${(props) => props.winner && "bold"};
`;

export const TournamentNameStyled = styled.div`
  padding: 10px 20px;
  background-color: ${styles.colors.greyLightSemiTransparent};
  font-size: 0.9rem;
  font-weight: bold;
`;
