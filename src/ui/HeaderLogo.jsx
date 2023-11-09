import { FiMenu, FiX } from "react-icons/fi";
import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import Logo from "./Logo";

function HeaderLogo({ isVisible }) {
  const { isSidebarHidden, toggleSidebar } = useContext(SidebarContext);

  if (!isVisible) return null;
  return (
    <>
      <button
        onClick={() => {
          toggleSidebar();
        }}
        className="mr-2 hover:text-[#bebebe] duration-200 sm:hidden"
      >
        {isSidebarHidden ? <FiX size={26} /> : <FiMenu size={26} />}
      </button>
      <Logo isVisible={isVisible} mobileVisibleLogo={"hidden"} />
    </>
  );
}

export default HeaderLogo;
