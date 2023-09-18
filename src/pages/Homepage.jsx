import HomepageList from "../features/Homepage/HomepageList";

function Homepage() {
  return (
    <div>
      <p className="text-5xl font-semibold px-5 pb-7 lg:text-7xl max-md:px-2 ">
        Games
      </p>
      <HomepageList endpoint="games" />
    </div>
  );
}

export default Homepage;
