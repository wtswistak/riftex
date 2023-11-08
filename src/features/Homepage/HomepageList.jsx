import React, { useEffect, useState } from "react";
import HomepageCardItem from "../Homepage/HomepageCardItem";
import useFetch from "../../hooks/useFetch";
import Loader from "../../ui/Loader";
import SelectSort from "../../ui/SelectSort";

function HomepageList({ endpoint, filter }) {
  const [curPage, setCurPage] = useState(1);
  const [sortOption, setSortOption] = useState("none");
  const { data, isLoading, setIsLoading, setPage, setData, page } = useFetch(
    endpoint,
    `${filter ? filter : ""}${sortOption ? `&ordering=${sortOption}` : ""}`
  );
  const [firstLoad, setFirstLoad] = useState(true);

  const handleSortChange = (event) => {
    const newSortOption = event.target.value;
    setSortOption(newSortOption);
    setData([]);
    setPage(1);
    setFirstLoad(true);
  };

  const handleScroll = () => {
    if (
      !isLoading &&
      (window.innerHeight + window.scrollY) / document.body.scrollHeight >= 0.9
    ) {
      setIsLoading(true);
      console.log("okokok");
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [isLoading]);

  useEffect(() => {
    if (data.length > 0) {
      setFirstLoad(false);
    }
  }, [data]);

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
