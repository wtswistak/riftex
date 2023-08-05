import GameStoreSite from "./GameStoreSite";

function GameDetails({ data }) {
  return (
    <>
      <div className="pb-20">
        <h1 className="text-6xl">{data.name}</h1>
        <p key={data.id} className="text-[#ffffffa4] text-lg mb-2">
          {data.genres?.map(
            (genre, i) => `${i !== 0 ? " \u2022" : ""}  ${genre.name}`
          )}

          {/* {data.developers?.[0].name} */}
        </p>
        <p>Released {data.released}</p>
        <p>{data.metacritic}</p>
        <div className="flex ">
          <p>
            {data.developers?.length > 1 ? "Developers" : "Developer"}&nbsp;
          </p>
          {data.developers?.map((developer) => (
            <p key={developer.name}>{developer.name}&nbsp;</p>
          ))}
        </div>
        {/* <img src={data.background_image} alt={data.name} /> */}
        <p>{data.description_raw}</p>

        <p className="">You can buy on</p>
        <div className="flex gap-2 flex-wrap">
          {data.stores?.map((store) => (
            <GameStoreSite storeData={store} key={store.id} />
          ))}
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.644),
          rgba(0, 0, 0, 0.904)
        ),url(${data.background_image}) `,
        }}
        className="absolute z-[-10] top-0 left-0 w-full h-3/4 bg-cover bg-no-repeat lg:h-4/5 ]  "
      ></div>
    </>
  );
}

export default GameDetails;
