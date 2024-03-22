import { Outlet } from "react-router-dom"
import NavBar from "../components/Navbar/NavBar"


const Dashbord = () => {
    return (
        <>
            <NavBar />
            <Outlet />
        </>
    )
}

export default Dashbord