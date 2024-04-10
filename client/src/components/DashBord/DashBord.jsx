import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import DataTable from "./DataTable";
import { useNavigate } from "react-router-dom";
import NavBar from "../Navbar/NavBar";

const DashBord = () => {
    const navigate = useNavigate()

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
            <div className="w-screen h-screen bg-[#EDEEFF] relative ">
                <div className="container mx-auto flex gap-x-3">
                    <div className="w-80 text-center py-6 hover:bg-white rounded-b-3xl bg-[#CBD0FF] hover:rounded-b-3xl font-medium text-xl cursor-pointer text-[#6F6B8B]" onClick={()=> navigate('/dashbord/employee')} >
                        Actions +
                    </div>                                         
                </div>
                 <DataTable columData={columns} tableData={data} tableHeading={'Employees'} tablePara={'Here is a list of all employees'} />
                
            </div>
    </>
  )
}

export default DashBord