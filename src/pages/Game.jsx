import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import GameDetails from "../features/Game/GameDetails";
import Loader from "../ui/Loader";

function Game() {
  const { id } = useParams();
  const { data, isLoading } = useFetch(`games/${id}`);

  return (
    <>
      {isLoading && <Loader />}
      <GameDetails key={data.id} data={data} />
    </>
  );
}

export default Game;
