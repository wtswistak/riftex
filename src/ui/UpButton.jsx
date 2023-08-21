import { useEffect, useState } from "react";
import { FiArrowUp } from "react-icons/fi";

function handleClick() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function UpButton() {
  const [isVisible, setIsVisible] = useState(false);

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
      size={34}
      className="fixed bottom-5 text-[var(--c-green)] font-bold bg-[#1f1f1f] p-1 right-5 border-[var(--c-green)] rounded-md cursor-pointer hover:bg-[var(--c-green)] border-[2px] hover:text-[var(--bg-light)] )] hover:border-[var(--bg-light)] )"
    ></FiArrowUp>
  );
}

export default UpButton;