const API_URL="https://api.rawg.io/api/"
const API_KEY = import.meta.env.VITE_API_KEY;


export async function getGamesList() {  
  const response = await fetch(`${API_URL}games?key=${API_KEY}` );
  if (!response.ok) throw Error(`Couldn't fetch`);

  const data = await response.json();
  return data.results;
}