import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Homepage from "./pages//Homepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route index element={<Homepage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
