import { useState } from "react";
import PlatformItem from "./PlatformItem";
import { platforms } from "../data/data-platforms";

function PlatformList() {
  const [activePlatform, setActivePlatform] = useState(null);

  return platforms.map((platform) => (
    <PlatformItem
      key={platform.id}
      platform={platform}
      setActivePlatform={setActivePlatform}
      activePlatform={activePlatform}
    />
  ));
}

export default PlatformList;
