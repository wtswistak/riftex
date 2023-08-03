import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Homepage from "./pages//Homepage";
import Platform from "./pages/Platform";
import NotPageFound from "./pages/NotPageFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route index element={<Homepage />} />
          <Route path="platforms/:id" element={<Platform />} />
        </Route>
        <Route path="*" element={<NotPageFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
