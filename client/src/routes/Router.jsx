import { createBrowserRouter } from "react-router-dom";

import Login from "../components/LoginComponents/Login";
import Forgotpassword from "../components/LoginComponents/Forgotpassword";
import VerifyOTP from "../components/LoginComponents/VerifyOTP";
import NewPassword from "../components/LoginComponents/NewPassword";
import Dashbord from "../pages/Dashbord";
import Employees from "../components/DashBord/Employees";
import { DataProvider } from "../Context/DataContext";
import EmployeeDetails from "../components/DashBord/Employee";
import MDashBord from "../components/DashBord/DashBord";
import Leave from "../components/Leave/Leave";

const router = createBrowserRouter([
  {
    path: "/",
    children: [
      {
        path: "/",
        element: <Login />,
      },
      {
        path: "/login/forgotpassword",
        element: <Forgotpassword />,
      },
      {
        path: "/login/verification",
        element: <VerifyOTP />,
      },
      {
        path: "/login/newpassword",
        element: <NewPassword />,
      },
    ],
  },
  {
    path: "/dashbord",
    element: <MDashBord />,
  },
  {
    path: "/dashbord/employee",
    element: (
      <DataProvider>
        <Dashbord />
      </DataProvider>
    ),
    children: [
      {
        path: "/dashbord/employee",
        element: <Employees />,
      },
      {
        path: "/dashbord/employee/leave",
        element: <Leave />,
      },
      {
        path: "/dashbord/employee/details",
        element: <EmployeeDetails />,
      },
    ],
  },
]);

export default router;
