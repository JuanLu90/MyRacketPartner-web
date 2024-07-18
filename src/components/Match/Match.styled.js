import styled from "styled-components";
import { colors } from "../../utils/stylesUtil";

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

export const Date = styled.div`
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

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  span {
    margin: 0 5px;
  }
`;

export const PlayersWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* margin-left: 10px; */
  overflow: hidden;
`;

export const PlayerStyled = styled.span`
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

export const WrapperEdit = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const EditIcon = styled.img`
  width: 17px;
`;
