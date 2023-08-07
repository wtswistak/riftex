function Genres({ data }) {
  return (
    <div className="flex items-center gap-10 text-lg mb-2">
      <p key={data.id} className="text-[#ffffffa4]  ">
        {data.genres?.map(
          (genre, i) => `${i !== 0 ? " \u2022" : ""}  ${genre.name}`
        )}
      </p>
    </div>
  );
}

export default Genres;
