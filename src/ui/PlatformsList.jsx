import { useEffect, useState } from "react";
import PlatformLink from "./PlatformLink";
import { platforms } from "../data/data-platforms";
import { useLocation } from "react-router-dom";

function PlatformList() {
  const [activePlatform, setActivePlatform] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.pathname.includes("platforms")) return;
    setActivePlatform(null);
  }, [location]);

  return platforms.map((platform) => (
    <PlatformLink
      key={platform.id}
      platform={platform}
      setActivePlatform={setActivePlatform}
      activePlatform={activePlatform}
    />
  ));
}

export default PlatformList;
