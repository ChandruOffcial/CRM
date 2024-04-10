import MUIDataTable from "mui-datatables";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import PropTypes from 'prop-types';


const DataTable = ({ columData, tableData, tableHeading, tablePara }) => {
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
                    <h2 className="font-semibold text-xl text-center mb-2">{tableHeading}</h2>
                    <p className="text-center">{tablePara}</p>
                </div>
                <div className="w-full">
                    <ThemeProvider theme={getMuiTheme()}>
                        <MUIDataTable
                            data={tableData}
                            columns={columData}
                            options={options}
                        />
                    </ThemeProvider>
                </div>
            </div>
        </div>
    )

}
DataTable.propTypes = {
    columData: PropTypes.array.isRequired,
    tableData: PropTypes.array.isRequired,
    tableHeading: PropTypes.string,
    tablePara: PropTypes.string
};

export default DataTable