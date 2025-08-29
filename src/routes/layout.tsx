import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";


export default function Layout() {
  return (
    <div className="flex min-h-screen">
      <Nav/>
      <Outlet />
    </div>
  );
}
