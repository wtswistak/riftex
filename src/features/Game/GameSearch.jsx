import { Link } from "react-router-dom";

function SearchGame({ data }) {
  return (
    <div className="absolute grid top-0 z-[5] bottom-0 left-0 right-0 bg-[var(--bg-primary)] py-24">
      {data.map((game) => {
        return (
          <Link key={game.id}>
            <img src={game.background_image} alt={game.name} className="w-28" />
            <p>{game.name}</p>{" "}
          </Link>
        );
      })}
    </div>
  );
}

export default SearchGame;
