import { Link } from "react-router-dom";

function GameStoreSite({ storeData }) {
  const { store } = storeData;
  return (
    <Link
      to={`https://${store.domain} `}
      target="_blank"
      className="py-2 px-4 font-semibold bg-neutral-800 text-sm rounded-lg text-neutral-200 duration-200 hover:bg-[var(--c-green)]"
    >
      {store.name}
    </Link>
  );
}

export default GameStoreSite;
