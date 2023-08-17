import { useState } from "react";
import HeaderSearch from "./HeaderSearch";
import Logo from "./Logo";

function Header() {
  const [isLogoVisible, setIsLogoVisible] = useState(true);
  return (
    <div className="flex max-lg:px-4 justify-between items-center px-10 py-3  z-10 ">
      <Logo isLogoVisible={isLogoVisible} />
      <HeaderSearch setIsLogoVisible={setIsLogoVisible} />
    </div>
  );
}

export default Header;
