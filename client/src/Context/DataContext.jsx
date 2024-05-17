import { createContext, useState } from "react";
import PropTypes from "prop-types";

const DataContext = createContext({});

export const DataProvider = ({ children }) => {
  const [showTable, setShowTable] = useState(true);
  const dropDownData = [
    {
      name: "Employee profile",
      route: "/dashbord/employee",
    },
    {
      name: "Leave details",
      route: "/dashbord/employee/leave",
    },
    {
      name: "Announcements",
      route: "/dashbord/employee/announcements",
    },
    {
      name: "Attendance",
      route: "/dashbord/employee/attendance",
    },
    {
      name: "Company documents",
      route: "/dashboard/documents",
    },
    {
      name: "Projects",
      route: "/dashboard/projects",
    },
  ];
  const handleTable = () => {
    setShowTable(!showTable);
  };
  const handleEditEmployee = (tableMeta) => {
    console.log(tableMeta);
  };

  return (
    <DataContext.Provider
      value={{
        dropDownData,
        handleTable,
        showTable,
        handleEditEmployee,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

DataProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DataContext;
