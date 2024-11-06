// DEPENDENCIES
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import { matchDetailsHeadToHeadAction } from "store/slices/matchesSlice";

// STYLES
import {
  WrapperScore,
  UsersWrapper,
  UserStyled,
  ResultScore,
  ResultStyled,
  TournamentNameStyled,
  Date,
} from "./HeadToHead.styled";

// COMMONS
import { dates } from "@myracketpartner/common";

// FUNCTION
const HeadToHead = (props) => {
  const { user1, user2 } = props;

  const dispatch = useDispatch();

  const matchDetailsHeadToHead = useSelector(
    (state) => state.matches.matchDetailsHeadToHead
  );

  useEffect(() => {
    const getMatcheDetails = async () => {
      // if (!validateLogin()) return;
      if (!user1 || !user2) return;

      try {
        // console.log(credentials);
        await dispatch(
          matchDetailsHeadToHeadAction({
            user1Id: user1?.id,
            user2Id: user2?.id,
          })
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
  }, [dispatch, user1, user2]);

  return (
    <div>
      {matchDetailsHeadToHead.map((tournamentData, i) => (
        <div key={i}>
          <TournamentNameStyled>
            {tournamentData.tournamentName}
          </TournamentNameStyled>
          {tournamentData.matches.map((match) => {
            const { id, date, user1, user2, winnerID, sets } = match;

            return (
              <WrapperScore key={id}>
                <Date>
                  <span>{dates.formatDate(date)}</span>
                </Date>
                <UsersWrapper>
                  <UserStyled winner={winnerID === user1.id}>
                    {user1.name}
                  </UserStyled>
                  <UserStyled winner={winnerID === user2.id}>
                    {user2.name}
                  </UserStyled>
                </UsersWrapper>
                <ResultScore>
                  {sets.map((set, i) => (
                    <div key={i}>
                      <ResultStyled winner={set.user1Score > set.user2Score}>
                        {set.user1Score}
                      </ResultStyled>
                      <ResultStyled winner={set.user1Score < set.user2Score}>
                        {set.user2Score}
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
