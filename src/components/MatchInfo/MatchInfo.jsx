import { useParams } from "react-router-dom";

const MatchInfo = () => {
  const { matchId } = useParams(); // Obtiene el parámetro de la ruta

  return <div>MatchInfo for match ID: {matchId}</div>;
};

export default MatchInfo;
