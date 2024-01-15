import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

function SearchInput({
  query,
  isInputClosed,
  setQuery,
  setIsResultsClosed,
  setHideCloseIcon,
}) {
  const { setIsSidebarHidden } = useContext(SidebarContext);

  return (
    <input
      placeholder="Search game"
      className={`max-md:text-sm max-md:h-6 max-md:w-full  ${
        isInputClosed ? "max-md:hidden" : "max-md:block"
      } placeholder:text-[--c-gray-light] h-11 text-sm focus:outline-none  outline-none px-2 md:w-full bg-inherit tranistion-all ease-in duration-200`}
      name="search"
      value={query}
      onChange={(e) => {
        setQuery(e.target.value);
        setIsResultsClosed(false);
        setHideCloseIcon(false);
        if (e.target.value === "") setHideCloseIcon(true);
        if (e.target.value.length > 0) setIsSidebarHidden(true);
        if (e.target.value.length < 1) setIsSidebarHidden(false);
      }}
    />
  );
}

export default SearchInput;
