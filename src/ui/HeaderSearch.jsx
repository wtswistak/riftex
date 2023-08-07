import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import GameSearch from "../features/Game/GameSearchResults";
import useFetch from "../hooks/useFetch";

function HeaderInput() {
  const [query, setQuery] = useState("");
  const { data, isLoading } = useFetch("games", `search=${query}`);

  function handleQuery(newQuery) {
    setQuery(newQuery);
  }
  function clearQuery() {
    setQuery("");
  }

  return (
    <>
      <form className="z-10 bg-neutral-700 flex w-1/5 min-w-max items-center rounded-full px-4 transition-all ease-in duration-200 hover:w-2/4 focus-within:w-2/4 ">
        <FiSearch color="var(--c-gray-light)" />{" "}
        <input
          placeholder="Search game"
          className=" placeholder:text-[--c-gray-light] w-full h-11 text-sm focus:outline-none focus:ring-yellow-500 px-2 bg-neutral-700"
          value={query}
          onChange={(e) => handleQuery(e.target.value)}
        />
      </form>
      {query.length > 1 && (
        <GameSearch data={data.results} clearQuery={clearQuery} />
      )}
    </>
  );
}

export default HeaderInput;
