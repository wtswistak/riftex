function Developer({ data }) {
  return (
    <div className="flex flex-wrap ">
      <p className="w-full text-[#ffffffa4] text-lg">Developer</p>
      {data.developers?.map((developer, i, arr) => (
        <p key={developer.name}>
          {`${developer.name + (i === arr.length - 1 ? "" : ",")}`}
          &nbsp;
        </p>
      ))}
    </div>
  );
}

export default Developer;
