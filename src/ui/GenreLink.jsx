import { Link } from "react-router-dom";

function GenreLink({ data, activeGenre, setActiveGenre }) {
  const handleClick = () => {
    setActiveGenre(data.id);
  };

  return (
    <Link
      to={`/genres/${data.slug}`}
      onClick={handleClick}
      className={`flex items-center mb-1 py text-lg py-0.5 relative group `}
    >
      <p>{data.name}</p>
      <span
        className={`${
          activeGenre === data.id ? "w-full" : "w-0"
        } absolute bottom-[-2px] left-[-2px] h-[2px] bg-[var(--c-green)] transition-all group-hover:w-full`}
      ></span>
    </Link>
  );
}

export default GenreLink;
