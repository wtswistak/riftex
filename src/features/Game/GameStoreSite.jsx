import { Link } from "react-router-dom";

function GameStoreSite({ storeData }) {
  const { store } = storeData;
  return (
    <Link
      to={`https://${store.domain} `}
      target="_blank"
      className="py-2 px-4 bg-neutral-700 rounded-lg text-neutral-200"
    >
      {store.name}
    </Link>
  );
}

export default GameStoreSite;
