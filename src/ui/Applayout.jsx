import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import UpButton from "./UpButton";
import { useContext, useEffect } from "react";
import { SidebarContext } from "../contexts/SidebarContext";

function Applayout() {
  const { isSidebarHidden } = useContext(SidebarContext);
  useEffect(() => {
    window.scrollTo({ top: 0 });
  }, [window.location.pathname]);
  return (
    <>
      <Header />
      <div className="flex pt-6 pr-10 max-md:px-4  max-lg:pr-4 mb-16">
        <Sidebar />
        <div className={`${isSidebarHidden ? "hidden" : ""}`}>
          <Outlet />
        </div>
        <UpButton />
      </div>
    </>
  );
}

export default Applayout;
