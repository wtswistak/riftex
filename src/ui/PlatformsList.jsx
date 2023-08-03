import PlatformItem from "./PlatformItem";
import { platforms } from "../data/data-platforms";

function PlatformList() {
  return platforms.map((platform) => (
    <PlatformItem key={platform.id} platform={platform} />
  ));
}

export default PlatformList;
