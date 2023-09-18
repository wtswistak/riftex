import { Outlet } from "react-router-dom";
import Header from "./Header";
import Sidebar from "./Sidebar";
import UpButton from "./UpButton";

function Applayout() {
  return (
    <>
      <Header />
      <div className="flex pt-6 pr-10 max-md:px-4 max-lg:pr-4 mb-16">
        <Sidebar />
        <Outlet />
        <UpButton />
      </div>
    </>
  );
}

export default Applayout;
