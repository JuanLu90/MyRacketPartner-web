import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  matchDetailsAction,
  matchDetailsHeadToHeadAction,
} from "../../redux/slices/matchesSlice";
import UserDefaultImg from "../../images/user-default.png";
import {
  UserDefaultIcon,
  WrapperHeader,
  WrapperPlayer,
  Result,
  WrapperOptions,
  Option,
  PlayersWrapper,
  PlayerStyled,
  ResultStyled,
  WrapperScore,
  ResultScore,
} from "./MatchInfo.styled";

const MatchInfo = () => {
  const dispatch = useDispatch();
  const { matchId } = useParams(); //

  const [currentOptionSelected, setCurrentOptionSelected] =
    useState("Marcador");

  const matchDetails = useSelector((state) => state.matches.matchDetails);
  const matchDetailsHeadToHead = useSelector(
    (state) => state.matches.matchDetailsHeadToHead,
  );
  console.log(matchDetails);
  console.log(matchDetailsHeadToHead);
  const {
    winnerId,
    player1,
    player2,
    totalSetsPlayer1,
    totalSetsPlayer2,
    sets,
  } = matchDetails;

  useEffect(() => {
    const getMatcheDetails = async () => {
      // if (!validateLogin()) return;

      try {
        // console.log(credentials);
        await dispatch(matchDetailsAction(matchId)).unwrap();

        // navigate("/matches");
      } catch (error) {
        // await dispatch(
        //   toastAction({ message: error.message, type: "ERROR" })
        // ).unwrap();
        console.log(error);
      }
    };

    getMatcheDetails();
  }, [dispatch, matchId]);

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

  const options = {
    Marcador: (
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
    ),
    H2H: <div>H2H</div>,
  };
  return (
    <div>
      <WrapperHeader>
        <WrapperPlayer winner={winnerId === player1?.id}>
          <UserDefaultIcon
            src={UserDefaultImg}
            onClick={() => console.log("UserDefaultIcon")}
          />
          {player1?.name}
        </WrapperPlayer>
        <div>
          <Result winner={winnerId === player1?.id}>{totalSetsPlayer1}</Result>
          <Result> - </Result>
          <Result winner={winnerId === player2?.id}>{totalSetsPlayer2}</Result>
        </div>
        <WrapperPlayer winner={winnerId === player2?.id}>
          <UserDefaultIcon
            src={UserDefaultImg}
            onClick={() => console.log("UserDefaultIcon")}
          />
          {player2?.name}
        </WrapperPlayer>
      </WrapperHeader>
      <WrapperOptions>
        <Option
          onClick={() => setCurrentOptionSelected("Marcador")}
          selected={currentOptionSelected === "Marcador"}
        >
          Marcador
        </Option>
        <Option
          onClick={() => setCurrentOptionSelected("H2H")}
          selected={currentOptionSelected === "H2H"}
        >
          H2H
        </Option>
      </WrapperOptions>
      <div>{options[currentOptionSelected]}</div>
    </div>
  );
};

export default MatchInfo;
