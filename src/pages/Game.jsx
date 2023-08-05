import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import GameDetails from "../features/Game/GameDetails";

function Game() {
  const { id } = useParams();
  const { data } = useFetch(`games/${id}`);

  return <GameDetails key={data.id} data={data} />;
}

export default Game;
