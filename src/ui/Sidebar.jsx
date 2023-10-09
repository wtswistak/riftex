import { useContext } from "react";
import GenresList from "./GenresList";
import PlatformsList from "./PlatformsList";
import { SidebarContext } from "../contexts/SidebarContext";

function Sidebar() {
  const { isSidebarHidden } = useContext(SidebarContext);

  return (
    <div
      className={`pl-10 pr-6 max-md:pl-0 max-lg:pl-4 max-sm:w-full z-50 ${
        isSidebarHidden ? "" : "max-sm:hidden"
      }`}
    >
      <h1 className="text-2xl font-semibold mb-3">Platforms</h1>
      <PlatformsList />
      <h1 className="text-2xl font-semibold mb-3 mt-10">Genres</h1>
      <GenresList />
    </div>
  );
}

export default Sidebar;
