
import { useState } from "react";
import DataTable from "./DataTable";
import DropDown from "./DropDown";
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";


const DashboardContainer = () => {
    const [showDataTable, setShowDataTable] = useState(true);

    const handleDropDownClick = () => {
        setShowDataTable(false);
    };
    const handleShowDataTable = () => {
        setShowDataTable(true);
    }

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
        <div className="w-screen h-screen bg-[#EDEEFF] relative">
            <DropDown
                handleDropDownClick={handleDropDownClick}
                handleShowDataTable={handleShowDataTable}
                dropDown={true}
                selectedItemValue={0}
            />
            {showDataTable && <DataTable columData={columns} tableData={data} />}
        </div>
    );
};

export default DashboardContainer;
