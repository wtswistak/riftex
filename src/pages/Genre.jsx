import { useParams } from "react-router-dom";
import HomepageList from "../features/Homepage/HomepageList";

function Genre() {
  const { id } = useParams();
  return (
    <div className="block">
      <h1 className="text-5xl font-semibold px-5 pb-7 lg:text-7xl">
        {id} Games
      </h1>
      <HomepageList key={id} endpoint="games" filter={`genres=${id}`} />
    </div>
  );
}

export default Genre;
