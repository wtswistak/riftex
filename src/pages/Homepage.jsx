import { useEffect } from "react";
import HomepageList from "../features/Homepage/HomepageList";
import { getFavGames } from "../services/apiFavGames";

function Homepage() {
  return (
    useEffect(function () {
      getFavGames().then((data) => console.log(data));
    }, []),
    (
      <div>
        <p className="text-5xl font-semibold px-5 pb-7 lg:text-7xl ">Games</p>
        <HomepageList endpoint="games" />
      </div>
    )
  );
}

export default Homepage;
