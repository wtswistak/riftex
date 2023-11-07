import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function UpButton() {
  const [isVisible, setIsVisible] = useState(false);

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > window.innerHeight / 2);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  if (!isVisible) return null;

  return (
    <FiArrowUp
      onClick={handleClick}
      size={32}
      className="fixed bottom-3 text-[#518b30] font-bold bg-[#1f1f1f] p-1 right-3 border-[#518b30] rounded-md cursor-pointer hover:bg-[#518b30] border-[2px] hover:text-[var(--bg-light)] )] hover:border-[var(--bg-light)] )"
    ></FiArrowUp>
  );
}

export default UpButton;
