import { VscHeart } from "react-icons/vsc";
import { useUser } from "../auth/useUser";
import { useAddGame } from "./useAddGame";

function LikeBtn({ game }) {
  const { user } = useUser();
  const { handleAddGame } = useAddGame();

  function handleLike() {
    handleAddGame(game.id, user.id);
  }

  return (
    <button
      className="w-full flex justify-center px-6 py-2 text-2xl bg-[#202020f8] mt-4 rounded-xl"
      onClick={handleLike}
    >
      <VscHeart />
    </button>
  );
}

export default LikeBtn;
