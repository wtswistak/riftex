import { useParams } from "react-router-dom";
import HomepageList from "../features/Homepage/HomepageList";
import { platforms } from "../data/data-platforms";

function Platform() {
  const { id } = useParams();
  const name = platforms.find((platform) => platform.id === Number(id)).name;
  return (
    <div className="block">
      <h1 className="text-5xl font-semibold px-5 pb-7 lg:text-7xl">
        {name} Games
      </h1>
      <HomepageList key={id} endpoint="games" filter={`platforms=${id}`} />
    </div>
  );
}

export default Platform;
