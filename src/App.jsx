import {
  BrowserRouter,
  Route,
  Routes,
  ScrollRestoration,
} from "react-router-dom";
import Applayout from "./ui/Applayout";
import Homepage from "./pages//Homepage";
import Platform from "./pages/Platform";
import NotPageFound from "./pages/NotPageFound";
import Game from "./pages/Game";
import Genre from "./pages/Genre";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Applayout />}>
          <Route index element={<Homepage />} />
          <Route path="platforms/:id" element={<Platform />} />
          <Route path="games/:id" element={<Game />} />
          <Route path="genres/:id" element={<Genre />} />
        </Route>
        <Route path="*" element={<NotPageFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
