function GameBg({ data }) {
  return (
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
  );
}

export default GameBg;
