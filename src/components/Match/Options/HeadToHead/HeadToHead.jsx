import { useEffect } from "react";
import { matchDetailsHeadToHeadAction } from "../../../../redux/slices/matchesSlice";
import { useSelector, useDispatch } from "react-redux";
import {
  WrapperScore,
  PlayersWrapper,
  PlayerStyled,
  ResultScore,
  ResultStyled,
  TournamentNameStyled,
  Date,
} from "./HeadToHead.styled";
import { formatDate, formatHour } from "../../../../utils/dateUtil";

const HeadToHead = (props) => {
  const { player1, player2 } = props;

  const dispatch = useDispatch();

  const matchDetailsHeadToHead = useSelector(
    (state) => state.matches.matchDetailsHeadToHead,
  );

  useEffect(() => {
    const getMatcheDetails = async () => {
      // if (!validateLogin()) return;
      if (!player1 || !player2) return;

      try {
        // console.log(credentials);
        await dispatch(
          matchDetailsHeadToHeadAction({
            player1Id: player1?.id,
            player2Id: player2?.id,
          }),
        ).unwrap();

        // navigate("/matches");
      } catch (error) {
        // await dispatch(
        //   toastAction({ message: error.message, type: "ERROR" })
        // ).unwrap();
        console.log(error);
      }
    };

    getMatcheDetails();
  }, [dispatch, player1, player2]);

  return (
    <div>
      {matchDetailsHeadToHead.map((tournamentData, i) => (
        <div key={i}>
          <TournamentNameStyled>
            {tournamentData.tournamentName}
          </TournamentNameStyled>
          {tournamentData.matches.map((match) => {
            const { id, date, player1, player2, winnerId, sets } = match;

            return (
              <WrapperScore key={id}>
                <Date>
                  <span>{formatDate(date)}</span>
                </Date>
                <PlayersWrapper>
                  <PlayerStyled winner={winnerId === player1.id}>
                    {player1.name}
                  </PlayerStyled>
                  <PlayerStyled winner={winnerId === player2.id}>
                    {player2.name}
                  </PlayerStyled>
                </PlayersWrapper>
                <ResultScore>
                  {sets.map((set, i) => (
                    <div key={i}>
                      <ResultStyled
                        winner={set.player1Score > set.player2Score}
                      >
                        {set.player1Score}
                      </ResultStyled>
                      <ResultStyled
                        winner={set.player1Score < set.player2Score}
                      >
                        {set.player2Score}
                      </ResultStyled>
                    </div>
                  ))}
                </ResultScore>
              </WrapperScore>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default HeadToHead;
