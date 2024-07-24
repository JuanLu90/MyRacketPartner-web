import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { matchDetailsAction } from "../../redux/slices/matchesSlice";
import UserDefaultImg from "../../images/user-default.png";
import {
  UserDefaultIcon,
  WrapperHeader,
  WrapperPlayer,
  Result,
  WrapperOptions,
  Option,
} from "./MatchInfo.styled";
import HeadToHead from "../Match/Options/HeadToHead/HeadToHead";
import Score from "../Match/Options/Score/Score";

const MatchInfo = () => {
  const dispatch = useDispatch();
  const { matchId } = useParams(); //

  const [currentOptionSelected, setCurrentOptionSelected] =
    useState("Marcador");

  const matchDetails = useSelector((state) => state.matches.matchDetails);

  const { winnerId, player1, player2, totalSetsPlayer1, totalSetsPlayer2 } =
    matchDetails;

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

  const options = {
    Marcador: <Score matchDetails={matchDetails} />,
    H2H: <HeadToHead player1={player1} player2={player2} />,
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
