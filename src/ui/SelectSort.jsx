function SelectSort({ handleSortChange }) {
  return (
    <form className="mb-5 ">
      <select
        name="sort"
        id="sort"
        className="bg-[var(--bg-light)] py-1.5 px-2 rounded-md cursor-pointer text-sm "
        onChange={handleSortChange}
        value="none"
      >
        <option value="none" hidden disabled>
          Sorting
        </option>
        <option value="-released" className="">
          Release date
        </option>
        <option value="-metacritic">Meta critic</option>
        <option value="name">Name</option>
        <option value="-rating">Popularity</option>
      </select>
    </form>
  );
}

export default SelectSort;
