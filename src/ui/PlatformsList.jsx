import { useEffect, useState } from "react";
import { platforms } from "../data/data-platforms";
import { useLocation } from "react-router-dom";
import LinkSidebar from "./LinkSidebar";

function PlatformList() {
  const [activePlatform, setActivePlatform] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("platforms")) return;
    setActivePlatform(null);
  }, [location]);

  return platforms.map((platform) => (
    <LinkSidebar
      key={platform.id}
      to={`/platforms/${platform.id}`}
      data={platform}
      setActive={setActivePlatform}
      active={activePlatform}
    />
  ));
}

export default PlatformList;
