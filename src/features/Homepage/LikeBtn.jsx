import { VscHeart } from "react-icons/vsc";
import { useUser } from "../auth/useUser";
import { useAddGame } from "./useAddGame";
import { useFavGames } from "../Account/useFavGames";
import { useEffect, useState } from "react";
import { useDeleteGame } from "./useDeleteGame";
import CircleLoader from "../../ui/CircleLoader";

function LikeBtn({ game }) {
  const { user } = useUser();
  const { favGames } = useFavGames(user?.id);
  const [isLiked, setIsLiked] = useState(() =>
    favGames?.some((favGame) => favGame.game_id === game.id)
  );

  useEffect(() => {
    setIsLiked(() => favGames?.some((favGame) => favGame.game_id === game.id));
  }, [favGames, game.id]);

  const { handleAddGame } = useAddGame();
  const { handleDeleteGame, isDeleting } = useDeleteGame();

  function handleLike() {
    if (!isLiked) handleAddGame(game.id, user.id);
    if (isLiked) handleDeleteGame(game.id, user.id);
    setIsLiked(!isLiked);
  }

  return (
    <>
      {user ? (
        <button
          className={`${
            isLiked
              ? "bg-[#cacaca] text-[#000] hover:bg-[#ececec] duration-200"
              : " bg-[#1f1f1f] hover:bg-[#111111] duration-200"
          } w-full flex justify-center px-6 py-2 text-2xl mt-4 rounded-xl  `}
          onClick={handleLike}
          title={isLiked ? "Remove from liked games" : "Add to liked games"}
        >
          {isDeleting ? <CircleLoader /> : <VscHeart />}
        </button>
      ) : null}
    </>
  );
}

export default LikeBtn;
