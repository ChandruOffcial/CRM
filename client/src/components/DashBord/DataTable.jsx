import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";

export const DataTable = () => {
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

    const options = {
        search: false,
        download: false,
        print: false,
        viewColumns: false,
        filter: false,
        selectableRows: 'none',
        rowsPerPage: 5,
        rowsPerPageOptions: [5, 10],
        elevation: 0

    };

    // Define custom theme
    const getMuiTheme = () =>
        createTheme({
            palette: {
                background: {
                    paper: 'transparent'
                },
                mode: "light"
            },
            components: {
                MuiTableCell: {
                    root: {
                        padding: "10px",
                    },
                    styleOverrides: {
                        head: {
                            padding: "10px",
                            textAlign: "center",
                            backgroundColor: "#ADA6FB"
                        },
                        body: {
                            textAlign: "center",
                        },
                        footer: {
                            borderBottom: "none"

                        }

                    }
                },
                MUIDataTableBodyRow: {
                    styleOverrides: {
                        root: {
                            borderTop: "10px solid #EDEEFF",
                            backgroundColor: "#FFF"
                        }
                    }
                }
            }
        });


    return (
        <div className="container mx-auto">
            <div className="flex justify-center items-center flex-col">
                <div className="mb-10">
                    <h2 className="font-semibold text-xl text-center mb-2">Employees</h2>
                    <p className="text-center">Here is a list of all employees</p>
                </div>
                <div className="w-full">
                    <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable

                            data={data}
                            columns={columns}
                            options={options}
                        />
                    </ThemeProvider>
                </div>

            </div>

        </div>
    )
}
