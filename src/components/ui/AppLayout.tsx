import { Outlet } from "react-router-dom";
import NavBar from "./NavBar";

function AppLayout() {
  return (
    <div>
      <div>
        <NavBar />
      </div>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
