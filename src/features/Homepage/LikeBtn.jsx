import { VscHeart } from "react-icons/vsc";

function LikeBtn() {
  return (
    <button className="w-full flex justify-center px-6 py-2 text-2xl bg-[#202020f8] mt-4 rounded-xl">
      <VscHeart />
    </button>
  );
}

export default LikeBtn;
