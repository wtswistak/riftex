function HomepageCardItem({ game }) {
  return (
    <div key={game.id} className="bg-[var(--c-gray-dark)] rounded-xl ">
      <img
        src={game.background_image}
        alt={game.name}
        className=" w-full rounded-t-xl"
      />
      <div className="p-3">
        <h1 className="text-xl font-semibold">{game.name}</h1>

        {game.genres.map((genre, i) => (
          <p key={genre.id}>{genre.name}</p>
        ))}
      </div>
    </div>
  );
}

export default HomepageCardItem;
