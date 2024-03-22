import { RiLogoutCircleRLine } from "react-icons/ri";
import logo from "../../assets/logo.png"
import "../components.css"

const NavBar = () => {

    return (
        <header className="max-w-screen bg-[#ADA6FB]">
            <div className="container mx-auto">
                <div className="navbar xl:px-16 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div role="button" className="btn btn-ghost lg:hidden">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                            </div>

                        </div>
                        <img src={logo} alt="logo" className="h-16" />
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <h2 className="uppercase text-2xl font-semibold text-[#6F6B8B]">DashBorad</h2>
                    </div>
                    <div className="navbar-end ">
                        <div className="dropdown dropdown-end mr-6">
                            <div tabIndex={0} role="button" className=" avatar flex flex-col justify-center items-center gap-y-2">

                                <div className="w-10 rounded-full">
                                    <img alt="Tailwind CSS Navbar component" src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                                </div>
                                <span className="block text-center text-sm">Super-Admin</span>
                            </div>
                            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 right-16" style={{ left: "-24px" }}>
                                <li>
                                    <a className="justify-between">
                                        Profile
                                        <span className="badge">New</span>
                                    </a>
                                </li>
                                <li><a>Settings</a></li>
                                <li><a>Logout</a></li>
                            </ul>
                        </div>
                        <div className="flex justify-center items-center flex-col gap-y-2 cursor-pointer">
                            <RiLogoutCircleRLine className="h-10 w-10 text-[#5155a3]" />
                            <span className="block text-center text-sm">Logout</span>
                        </div>
                    </div>
                </div>
            </div>

        </header>
    )
}

export default NavBar