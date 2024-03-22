import { createBrowserRouter } from "react-router-dom";

import Login from "../components/LoginComponents/Login"
import Forgotpassword from "../components/LoginComponents/Forgotpassword"
import VerifyOTP from "../components/LoginComponents/VerifyOTP"
import NewPassword from "../components/LoginComponents/NewPassword"
import Dashbord from "../pages/Dashbord";
import DashbordContainer from "../components/DashBord/DashbordContainer";

const router = createBrowserRouter([

    {
        path: "/",
        children: [
            {
                path: "/login",
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
        element: <Dashbord />,
        children: [
            {
                path: "/dashbord",
                element: <DashbordContainer />,
            },

        ]
    },


]);

export default router