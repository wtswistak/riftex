import axios from "axios";

const API_URL = "https://api.rawg.io/api/";
const API_KEY = import.meta.env.VITE_API_KEY;

const getGameDetails = async (gameId) => {
  try {
    const response = await axios.get(
      `${API_URL}games/${gameId}?key=${API_KEY}`
    );
    return response.data;
  } catch (error) {
    console.error("Error fetching game data by id:", error);
    throw new Error("Failed fetch game data by id");
  }
};

export default getGameDetails;
