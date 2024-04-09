import { Outlet } from "react-router-dom"
import NavBar from "../components/Navbar/NavBar"
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import DropDown from "../components/DashBord/DropDown";
import DataTable from "../components/DashBord/DataTable";

import DataProvide from '../Context/DataContext'
import { useContext } from "react";

const Dashbord = () => {
   
    const {  showTable }= useContext(DataProvide)  
   

    const columns = [
        {
            name: "name",
            label: "Employees Name",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "company",
            label: "Email Address",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "city",
            label: "Role",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "state",
            label: "Action",
            options: {
                filter: true,
                sort: false,
                customBodyRender: () =>
                    <div className="flex gap-5 justify-center items-center  ">
                        <FaEdit className="text-blue-600 h-6 w-6" />
                        <MdDelete className="text-red-600 h-7 w-7" />
                    </div>
            },
        },
    ];

    const data = [
        { name: "Joe James", company: "Test Corp", city: "Yonkers", state: "" },
        { name: "John Walsh", company: "Test Corp", city: "Hartford", state: "" },
        { name: "Bob Herm", company: "Test Corp", city: "Tampa", state: "" },
        { name: "James Houston", company: "Test Corp", city: "Dallas", state: "" },
    ];

    return (
        <>            
                <NavBar  />
                <div className="w-screen h-screen bg-[#EDEEFF] relative">
                    <div className="container mx-auto flex justify-between   ">
                        <DropDown />
                        {showTable && <DataTable columData={columns} tableData={data} tableHeading={'Employees'} tablePara={'Here is a list of all employees'} />}

                        <Outlet />
                    </div>
                </div>            
        </>
    )
}

export default Dashbord