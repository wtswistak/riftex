import { useState } from "react";
import HeaderSearch from "./HeaderSearch";
import Logo from "./Logo";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useUser } from "../features/auth/useUser";
import { useLogout } from "../features/Auth/useLogout";
import { FaRegUser } from "react-icons/fa";

function Header() {
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const { user, isLoading, isAuthenticated } = useUser();
  const { logout } = useLogout();

  return (
    <div className="flex max-lg:px-4 justify-between items-center px-10 py-3  z-10 ">
      <Logo isLogoVisible={isLogoVisible} />

      <div className="flex items-center w-full justify-end">
        <HeaderSearch setIsLogoVisible={setIsLogoVisible} />
        {isAuthenticated ? (
          <Link className="ml-5" to={`/account/${user.id}`}>
            <FaRegUser className="text-lg  cursor-pointer" />
          </Link>
        ) : (
          <Link className="ml-5" to={"/login"}>
            <FaRegUser className="text-lg  cursor-pointer" />
          </Link>
        )}
        {isAuthenticated ? (
          <FiLogOut className="text-xl  cursor-pointer ml-2" onClick={logout} />
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
