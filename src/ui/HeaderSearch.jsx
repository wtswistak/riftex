import { useState } from "react";
import { FiSearch } from "react-icons/fi";
import SearchResults from "../features/Game/SearchResults";
import { TfiClose } from "react-icons/tfi";
import SearchInput from "./SearchInput";

function HeaderInput({ setIsLogoVisible }) {
  const [query, setQuery] = useState("");
  const [hideCloseIcon, setHideCloseIcon] = useState(true);
  const [isResultsClosed, setIsResultsClosed] = useState(false);
  const [isInputClosed, setIsInputClosed] = useState(true);

  function handleQuery(newQuery) {
    setQuery(newQuery);
  }
  function clearQuery() {
    setQuery("");
  }
  function toggleSetters(flag) {
    setIsInputClosed(flag);
    setIsLogoVisible(flag);
    setHideCloseIcon(flag);
  }

  return (
    <>
      <form
        className={`max-md:px-[10px] ${
          isInputClosed ? "max-md:w-auto" : "max-md:w-full"
        } max-md:py-2 z-10 text-[var(--c-gray-light)] text-2xl bg-[var(--bg-light)] md:w-80 md:hover:w-full  md:focus-within:w-full focus-within:outline-2 focus-within:outline  xl:ml-24 md:ml-10 items-center rounded-full px-4 transition-all ease-in duration-200  flex`}
      >
        <FiSearch
          onClick={() => {
            toggleSetters(false);
          }}
          color="var(--c-gray-light)"
          className="w-5 max-md:cursor-pointer"
        />

        <SearchInput
          query={query}
          isInputClosed={isInputClosed}
          handleQuery={handleQuery}
          setIsResultsClosed={setIsResultsClosed}
          setHideCloseIcon={setHideCloseIcon}
        />

        <TfiClose
          className={`text-xl cursor-pointer max-md:text-lg ${
            hideCloseIcon ? "max-md:w-0 invisible" : "max-md:w-auto visible"
          } `}
          onClick={() => {
            toggleSetters(true);
            setIsResultsClosed(true);
            setQuery("");
          }}
        />
      </form>
      {query.length > 0 && (
        <SearchResults
          query={query}
          clearQuery={clearQuery}
          isResultsClosed={isResultsClosed}
          toggleSetters={toggleSetters}
        />
      )}
    </>
  );
}

export default HeaderInput;
