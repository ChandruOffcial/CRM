import { Outlet } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import DropDown from "../components/DashBord/DropDown";

const Dashbord = () => {
  return (
    <>
      <NavBar />
      <div className="w-screen h-screen bg-[#EDEEFF] relative ">
        <div className="container mx-auto flex justify-start gap-x-4">
          <DropDown />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashbord;
