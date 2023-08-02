import PlatformsList from "./PlatformsList";

function Sidebar() {
  return (
    <div className="pl-10 pr-6 min-w-max">
      <h1 className="text-2xl font-semibold mb-3">Platforms</h1>
      <PlatformsList />
    </div>
  );
}

export default Sidebar;
