import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeaderLink({ path }) {
  return (
    <Link
      className="ml-5 p-1 hover:text-[var(--c-green)] duration-200"
      to={path}
    >
      <FaRegUser className="text-xl " />
    </Link>
  );
}

export default HeaderLink;
