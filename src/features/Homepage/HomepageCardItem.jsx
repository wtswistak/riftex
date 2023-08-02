import { platforms } from "../../data/data-platforms";

function HomepageCardItem({ game }) {
  return (
    <div key={game.id} className="bg-[var(--bg-secondary)] rounded-xl pb-4 ">
      <img
        src={game.background_image}
        alt={game.name}
        className=" w-full rounded-t-xl"
      />
      <div className="p-3">
        <div className="flex gap-2 my-1">
          {game.parent_platforms.map(({ platform }) =>
            platforms.map((item) => {
              return (
                item.id === platform.id && (
                  <span key={item.id} className="text-sm ">
                    {item.logo}
                  </span>
                )
              );
            })
          )}
        </div>
        <h1 className="text-2xl font-semibold mb-2 ">{game.name}</h1>

        <div className="flex gap-1 ">
          {game.genres.map((genre, i) => (
            <p
              key={genre.id}
              className="px-2 py-1 text-sm bg-[var(--dark-gray)] rounded-md"
            >
              {genre.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default HomepageCardItem;
