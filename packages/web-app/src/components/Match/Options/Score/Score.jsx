// STYLES
import {
  WrapperScore,
  UsersWrapper,
  UserStyled,
  ResultScore,
  ResultStyled,
} from "./Score.styled";

// FUNCTION
const Score = (props) => {
  const {
    matchDetails: { winnerID, user1, user2, sets },
  } = props;

  return (
    <WrapperScore>
      <UsersWrapper>
        <UserStyled winner={winnerID === user1?.id}>{user1?.name}</UserStyled>
        <UserStyled winner={winnerID === user2?.id}>{user2?.name}</UserStyled>
      </UsersWrapper>
      <ResultScore>
        {sets?.map((set, i) => {
          return (
            <div key={i}>
              <ResultStyled winner={set.user1Score > set.user2Score}>
                {set.user1Score}
              </ResultStyled>
              <ResultStyled winner={set.user1Score < set.user2Score}>
                {set.user2Score}
              </ResultStyled>
            </div>
          );
        })}
      </ResultScore>
    </WrapperScore>
  );
};

export default Score;
