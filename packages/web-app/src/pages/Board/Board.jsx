// DEPENDENCIES
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

// REDUX
import { matchesAction } from "store/slices/matchesSlice";

// COMPONENTS
import Match from "components/Match/Match";
import FloatingButton from "components/FloatingButton/FloatingButton";
import AddMatchModal from "components/Modals/AddMatchModal";

// STYLES
import { WrapperTitle, FriendlyIcon } from "./Board.styled";

// FUNCTION
const Board = () => {
  const dispatch = useDispatch();
  const { t } = useTranslation();

  const [addMatchModalState, setAddMatchModalState] = useState(false);

  useEffect(() => {
    const getMatches = async () => {
      try {
        await dispatch(matchesAction()).unwrap();
      } catch (error) {
        console.log(error);
      }
    };

    getMatches();
  }, [dispatch]);

  const {
    user: { id },
  } = useSelector((state) => state.auth);
  const matchesList = useSelector((state) => state.matches.matches);

  return (
    <div>
      <WrapperTitle>
        <FriendlyIcon />
        <h3> {t("Board.Friendly.Title")}</h3>
      </WrapperTitle>
      {matchesList.map((match) => (
        <Match match={match} key={match.matchID} />
      ))}
      {id && <FloatingButton action={() => setAddMatchModalState(true)} />}
      {addMatchModalState && (
        <AddMatchModal
          isOpen={addMatchModalState}
          closeModal={() => setAddMatchModalState(false)}
        />
      )}
    </div>
  );
};

export default Board;
