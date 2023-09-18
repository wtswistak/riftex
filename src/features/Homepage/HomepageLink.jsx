import { Link } from "react-router-dom";

function HomepageLink({ game }) {
  return (
    <Link key={game.id} to={`/games/${game.id}`}>
      <h1 className="text-2xl font-semibold mb-2 transition-all  hover:text-[#bebebe] ">
        {game.name}
      </h1>
    </Link>
  );
}

export default HomepageLink;
