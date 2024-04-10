import { createBrowserRouter } from "react-router-dom";

import Login from "../components/LoginComponents/Login"
import Forgotpassword from "../components/LoginComponents/Forgotpassword"
import VerifyOTP from "../components/LoginComponents/VerifyOTP"
import NewPassword from "../components/LoginComponents/NewPassword"
import Dashbord from "../pages/Dashbord";
import Employees from "../components/DashBord/Employees";
import { DataProvider } from "../Context/DataContext";
import Employee from "../components/DashBord/Employee";
import MDashBord from '../components/DashBord/DashBord'

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

        ]
    },
    {
        path: "/dashbord",
        element: <MDashBord />,
    },
    {
        path: "/dashbord/employee",
        element: <DataProvider>
                    <Dashbord />
                </DataProvider>,
        children: [                  
            {
                path: "/dashbord/employees",
                element: <Employees />,
            },
            {
                path: "/dashbord/employees/employee",
                element: <Employee />,
            },
        ]
    },


]);

export default router