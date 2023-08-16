import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import SearchResults from "../features/Game/SearchResults";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";

function HeaderInput() {
  const [query, setQuery] = useState("");
  const [hideCloseIcon, setHideCloseIcon] = useState(true);
  const [isResultsClosed, setIsResultsClosed] = useState(false);

  function handleQuery(newQuery) {
    setQuery(newQuery);
  }
  function clearQuery() {
    setQuery("");
  }

  return (
    <>
      <form className=" max-md:px-[10px] max-md:py-2  max-md:w-0 z-10 text-[var(--c-gray-light)] text-2xl bg-neutral-700 flex w-1/5 min-w-max items-center rounded-full px-4 transition-all ease-in duration-200 focus-within:w-2/4 max-md:focus-within:w-4  group">
        <FiSearch color="var(--c-gray-light)" className="max-md:w-5" />{" "}
        <input
          placeholder="Search game"
          className="max-md:w-0  transition-all ease-in duration-300 max-md:text-sm max-md:h-6 group-focus-within:max-md:w-full  placeholder:text-[--c-gray-light] w-full h-11 text-sm focus:outline-none focus:ring-yellow-500 px-2 bg-neutral-700"
          value={query}
          onChange={(e) => {
            handleQuery(e.target.value);
            setIsResultsClosed(false);
            setHideCloseIcon(false);
            if (e.target.value === "") setHideCloseIcon(true);
          }}
        />
        <Link
          to="#"
          className="max-md:w-auto"
          onClick={() => {
            setIsResultsClosed(true);
            setHideCloseIcon(true);
            setQuery("");
          }}
        >
          <TfiClose
            className={`text-xl max-md:text-lg ${
              hideCloseIcon ? "invisible" : "visible"
            }  ${hideCloseIcon ? "max-md:w-0" : "max-md:w-auto"}`}
          />
        </Link>
      </form>
      {query.length > 0 && (
        <SearchResults
          query={query}
          clearQuery={clearQuery}
          setHideCloseIcon={setHideCloseIcon}
          onClose={() => setHideCloseIcon(true)}
          isResultsClosed={isResultsClosed}
        />
      )}
    </>
  );
}

export default HeaderInput;
