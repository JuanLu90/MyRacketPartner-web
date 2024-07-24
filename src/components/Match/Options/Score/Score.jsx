import {
  WrapperScore,
  PlayersWrapper,
  PlayerStyled,
  ResultScore,
  ResultStyled,
} from "./Score.styled";

const Score = (props) => {
  const {
    matchDetails: { winnerId, player1, player2, sets },
  } = props;

  return (
    <WrapperScore>
      <PlayersWrapper>
        <PlayerStyled winner={winnerId === player1?.id}>
          {player1?.name}
        </PlayerStyled>
        <PlayerStyled winner={winnerId === player2?.id}>
          {player2?.name}
        </PlayerStyled>
      </PlayersWrapper>
      <ResultScore>
        {sets?.map((set, i) => {
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
      </ResultScore>
    </WrapperScore>
  );
};

export default Score;
