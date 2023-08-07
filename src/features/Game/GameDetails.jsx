import GameStoreSite from "./GameStoreSite";

function GameDetails({ data }) {
  return (
    <>
      <div className="pb-20 ml-20 max-xl:ml-4  ">
        <div className="flex items-center  mb-2">
          <h1 className="text-6xl flex items-center ">{data.name}</h1>
        </div>
        <div className="max-w-5xl">
          <div className="flex items-center gap-10 text-lg mb-2">
            <p key={data.id} className="text-[#ffffffa4]  ">
              {data.genres?.map(
                (genre, i) => `${i !== 0 ? " \u2022" : ""}  ${genre.name}`
              )}
            </p>
          </div>
          <div>
            <p className="mb-0.5">Released {data.released}</p>
            <p>
              Metacritic&nbsp;
              <span className="text-md  font-semibold py-0.5 px-[6px] outline outline-1 outline-[var(--c-green)] text-[var(--c-green)] rounded-sm">
                {data.metacritic}
              </span>
            </p>
          </div>
          <div className="flex mb-20 mt-4  gap-6 items-start ">
            <div className="flex flex-wrap ">
              <p className="w-full text-[#ffffffa4] text-lg">Developer</p>
              {data.developers?.map((developer, i, arr) => (
                <p key={developer.name}>
                  {`${developer.name + (i === arr.length - 1 ? "" : ",")}`}
                  &nbsp;
                </p>
              ))}
            </div>

            <div className="flex flex-wrap max-w-lg">
              <p className="w-full text-[#ffffffa4] text-lg">Platforms</p>
              {data.platforms?.map(({ platform }, i, arr) => (
                <p key={platform.name}>
                  {`${platform.name + (i === arr.length - 1 ? "" : ",")}`}
                  &nbsp;
                </p>
              ))}
            </div>
          </div>
          <p className="text-[#ffffffc0]">{data.description_raw}</p>

          <p className="mt-10 mb-2 text-xl text-center">You can buy on</p>
          <div className="flex justify-center gap-2 flex-wrap">
            {data.stores?.map((store) => (
              <GameStoreSite storeData={store} key={store.id} />
            ))}
          </div>
        </div>
      </div>
      <div
        style={{
          backgroundImage: `linear-gradient(
          to bottom,
          rgba(0, 0, 0, 0.692),
          #151511
        ),url(${data.background_image}) `,
        }}
        className="absolute z-[-10] top-0 left-0 w-full h-3/4 bg-cover bg-no-repeat lg:h-4/5"
      ></div>
    </>
  );
}

export default GameDetails;
