import { BrowserRouter, Route, Routes } from "react-router-dom";
import Applayout from "./ui/Applayout";
import Homepage from "./pages//Homepage";
import Platform from "./pages/Platform";
import NotPageFound from "./pages/NotPageFound";
import Game from "./pages/Game";
import Genre from "./pages/Genre";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import Account from "./pages/Account";
import Login from "./features/auth/Login";
import SignUp from "./pages/SignUp";
import { SidebarProvider } from "./contexts/SidebarContext";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <SidebarProvider>
        <BrowserRouter>
          <Routes>
            <Route element={<Applayout />}>
              <Route index element={<Homepage />} />
              <Route path="platforms/:id" element={<Platform />} />
              <Route path="games/:id" element={<Game />} />
              <Route path="genres/:id" element={<Genre />} />
              <Route path="account/:id" element={<Account />} />
              <Route path="*" element={<NotPageFound />} />
            </Route>
            <Route path="/sign-up" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </SidebarProvider>
    </QueryClientProvider>
  );
}

export default App;
