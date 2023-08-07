import { Link } from "react-router-dom";

function GameStore({ data }) {
  return (
    <div className="flex justify-center gap-2 flex-wrap">
      {data.stores?.map(({ store }) => (
        <Link
          key={store.id}
          to={`https://${store.domain} `}
          target="_blank"
          className="py-2 px-4 font-semibold bg-neutral-800 text-sm rounded-lg text-neutral-200 duration-200 hover:bg-[var(--c-green)]"
        >
          {store.name}
        </Link>
      ))}
    </div>
  );
}

export default GameStore;
