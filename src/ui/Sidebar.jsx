import GenresList from "./GenresList";
import PlatformsList from "./PlatformsList";

function Sidebar() {
  return (
    <div className="pl-10 pr-6 max-lg:px-4 min-w-max max-md:hidden">
      <h1 className="text-2xl font-semibold mb-3">Platforms</h1>
      <PlatformsList />
      <h1 className="text-2xl font-semibold mb-3 mt-10">Genres</h1>
      <GenresList />
    </div>
  );
}

export default Sidebar;
