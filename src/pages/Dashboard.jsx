import React, { useEffect, useState } from "react";
import { getGamesList } from "../services/apiRawg";
import DashboardItem from "./DashboardItem";

function Dashboard() {
  const [games, setGames] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const gamesData = await getGamesList();
        setGames(gamesData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }
    fetchData();
  }, []);

  if (!games) {
    return <div>Loading...</div>;
  }
console.log(games)


return (
 <div className="grid gap-y-7 mb-16 gap-x-5 pl-5 2xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2">
    {games.map((game) => (
      <DashboardItem key={game.id} game={game} />
      ))}
      </div>
);
}

export default Dashboard;
