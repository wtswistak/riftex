import { useRef, useState } from "react";
import { FiSearch } from "react-icons/fi";
import SearchResults from "../features/Game/SearchResults";
import { TfiClose } from "react-icons/tfi";
import { Link } from "react-router-dom";

function HeaderInput({ setIsLogoVisible }) {
  const [query, setQuery] = useState("");
  const [hideCloseIcon, setHideCloseIcon] = useState(true);
  const [isResultsClosed, setIsResultsClosed] = useState(false);
  const [isInputExpanded, setIsInputExpanded] = useState(false);
  const ref = useRef(null);

  function handleQuery(newQuery) {
    setQuery(newQuery);
  }
  function clearQuery() {
    setQuery("");
  }

  return (
    <>
      <form
        className={`max-md:px-[10px] ${
          isInputExpanded ? "max-md:w-full" : "max-md:w-auto"
        } max-md:py-2 z-10 text-[var(--c-gray-light)] text-2xl bg-neutral-700 items-center rounded-full px-4 transition-all ease-in duration-200 flex`}
      >
        <FiSearch
          color="var(--c-gray-light)"
          className="max-md:w-5 max-md:cursor-pointer"
          onClick={() => {
            ref.current.focus();
            setIsInputExpanded(true);
            setIsLogoVisible(false);
            setHideCloseIcon(false);
            console.log("1");
          }}
        />
        <input
          autoFocus
          placeholder="Search game"
          className={`max-md:text-sm max-md:h-6 max-md:w-full ${
            isInputExpanded ? "max-md:block" : "max-md:hidden"
          } placeholder:text-[--c-gray-light] h-11 text-sm focus:outline-none focus:ring-yellow-500 px-2 bg-neutral-700`}
          value={query}
          onChange={(e) => {
            handleQuery(e.target.value);
            setIsResultsClosed(false);
            setHideCloseIcon(false);
            if (e.target.value === "") setHideCloseIcon(true);
          }}
          ref={ref}
        />
        <Link
          to="#"
          className={`max-md:w-auto ${hideCloseIcon ? "invisible" : "visible"}`}
          onClick={() => {
            setIsLogoVisible(true);
            setIsInputExpanded(false);
            setIsResultsClosed(true);
            setHideCloseIcon(true);
            setQuery("");
          }}
        >
          <TfiClose
            className={`text-xl max-md:text-lg ${
              hideCloseIcon ? "max-md:w-0" : "max-md:w-auto"
            }`}
          />
        </Link>
      </form>
      {query.length > 0 && (
        <SearchResults
          query={query}
          clearQuery={clearQuery}
          setHideCloseIcon={setHideCloseIcon}
          isResultsClosed={isResultsClosed}
          setIsInputExpanded={setIsInputExpanded}
          setIsLogoVisible={setIsLogoVisible}
        />
      )}
    </>
  );
}

export default HeaderInput;
