import DateMetacritic from "./DateMetacritic";
import Developer from "./Developer";
import GameStore from "./GameStore";
import Genres from "./Genres";
import GamePlatforms from "./GamePlatforms";
import GameBg from "./GameBg";

function GameDetails({ data }) {
  return (
    <>
      <div className="pb-20 ml-20 max-xl:ml-4 max-md:mr-4 ">
        <div className="flex items-center  mb-2">
          <h1 className="text-6xl flex items-center ">{data.name}</h1>
        </div>
        <div className="max-w-5xl">
          <Genres data={data} />
          <DateMetacritic data={data} />
          <div className="flex mb-20 mt-4  gap-6 items-start ">
            <Developer data={data} />
            <GamePlatforms data={data} />
          </div>
          <p className="text-[#ffffffc0]">{data.description_raw}</p>

          <p className="mt-10 mb-2 text-xl text-center">You can buy on</p>
          <GameStore data={data} />
        </div>
      </div>
      <GameBg data={data} />
    </>
  );
}

export default GameDetails;
