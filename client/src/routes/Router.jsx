import { createBrowserRouter } from "react-router-dom";

import Login from "../components/LoginComponents/Login"
import Forgotpassword from "../components/LoginComponents/Forgotpassword"
import VerifyOTP from "../components/LoginComponents/VerifyOTP"
import NewPassword from "../components/LoginComponents/NewPassword"
import Dashbord from "../pages/Dashbord";
import Employee from "../components/DashBord/Employee";
import { DataProvider } from "../Context/DataContext";

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
        element: <DataProvider><Dashbord /></DataProvider>,
        children: [        
            {
                path: "/dashbord/employee",
                element: <Employee />,
            },
        ]
    },


]);

export default router