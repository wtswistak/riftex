import { useState } from "react";
import HeaderSearch from "./HeaderSearch";
import Logo from "./Logo";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useUser } from "../features/auth/useUser";
import { useLogout } from "../features/Auth/useLogout";
import HeaderLink from "./HeaderLink";

function Header() {
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  const { user, isAuthenticated } = useUser();
  const { logout } = useLogout();

  return (
    <div className="flex max-lg:px-4 justify-between items-center px-10 py-3 z-10 ">
      <Logo isLogoVisible={isLogoVisible} />

      <div className="flex items-center w-full justify-end">
        <HeaderSearch setIsLogoVisible={setIsLogoVisible} />
        {isAuthenticated ? (
          <HeaderLink
            path={`/account/${user.id}`}
            isLogoVisible={isLogoVisible}
          />
        ) : (
          <HeaderLink path={`/login`} isLogoVisible={isLogoVisible} />
        )}
        {isAuthenticated && isLogoVisible ? (
          <Link
            className="ml-1 p-1 hover:text-[var(--c-green)] duration-200"
            onClick={logout}
            title="Wyloguj"
          >
            <FiLogOut className="text-[23px]" />
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Header;
