import { Outlet } from "react-router-dom"
import Header from "./Header"


function Applayout() {
  return (<>
    <Header/>
    <Outlet/>
  </>
  )
}

export default Applayout
