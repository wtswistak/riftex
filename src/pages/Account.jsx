import React, { useEffect, useState } from "react";
import { useUser } from "../features/auth/useUser";
import { useProfile } from "../features/Auth/useProfile";
import Loader from "../ui/Loader";
import { useFavGames } from "../features/Account/useFavGames";
import HomepageCardItem from "../features/Homepage/HomepageCardItem";
import getGameDetails from "../services/apiGameDetails";

function Account() {
  const { user, isLoading } = useUser();
  const { isLoading: profileLoading, profile } = useProfile(user?.id);
  const { favGames, favGamesLoading } = useFavGames(user?.id);
  const [gameDetails, setGameDetails] = useState([]);

  useEffect(() => {
    const fetchGameDetails = async () => {
      const gameDetailsPromises = favGames.map((game) =>
        getGameDetails(game.game_id)
      );

      try {
        const gameDetailsData = await Promise.all(gameDetailsPromises);
        setGameDetails(gameDetailsData);
      } catch (error) {
        console.error("Error fetching game details:", error);
      }
    };

    if (favGames?.length >= 0) {
      fetchGameDetails();
    }
  }, [favGames]);

  if (isLoading || profileLoading || favGamesLoading) return <Loader />;

  return (
    <div className="md:pl-5">
      <p className="text-5xl font-semibold mb-12 max-md:mb-6 max-sm:text-4xl">
        {profile.username} games
      </p>
      {favGames.length ? (
        <div className="grid gap-y-7 mb-8 gap-x-5 2xl:grid-cols-4 lg:grid-cols-3 sm:grid-cols-2">
          {gameDetails.map((gameData) => (
            <HomepageCardItem key={gameData.id} game={gameData} />
          ))}
        </div>
      ) : (
        <p className="text-4xl font-medium mb-12 max-md:mb-6 max-md:text-2xl">
          You dont have any games yet
        </p>
      )}
    </div>
  );
}

export default Account;
