import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const MainLayout = () => {
  return (
    <div>
      <div className="min-h-screen banner">
        <div className="container mx-auto max-w-screen-xl">
          <NavBar></NavBar>
          <Outlet></Outlet>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
