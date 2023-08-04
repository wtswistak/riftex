import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

function Game() {
  const { id } = useParams();
  const { data } = useFetch(`games/${id}`);

  return <div>{data.id} ok</div>;
}

export default Game;
