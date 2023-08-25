import { useLocation } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useEffect, useState } from "react";
import LinkSidebar from "./LinkSidebar";

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
          <LinkSidebar
            key={genre.id}
            to={`/genres/${genre.slug}`}
            data={genre}
            active={activeGenre}
            setActive={setActiveGenre}
          />
        ))}
    </div>
  );
}

export default GenresList;
