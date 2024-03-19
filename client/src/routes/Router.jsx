import { createBrowserRouter } from "react-router-dom";
import Auth from "../pages/Auth/Auth";
import Login from "../components/LoginComponents/Login"
import Forgotpassword from "../components/LoginComponents/Forgotpassword"
import VerifyOTP from "../components/LoginComponents/VerifyOTP"
import NewPassword from "../components/LoginComponents/NewPassword"

const router = createBrowserRouter([

    {
        path: "/",
        element: <Auth />,
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


]);

export default router