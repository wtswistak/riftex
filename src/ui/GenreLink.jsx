import { Link } from "react-router-dom";

function GenreLink({ data }) {
  return (
    <Link
      to={`/genres/${data.slug}`}
      className={`flex items-center mb-1 py text-lg py-0.5 relative group `}
    >
      <p>{data.name}</p>
      <span
        className={`
       w-0
         absolute bottom-[-2px] left-[-2px] h-[2px] bg-[var(--c-green)] transition-all group-hover:w-full`}
      ></span>
    </Link>
  );
}

export default GenreLink;
// ${  activeGenre === data.id ? "w-full" : "w-0"}
