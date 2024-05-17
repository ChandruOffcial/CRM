
import DataTable from "../DashBord/DataTable"



const Announcments = () => {
    const columns = [
        {
            name: "date",
            label: "Date",
            options: {
                filter: true,
                sort: false,
            }
        },
        {
            name: "reason",
            label: "Reason",
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
                        <p className="py-1 px-3 rounded-xl cursor-pointer bg-[#008334] shadow-md text-white">Sent</p>
                    </div>
            },
        },
    ];

    const data = [
        { date: "2024-08-15", reason: "Good Friday", state: "" },
        { date: "2024-08-11", reason: "Divali", state: "" },

    ];
    return (
        <div className="w-full">
            <div className="bg-[#D8DAFA] rounded-md mt-5">
                <DataTable columData={columns} tableData={data} tableHeading={'Announcements'} />

            </div>
        </div>
    )
}

export default Announcments