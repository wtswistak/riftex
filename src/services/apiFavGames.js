import supabase from "./supabase";

export async function getFavGames(userId) {
  if (!userId) return null;
  const { data, error } = await supabase
    .from("favGame")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.log("get favGames error");
    throw error;
  }
  return data;
}

export async function addFavGame({ gameId, userId }) {
  const { error } = await supabase
    .from("favGame")
    .insert([
      {
        game_id: gameId,
        user_id: userId,
      },
    ])
    .select();
  if (error) {
    console.log("add favGames error");
    throw error;
  }
}

export async function deleteFavGame({ gameId, userId }) {
  const { error } = await supabase
    .from("favGame")
    .delete()
    .eq("game_id", gameId)
    .eq("user_id", userId);
  if (error) {
    console.log("delete favGames error");
    throw error;
  }
}
