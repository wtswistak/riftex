import { Link } from "react-router-dom";

function ListItem({ platform }) {
  return (
    <Link
      key={platform.id}
      to={`/platforms/${platform.id === 2 ? 18 : platform.id}`}
      className="flex items-center mb-1 py text-lg py-0.5 relative group "
    >
      <span className="mr-2 text-xl  ">{platform.logo}</span>{" "}
      <p>{platform.name}</p>
      <span className="absolute bottom-[-2px] left-[-2px] w-0 h-[2px] bg-[var(--c-green)] transition-all group-hover:w-full"></span>
    </Link>
  );
}

export default ListItem;
