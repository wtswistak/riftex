import { VscHeart } from "react-icons/vsc";
import { useUser } from "../auth/useUser";
import { addFavGame } from "../../services/apiFavGames";

function LikeBtn({ game }) {
  const { user, isLoading } = useUser();
  async function handleLike() {
    try {
      await addFavGame(game.id, user.id);
      console.log("Game added to favorites!");
    } catch (error) {
      console.error("Error adding game to favorites:", error);
    }
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
