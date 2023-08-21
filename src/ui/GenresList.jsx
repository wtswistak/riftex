import useFetch from "../hooks/useFetch";
import GenreLink from "./GenreLink";

function GenresList() {
  const { data } = useFetch("genres");
  console.log(data);
  return (
    <div>
      {data
        .filter((genre) => genre.id < 11)
        .map((genre) => (
          <GenreLink key={genre.id} data={genre} />
        ))}
    </div>
  );
}

export default GenresList;
