import { useParams } from "react-router-dom";
import HomepageList from "../features/Homepage/HomepageList";
import { platforms } from "../data/data-platforms";

function PageFilter({ endpoint, filter }) {
  const { id } = useParams();
  let name =
    platforms.find((platform) => platform.id === Number(id))?.name || id;
  name = name.charAt(0).toUpperCase() + name.slice(1);
  if (name.includes("Role")) name = "RPG";

  return (
    <div className="block">
      <h1 className="text-5xl font-semibold px-5 pb-7 lg:text-7xl max-md:pl-0">
        {name} Games
      </h1>
      <HomepageList key={id} endpoint={endpoint} filter={`${filter}=${id}`} />
    </div>
  );
}

export default PageFilter;
