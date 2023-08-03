import { useParams } from "react-router-dom";
import HomepageList from "../features/Homepage/HomepageList";

function Platform() {
  const { id } = useParams();
  return <HomepageList key={id} endpoint="games" filter={`platforms=${id}`} />;
}

export default Platform;
