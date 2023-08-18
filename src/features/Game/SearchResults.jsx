import { useState } from "react";
import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";
import Loader from "../../ui/Loader";

function SearchResults({ query, clearQuery, isResultsClosed, toggleSetters }) {
  const { data, isLoading } = useFetch("games", `search=${query}`);
  if (isResultsClosed) return null;

  const handleClosing = () => {
    isResultsClosed = true;
    clearQuery();
    toggleSetters(true);
  };
  return (
    <div className=" absolute z-[5]  grid h-max 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3  md:grid-cols-2 gap-5 px-10 top-0  bottom-0 left-0 right-0 bg-[var(--bg-primary)] py-24 ">
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
