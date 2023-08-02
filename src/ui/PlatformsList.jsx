import PlatformItem from "./PlatformItem";
import { platforms } from "../data/data-platforms";

function List() {
  return platforms.map((platform) => (
    <PlatformItem key={platform.id} platform={platform} />
  ));
}

export default List;
