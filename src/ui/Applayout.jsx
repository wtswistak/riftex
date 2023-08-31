import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import UpButton from "./UpButton";
import { useEffect } from "react";
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function Applayout() {
  return (
    <>
      <Header />
      <div className="flex pt-6 pr-10 max-md:px-4 max-lg:pr-4 mb-36">
        <Sidebar />
        <Outlet />
        <UpButton />
      </div>
      <ScrollToTop />
    </>
  );
}

export default Applayout;
