import supabase from "./supabase";

export async function getFavGames() {
  const { data, error } = await supabase.from("favGame").select("*");

  if (error) {
    console.log("favGames error");
    throw error;
  }
  return data;
}

export async function addFavGame(game_id, user_id) {
  const { data, error } = await supabase
    .from("favGame")
    .insert([
      {
        game_id: game_id,
        user_id: user_id,
      },
    ])
    .select();
  if (error) {
    console.log("favGames error");
    throw error;
  }
}
