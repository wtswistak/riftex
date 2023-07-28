import { Outlet } from "react-router-dom"
import Header from "./Header"
import Sidebar from "./Sidebar"


function Applayout() {
  return (<>
    <Header/>
    <div className="flex pt-6 pr-10">
      <Sidebar/>
      <Outlet/>
    </div>
  </>
  )
}

export default Applayout
