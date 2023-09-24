import { VscHeart } from "react-icons/vsc";
import { useUser } from "../auth/useUser";
import { useAddGame } from "./useAddGame";
import { useFavGames } from "../Account/useFavGames";
import { useState } from "react";
import { useDeleteGame } from "./useDeleteGame";
import CircleLoader from "../../ui/CircleLoader";

function LikeBtn({ game }) {
  const { user } = useUser();
  const { favGames } = useFavGames(user?.id);
  const [isLiked, setIsLiked] = useState(() =>
    favGames?.some((favGame) => favGame.game_id === game.id)
  );

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
            isLiked ? "bg-[#d8d8d8] text-[#000]" : " bg-[#202020f8]"
          } w-full flex justify-center px-6 py-2 text-2xl mt-4 rounded-xl `}
          onClick={handleLike}
        >
          {isDeleting ? <CircleLoader /> : <VscHeart />}
        </button>
      ) : null}
    </>
  );
}

export default LikeBtn;
