import supabase from "./supabase";

export async function getComments(userId) {
  if (!userId) return null;
  const { data, error } = await supabase
    .from("comments")
    .select("*")
    .eq("user_id", userId);

  if (error) {
    console.log("get comments error");
    throw error;
  }
  return data;
}

export async function addComment({ gameId, userId, comment }) {
  const { error } = await supabase
    .from("comments")
    .insert([
      {
        game_id: gameId,
        user_id: userId,
        comment: comment,
      },
    ])
    .select();
  if (error) {
    console.log("add comment error");
    throw error;
  }
}
