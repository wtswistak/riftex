import { FaRegUser } from "react-icons/fa";
import { Link } from "react-router-dom";

function HeaderLink({ path, isLogoVisible }) {
  if (!isLogoVisible) return null;
  return (
    <Link
      className="ml-3 max-md:ml-1 p-1 hover:text-[var(--c-green)] duration-200"
      to={path}
    >
      <FaRegUser className="text-xl " />
    </Link>
  );
}

export default HeaderLink;
