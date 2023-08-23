import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import GenreLink from "./GenreLink";
import { useEffect, useState } from "react";

function GenresList() {
  const { data } = useFetch("genres");
  const [activeGenre, setActiveGenre] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("genres")) return;
    setActiveGenre(null);
  }, [location]);

  return (
    <div>
      {data
        .filter((genre) => genre.id < 11)
        .map((genre) => (
          <GenreLink
            key={genre.id}
            data={genre}
            activeGenre={activeGenre}
            setActiveGenre={setActiveGenre}
          />
        ))}
    </div>
  );
}

export default GenresList;
