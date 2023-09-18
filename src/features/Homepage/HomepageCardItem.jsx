import HomeapagePlatforms from "./HomeapagePlatforms";
import HomepageLink from "./HomepageLink";
import LikeBtn from "./LikeBtn";

function HomepageCardItem({ game }) {
  return (
    <div key={game.id} className="bg-[var(--bg-secondary)] rounded-xl pb-2  ">
      <img
        src={
          game.background_image
            ? game.background_image
            : "../public/image-error.jpg"
        }
        alt={game.name}
        className=" w-full rounded-t-xl h-auto min-h-[150px] object-cover aspect-[16/10] "
      />
      <div className="p-3 ">
        <div className="flex justify-between items-center mb-2 ">
          <HomeapagePlatforms game={game} />
          {game.metacritic ? (
            <span className="text-sm font-semibold py-0.5 px-[6px] outline outline-1 outline-[var(--c-green)] text-[var(--c-green)] rounded-sm">
              {game.metacritic}
            </span>
          ) : null}
        </div>
        <div>
          <HomepageLink game={game} />
          <LikeBtn />
        </div>
      </div>
    </div>
  );
}

export default HomepageCardItem;
