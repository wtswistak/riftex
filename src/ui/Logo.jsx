import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

function Logo({ isLogoVisible }) {
  const { isSidebarHidden, toggleSidebar } = useContext(SidebarContext);

  if (!isLogoVisible) return null;
  return (
    <>
      <button
        onClick={() => {
          toggleSidebar();
        }}
        className="mr-2 hover:text-[#bebebe] duration-200 sm:hidden"
      >
        {isSidebarHidden ? <FiX size={26} /> : <FiMenu size={24} />}
      </button>
      <Link to="/" className="flex items-center z-10 max-md:h-[40px]  ">
        <img
          src="../logo.png"
          alt="logo-controller"
          className="w-[28px] h-[19px] mr-1.5"
        />
        <p className="text-gray-100 mr-2 text-[28px] font-semibold max-sm:hidden">
          RIFTEX
        </p>
      </Link>
    </>
  );
}

export default Logo;
