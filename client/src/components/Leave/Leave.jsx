
import DataTable from "../DashBord/DataTable"



const Leave = () => {
  const columns = [
    {
      name: "USID",
      label: "User ID",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "name",
      label: "Employees Name",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "date",
      label: "Leave applied For",
      options: {
        filter: true,
        sort: false,
      }
    },
    {
      name: "time",
      label: "Time",
      options: {
        filter: true,
        sort: false,

      }
    },

    {
      name: "blanceLeave",
      label: "Blance Leave",
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
            <p className="py-1 px-3 rounded-xl cursor-pointer bg-[#008334] shadow-md text-white">Approve</p>
            <p className="py-1 px-3 rounded-xl cursor-pointer bg-[#FF4848] shadow-md text-white">Reject</p>
          </div>
      },
    },
  ];

  const data = [
    { USID: "SSS1", name: "Joe James", date: "2024-08-15", time: "Full", blanceLeave: "14", state: "" },
    { USID: "SSS2", name: "Jebin", date: "2024-08-11", time: "5hrs", blanceLeave: "14", state: "" },
    { USID: "SSS3", name: "Anish", date: "2024-08-12", time: "Full", blanceLeave: "14", state: "" },
    { USID: "SSS4", name: "Adom", date: "2024-08-14", time: "3hrs", blanceLeave: "14", state: "" },
    { USID: "SSS1", name: "Joe James", date: "2024-08-15", time: "Full", blanceLeave: "14", state: "" },
    { USID: "SSS2", name: "Jebin", date: "2024-08-11", time: "5hrs", blanceLeave: "14", state: "" },
    { USID: "SSS3", name: "Anish", date: "2024-08-12", time: "Full", blanceLeave: "14", state: "" },
    { USID: "SSS4", name: "Adom", date: "2024-08-14", time: "3hrs", blanceLeave: "14", state: "" },
    { USID: "SSS1", name: "Joe James", date: "2024-08-15", time: "Full", blanceLeave: "14", state: "" },
    { USID: "SSS2", name: "Jebin", date: "2024-08-11", time: "5hrs", blanceLeave: "14", state: "" },
    { USID: "SSS3", name: "Anish", date: "2024-08-12", time: "Full", blanceLeave: "14", state: "" },
    { USID: "SSS4", name: "Adom", date: "2024-08-14", time: "3hrs", blanceLeave: "14", state: "" },
  ];
  return (
    <div className="w-full">
      <div className="bg-[#D8DAFA] rounded-md mt-5">
        <DataTable columData={columns} tableData={data} tableHeading={'Leave Request'} />

      </div>
    </div>
  )
}

export default Leave