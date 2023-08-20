function SearchInput({
  query,
  isInputClosed,
  handleQuery,
  setIsResultsClosed,
  setHideCloseIcon,
}) {
  return (
    <input
      placeholder="Search game"
      className={`max-md:text-sm max-md:h-6 max-md:w-full ${
        isInputClosed ? "max-md:hidden" : "max-md:block"
      } placeholder:text-[--c-gray-light] h-11 text-sm focus:outline-none  px-2 bg-inherit`}
      value={query}
      onChange={(e) => {
        handleQuery(e.target.value);
        setIsResultsClosed(false);
        setHideCloseIcon(false);
        if (e.target.value === "") setHideCloseIcon(true);
      }}
    />
  );
}

export default SearchInput;
