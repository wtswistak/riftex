import HeaderSearch from "./HeaderSearch";
import Logo from "./Logo";

function Header() {
  return (
    <div className="flex justify-between items-center px-10 py-3  z-10 ">
      <Logo />
      <HeaderSearch />
    </div>
  );
}

export default Header;
