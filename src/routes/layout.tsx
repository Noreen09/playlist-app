import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";
import { PlayerProvider } from "./PlayerContext"; // import context

export default function Layout() {
  return (
    <PlayerProvider>
      <div className="flex min-h-screen">
        <Nav />
        <Outlet />
      </div>
    </PlayerProvider>
  );
}
