import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import Loader from "./Loader";

function SearchResults({ query, clearQuery, isResultsClosed, toggleSetters }) {
  const { data, isLoading } = useFetch("games", `search=${query}`);
  if (isResultsClosed) return null;

  const handleClosing = () => {
    isResultsClosed = true;
    clearQuery();
    toggleSetters(true);
  };
  return (
    <div className=" absolute z-10 top-[68px] grid h-max 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 gap-5 px-10 max-lg:px-4   bottom-0 left-0 right-0 bg-[var(--bg-primary)] pb-24 pt-10 ">
      {isLoading && <Loader />}
      {data.results?.map((game) => {
        return (
          <Link
            to={`/games/${game.id}`}
            key={game.id}
            className="pb-4 bg-[var(--bg-secondary)] rounded-xl hover:opacity-[0.8] "
            onClick={handleClosing}
          >
            <img
              src={game.background_image}
              alt={game.name}
              className="w-full h-min aspect-[16/9] mb-2 object-cover "
            />
            <p className=" mx-2 font-semibold">{game.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

export default SearchResults;
