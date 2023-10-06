import supabase from "./supabase";

export async function signUp({ email, password }) {
  const { data, error } = await supabase.auth.signUp({
    email: email,
    password: password,
  });
  const emailExists = data.session === null;

  console.log(data);
  if (error) {
    console.log(error);
    throw error;
  }
  return { data, emailExists };
}
