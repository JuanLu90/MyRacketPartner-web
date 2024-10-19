// DEPENDENCIES
import { useState } from "react";
import { useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

// REDUX
import { matchesAction } from "store/slices/matchesSlice";

// HOOKS
import { useFetchDataHook } from "@myracketpartner/common";

// COMPONENTS
import Match from "components/match/Match";
import FloatingButton from "components/FloatingButton/FloatingButton";
import AddMatchModal from "components/Modals/AddMatchModal";

// STYLES
import { WrapperTitle, FriendlyIcon } from "./Board.styled";

// FUNCTION
const Board = () => {
  const { t } = useTranslation();

  const [addMatchModalState, setAddMatchModalState] = useState(false);

  useFetchDataHook(matchesAction);

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
