import React, { useContext, useEffect, useState } from "react";
import HomepageCardItem from "../Homepage/HomepageCardItem";
import useFetch from "../../hooks/useFetch";
import Loader from "../../ui/Loader";
import SelectSort from "../../ui/SelectSort";
import { SidebarContext } from "../../contexts/SidebarContext";
import throttle from "lodash/throttle";

function HomepageList({ endpoint, filter }) {
  const [curPage, setCurPage] = useState(1);
  const [sortOption, setSortOption] = useState("none");
  const { data, isLoading, setIsLoading, setPage, setData, page } = useFetch(
    endpoint,
    `${filter ? filter : ""}${sortOption ? `&ordering=${sortOption}` : ""}`
  );
  const [firstLoad, setFirstLoad] = useState(true);
  const { isSidebarHidden } = useContext(SidebarContext);

  const handleSortChange = (event) => {
    const newSortOption = event.target.value;
    setSortOption(newSortOption);
    setData([]);
    setPage(1);
    setFirstLoad(true);
  };

  const handleScroll = throttle(() => {
    if (!isLoading && window.scrollY >= document.body.scrollHeight - 1800) {
      setIsLoading(true);
      console.log("okokok");
      setPage((prevPage) => prevPage + 1);
    }
  }, 500);

  useEffect(() => {
    if (isSidebarHidden) return;
    if (data.length > 0) {
      setFirstLoad(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading, data, isSidebarHidden]);

  return (
    <>
      {isLoading && firstLoad && <Loader />}
      <div className="max-md:px-0 pl-5">
        <SelectSort
          handleSortChange={handleSortChange}
          sortOption={sortOption}
        />
        <div className="grid gap-y-7 mb-8 gap-x-5 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2">
          {data.map((game) => (
            <HomepageCardItem key={game.id} game={game} />
          ))}
        </div>
      </div>
    </>
  );
}

export default HomepageList;
