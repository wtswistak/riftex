import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Dashboard from "./features/Dashboard/Dashboard";


function App() {
  return(
 <BrowserRouter>
 <Routes>
   <Route element={<Applayout/>}>
   <Route index element={<Dashboard/>}/>
   </Route>
 </Routes>
 </BrowserRouter>
  )
}

export default App;
