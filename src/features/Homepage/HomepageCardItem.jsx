import { Link } from "react-router-dom";
import { platforms } from "../../data/data-platforms";

function HomepageCardItem({ game }) {
  return (
    <div key={game.id} className="bg-[var(--bg-secondary)] rounded-xl pb-4  ">
      <img
        src={game.background_image}
        alt={game.name}
        className=" w-full rounded-t-xl h-auto min-h-[150px] object-cover "
      />
      <div className="p-3">
        <div className="flex justify-between items-center mb-2 ">
          <div className="flex gap-2 my-1 ">
            {game.parent_platforms.map(({ platform }) =>
              platforms.map((item) => {
                return (
                  item.logoId === platform.id && (
                    <span key={item.id} className="text-sm ">
                      {item.logo}
                    </span>
                  )
                );
              })
            )}
          </div>
          {game.metacritic ? (
            <span className="text-sm font-semibold py-0.5 px-[6px] outline outline-1 outline-[var(--c-green)] text-[var(--c-green)] rounded-sm">
              {game.metacritic}
            </span>
          ) : null}
        </div>
        <Link key={game.id} to={`/games/${game.id}`}>
          <h1 className="text-2xl font-semibold mb-2 transition-all  hover:text-[#bebebe] ">
            {game.name}
          </h1>
        </Link>

        {/* <div className="flex gap-1 flex-wrap ">
          {game.genres.map((genre, i) => (
            <p
              key={genre.id}
              className="px-2 py-1 text-sm bg-[var(--dark-gray)] text-stone-200 rounded-sm"
            >
              {genre.name}
            </p>
          ))}
        </div> */}
      </div>
    </div>
  );
}

export default HomepageCardItem;
