
import { useState } from "react";
import { DataTable } from "./DataTable";
import DropDown from "./DropDown";


const DashboardContainer = () => {
    const [showDataTable, setShowDataTable] = useState(true);

    const handleDropDownClick = () => {
        setShowDataTable(false);
    };
    const handleShowDataTable = () => {
        setShowDataTable(true);
    }
    return (
        <div className="w-screen h-screen bg-[#EDEEFF] relative">
            <DropDown handleDropDownClick={handleDropDownClick} handleShowDataTable={handleShowDataTable} />
            {showDataTable && <DataTable />}
        </div>
    );
};

export default DashboardContainer;
