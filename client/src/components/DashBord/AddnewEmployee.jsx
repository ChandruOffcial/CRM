import Button from '@mui/material/Button';

const AddnewEmployee = () => {
  return (
    <div className="my-10 mx-3 rounded-xl px-8 py-5 bg-white w-full">
        <h3 className="text-blue-500 text-xl mb-10">Add new Employee</h3>

        <div className="grid grid-cols-2 gap-y-9">            
            <div className="flex w-96 float-start ">
                <p className="w-40">Name</p>
                <p>: Chandru</p>
            </div>
            <div className="flex w-96 float-start gap-x-28">
                <p>User ID</p>
                <p>: SSS031</p>
            </div>
            <div className="flex w-96 float-start ">
                <p className="w-40">Designation</p>
                <p>: Fullstack developer</p>
            </div>
            <div className="flex w-96 float-start gap-x-28">
                <p>Mail ID</p>
                <p>: SSS031</p>
            </div>
        </div>
        <div className="flex justify-center items-center flex-col mt-10 gap-y-4">
            <Button variant="contained">Save Details</Button>
            <Button variant="contained">Close</Button>
        </div>
    </div>
  )
}

export default AddnewEmployee