import { Link } from "react-router-dom";

function LinkSidebar({ to, data, setActive, active }) {
  const handleClick = () => {
    setActive(data.id);
  };

  return (
    <Link
      to={to}
      className={`flex items-center mb-1 py text-lg py-0.5 relative group `}
      onClick={handleClick}
    >
      {data.logo ? <span className="mr-2 text-xl">{data.logo}</span> : ""}
      <p>{data.name}</p>
      <span
        className={`${
          active === data.id ? "w-full" : "w-0"
        } absolute bottom-[-2px] left-[-2px] h-[2px] bg-[var(--c-green)] transition-all group-hover:w-full`}
      ></span>
    </Link>
  );
}
export default LinkSidebar;
