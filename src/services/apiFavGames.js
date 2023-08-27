import supabase from "./supabase";

export async function getFavGames() {
  const { data, error } = await supabase.from("favGame").select("*");

  if (error) {
    console.log("favGames error");
    throw error;
  }
  return data;
}
