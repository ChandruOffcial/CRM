
import ThemeButton from "../../assets/Theme/Button";
import DataTable from "./DataTable";


const EmployeDetails = () => {
    const columns = [
        {
            name: "name",
            label: "User ID",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "company",
            label: "User Name",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "city",
            label: "Email-ID",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "designation",
            label: "Designation",
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
                        <ThemeButton variant="contained">View</ThemeButton>
                        <ThemeButton variant="contained" color="error">Delete</ThemeButton>
                    </div>
            },
        },
    ];

    const data = [
        { name: "User_1", company: "Jebin", city: "text@gmail.com", designation: 'PHP developer', state: "" },
        { name: "User_2", company: "Chandru", city: "text@gmail.com", designation: 'Full stack developer', state: "" },
        { name: "User_3", company: "Justin", city: "text@gmail.com", designation: 'Graphic designer', state: "" },
        { name: "User_4", company: "Reegan", city: "text@gmail.com", designation: 'UI developer', state: "" },
    ];

  return (
    <DataTable columData={columns} tableData={data} />  
  )
}

export default EmployeDetails