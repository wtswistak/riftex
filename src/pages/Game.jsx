import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import GameDetails from "../features/Game/GameDetails";
import Loader from "../ui/Loader";
import CommentsBox from "../features/Game/CommentsBox";
import { useGetComments } from "../features/Game/useComment";

function Game() {
  const { id: gameId } = useParams();
  const { data, isLoading } = useFetch(`games/${gameId}`);
  const { commentsLoading, comments } = useGetComments(gameId);
  return (
    <>
      {isLoading && <Loader />}
      <div className="px-20 max-xl:ml-4 max-md:mr-0 max-xl:px-4 max-sm:px-0 max-sm:mx-0">
        <GameDetails key={data.gameId} data={data} />
        {commentsLoading && <Loader />}
        <CommentsBox key={data.gameId} comments={comments} />
      </div>
    </>
  );
}

export default Game;
