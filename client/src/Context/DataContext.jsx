import { createContext, useState } from "react";
import PropTypes from 'prop-types';

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
    const [showTable, setShowTable] = useState(true)
    const dropDownData = [
        {
            name: 'Employee profile',
            route: '/dashboard/employee'
        }, {
            name: 'Leave details',
            route: '/dashboard/leave'
        }, {
            name: 'Announcements',
            route: '/dashboard/announcements'
        }, {
            name: 'Attendance',
            route: '/dashboard/attendance'
        }, {
            name: 'Company documents',
            route: '/dashboard/documents'
        }, {
            name: 'Projects',
            route: '/dashboard/projects'
        }
    ];
    const handleTable =()=>{
        setShowTable(!showTable)
    }

    return (
        <DataContext.Provider value={{
            dropDownData,handleTable,showTable
        }}>
            {children}
        </DataContext.Provider>
    );
};

DataProvider.propTypes = {
    children: PropTypes.node.isRequired 
};

export default DataContext;
