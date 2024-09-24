// DEPENDENCIES
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

// REDUX
import { matchDetailsAction } from "store/slices/matchesSlice";

// COMPONENTS
import HeadToHead from "components/Match/Options/HeadToHead/HeadToHead";
import Score from "components/Match/Options/Score/Score";
import AddMatchModal from "components/Modals/AddMatchModal";

// STYLES
import {
  UserDefaultIcon,
  WrapperHeader,
  WrapperPlayer,
  Result,
  WrapperOptions,
  Option,
  WrapperResult,
  EditIcon,
} from "./MatchInfo.styled";

// IMAGES
import UserDefaultImg from "images/user-default.png";
import EditMatchImg from "images/edit.png";

// FUNCTION
const MatchInfo = () => {
  const dispatch = useDispatch();
  const { matchId } = useParams();
  const navigate = useNavigate();

  const [currentOptionSelected, setCurrentOptionSelected] =
    useState("Marcador");
  const [addMatchModalState, setAddMatchModalState] = useState(false);

  const {
    user: { id },
  } = useSelector((state) => state.auth);
  const matchDetails = useSelector((state) => state.matches.matchDetails);

  const { winnerID, user1, user2, totalSetsUser1, totalSetsUser2 } =
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
    H2H: <HeadToHead user1={user1} user2={user2} />,
  };

  return (
    <div>
      <WrapperHeader>
        <WrapperPlayer winner={winnerID === user1?.id}>
          <UserDefaultIcon
            src={user1?.profileImage ?? UserDefaultImg}
            onClick={() => navigate(`/profile/${user1?.id}`)}
          />
          <span>{user1?.name}</span>
        </WrapperPlayer>
        <WrapperResult>
          <Result winner={winnerID === user1?.id}>{totalSetsUser1}</Result>
          <Result> - </Result>
          <Result winner={winnerID === user2?.id}>{totalSetsUser2}</Result>
          {id && (
            <EditIcon
              src={EditMatchImg}
              onClick={() => {
                // toggleModal();
                // selectMatch(match);
                setAddMatchModalState(true);
              }}
            />
          )}
        </WrapperResult>
        <WrapperPlayer winner={winnerID === user2?.id}>
          <UserDefaultIcon
            src={user2?.profileImage ?? UserDefaultImg}
            onClick={() => navigate(`/profile/${user2?.id}`)}
          />
          <span>{user2?.name}</span>
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
      {options[currentOptionSelected]}
      {addMatchModalState && (
        <AddMatchModal
          isOpen={addMatchModalState}
          closeModal={() => setAddMatchModalState(false)}
          matchInfo={matchDetails}
        />
      )}
    </div>
  );
};

export default MatchInfo;
