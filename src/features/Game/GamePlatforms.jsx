function GamePlatforms({ data }) {
  return (
    <div className="flex flex-wrap max-w-lg">
      <p className="w-full text-[#ffffffa4] text-lg">Platforms</p>
      {data.platforms?.map(({ platform }, i, arr) => (
        <p key={platform.name}>
          {`${platform.name + (i === arr.length - 1 ? "" : ",")}`}
          &nbsp;
        </p>
      ))}
    </div>
  );
}

export default GamePlatforms;
