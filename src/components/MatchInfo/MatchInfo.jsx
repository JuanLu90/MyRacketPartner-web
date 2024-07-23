import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { matchDetailsAction } from "../../redux/slices/matchesSlice";

const MatchInfo = () => {
  const dispatch = useDispatch();

  const { matchId } = useParams(); //

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

  const matchDetails = useSelector((state) => state.matches.matchDetails);
  console.log(matchDetails);
  return <div>MatchInfo for match ID: {matchId}</div>;
};

export default MatchInfo;
