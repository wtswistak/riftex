import React, { useEffect, useState } from "react";
import HomepageCardItem from "../Homepage/HomepageCardItem";
import useFetch from "../../hooks/useFetch";
import Loader from "../../ui/Loader";

function HomepageList({ endpoint, filter }) {
  const [sortOption, setSortOption] = useState("date");
  const { data, isLoading, setPage, setData } = useFetch(
    endpoint,
    `${filter}${sortOption ? `&ordering=${sortOption}` : ""}`
  );

  const handleSortChange = (event) => {
    const newSortOption = event.target.value;
    setSortOption(newSortOption);
    setData([]);
    setPage(1);
  };

  const handleScroll = () => {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="max-md:px-0  pl-5">
      <form className="mb-5 ">
        <select
          name=""
          id=""
          className="bg-[var(--bg-secondary)] py-1.5 px-2 rounded-md cursor-pointer"
          onChange={handleSortChange}
          value={sortOption}
        >
          <option value="added">Date</option>
          <option value="-metacritic">Meta critic</option>
          <option value="name">Name</option>
          <option value="rating">Popularity</option>
          <option value="released">Released</option>
        </select>
      </form>
      <div className="grid  items-stretch gap-y-7 mb-16 gap-x-5  2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
        {data.map((game) => (
          <HomepageCardItem key={game.id} game={game} />
        ))}
        {isLoading && <Loader />}
      </div>
    </div>
  );
}

export default HomepageList;
