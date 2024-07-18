import React from "react";
import {
  Wrapper,
  Date,
  PlayersWrapper,
  PlayerStyled,
  ResultStyled,
  Separator,
  Result,
  EditIcon,
  WrapperEdit,
} from "./Match.styled";
import EditMatchImg from "../../images/edit.png";
import { formatDate, formatHour } from "../../utils/dateUtil";

const Match = (props) => {
  const {
    match,
    toggleModal,
    selectMatch,
    manageUserAllowed,
    adminUserID,
    userID,
    playerID,
  } = props;

  const {
    matchWinner,
    player1ID,
    player2ID,
    player1Name,
    player2Name,
    sets,
    matchDate,
  } = match;

  const displayEditButton = () => {
    let checkIfMatchEditable = false;

    if (userID === adminUserID) checkIfMatchEditable = true;
    else if (
      manageUserAllowed &&
      (player1ID === playerID || player2ID === playerID)
    ) {
      checkIfMatchEditable = true;
    }

    return checkIfMatchEditable;
  };
  console.log(matchDate);
  return (
    // <Wrapper isEditable={displayEditButton()}>
    <Wrapper>
      <div>
        <Date>
          <span>{formatDate(matchDate)}</span>
          <span>{formatHour(matchDate)}</span>
        </Date>
        <Separator />
        <PlayersWrapper>
          <PlayerStyled winner={matchWinner === player1ID}>
            {player1Name}
          </PlayerStyled>
          <PlayerStyled winner={matchWinner === player2ID}>
            {player2Name}
          </PlayerStyled>
        </PlayersWrapper>
        <Result>
          {sets.map((set, i) => {
            return (
              <div key={i}>
                <ResultStyled winner={set.player1Score > set.player2Score}>
                  {set.player1Score}
                </ResultStyled>
                <ResultStyled winner={set.player1Score < set.player2Score}>
                  {set.player2Score}
                </ResultStyled>
              </div>
            );
          })}
        </Result>
        {/* {displayEditButton() && (
          <>
            <Separator />
            <WrapperEdit>
              <EditIcon
                src={EditMatchImg}
                onClick={() => {
                  toggleModal();
                  selectMatch(match);
                }}
              />
            </WrapperEdit>
          </>
        )} */}
      </div>
    </Wrapper>
  );
};

export default Match;
