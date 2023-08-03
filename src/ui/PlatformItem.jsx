import { Link } from "react-router-dom";

function PlatformItem({ platform, setActivePlatform, activePlatform }) {
  const handleClick = () => {
    setActivePlatform(platform.id);
  };

  return (
    <Link
      key={platform.id}
      to={`/platforms/${platform.id === 2 ? 18 : platform.id}`}
      className={`flex items-center mb-1 py text-lg py-0.5 relative group `}
      onClick={handleClick}
    >
      <span className="mr-2 text-xl">{platform.logo}</span>
      <p>{platform.name}</p>
      <span
        className={`${
          activePlatform === platform.id ? "w-full" : "w-0"
        } absolute bottom-[-2px] left-[-2px] h-[2px] bg-[var(--c-green)] transition-all group-hover:w-full`}
      ></span>
    </Link>
  );
}

export default PlatformItem;
