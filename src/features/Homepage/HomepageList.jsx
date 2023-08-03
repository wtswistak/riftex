import React, { useEffect } from "react";
import HomepageCardItem from "../Homepage/HomepageCardItem";
import useFetch from "../../hooks/useFetch";
import Loader from "../../ui/Loader";

function HomepageList({ endpoint, filter }) {
  const { data, isLoading, setPage } = useFetch(endpoint, filter);

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
    <div className="grid  items-start gap-y-7 mb-16 gap-x-5 pl-5 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
      {isLoading && <Loader />}
      {data.map((game) => (
        <HomepageCardItem key={game.id} game={game} />
      ))}
    </div>
  );
}

export default HomepageList;
