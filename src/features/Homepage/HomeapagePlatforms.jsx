import { platforms } from "../../data/data-platforms";

function HomeapagePlatforms({ game }) {
  return (
    <div className="flex gap-2 my-1 ">
      {game.parent_platforms?.map(({ platform }) =>
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
  );
}

export default HomeapagePlatforms;
