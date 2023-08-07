function DateMetacritic({ data }) {
  return (
    <div>
      <p className="mb-0.5">Released {data.released}</p>
      <p>
        Metacritic&nbsp;
        <span className="text-md  font-semibold py-0.5 px-[6px] outline outline-1 outline-[var(--c-green)] text-[var(--c-green)] rounded-sm">
          {data.metacritic}
        </span>
      </p>
    </div>
  );
}

export default DateMetacritic;
