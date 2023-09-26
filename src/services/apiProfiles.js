import supabase from "./supabase";

export async function getProfile(id) {
  if (!id) return null;
  const { data, error } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", id);

  if (error) {
    console.log("profiles error");
    throw error;
  }
  return data[0];
}