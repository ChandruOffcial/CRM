import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import DataTable from "./DataTable";
import { useContext } from "react";
import DataContext from "../../Context/DataContext";


const Employees = () => {
    const {handleEditEmployee } = useContext(DataContext)
    
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
                customBodyRender: (value, tableMeta) =>
                    <div className="flex gap-5 justify-center items-center  ">
                        <FaEdit className="text-blue-600 h-6 w-6 cursor-pointer" onClick={() => handleEditEmployee(tableMeta)} />
                        <MdDelete className="text-red-600 h-7 w-7 cursor-pointer" />
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
    return <DataTable columData={columns} tableData={data} tableHeading={'Employees'} tablePara={'Here is a list of all employees'} />     
    
};

export default Employees;
