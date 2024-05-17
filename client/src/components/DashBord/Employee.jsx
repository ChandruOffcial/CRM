import { MdModeEditOutline } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { IoClose } from "react-icons/io5";
import { useState } from "react";
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo/DemoContainer';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';


const Employee = () => {

    const [value, setValue] = useState(dayjs());    
    return (
        <div className="bg-slate-50 w-full rounded-3xl mt-12">
            {/* Buuton */}
            <div className="flex justify-end items-end ">
                <div className="flex justify-center items-center w-16 h-16 bg-[#EEEEEE] rounded-bl-3xl border-r-2 border-zinc-300 cursor-pointer">
                    <MdModeEditOutline className="h-8 w-8 text-[#29538d]" />
                </div>
                <div className="flex justify-center items-center w-16 h-16 bg-[#EEEEEE] border-r-2 border-zinc-300 cursor-pointer">
                    <IoIosSave className="h-8 w-8 text-[#29538d]" />
                </div>
                <div className="flex justify-center items-center w-16 h-16 bg-[#EEEEEE] rounded-tr-3xl cursor-pointer">
                    <IoClose className="h-9 w-9 text-[#29538d]" />
                </div>
            </div>

            {/* Form */}
            <div className="flex">
                <form className="px-16 flex flex-col justify-start items-start gap-8 mt-16 w-1/2 mb-16">
                    <div className=" w-full flex justify-between items-center">
                        <label htmlFor="name">Name</label>
                        <div>
                            <span>: </span>
                            <input type="text" id="name" placeholder="Chandru" className="focus:outline-none bg-slate-50" />
                        </div>
                    </div>
                    <div className="  w-full flex justify-between items-center">
                        <label htmlFor="Designation">Designation</label>
                        <div>
                            <span>: </span>
                            <input type="text" id="Designation" placeholder="Fullstack developer" className="focus:outline-none bg-slate-50" />
                        </div>
                    </div>
                    <div className=" w-full flex justify-between items-center">
                        <label htmlFor="Salary">Salary</label>
                        <div>
                            <span>: </span>
                            <input type="text" id="Salary" placeholder="7000" className="focus:outline-none bg-slate-50" />
                        </div>
                    </div>
                    <div className=" w-full flex justify-between items-center">
                        <label htmlFor="photo" className="w-1/2">Add employee photo</label>
                        <div className="w-[210px]">
                            <span>: </span>
                            <label htmlFor="photo" className="py-[9px] px-[47px] rounded-3xl bg-[#4886FF] cursor-pointer text-white text-sm ">Choose photo</label>
                            <input type="file" id="photo" className="hidden" />
                        </div>
                    </div>
                    <div className=" w-full flex justify-between items-center">
                        <label htmlFor="certificates" className="w-1/2">Add certificates</label>
                        <div className="flex gap-[10px]">
                            <span>: </span>
                            <div>
                                <label htmlFor="certificates" className="px-8 py-2 rounded-3xl bg-[#4886FF] cursor-pointer text-white text-sm w-full">Choose Document</label>
                                <p className="text-[10px] mt-3 pl-7">(maximum 3 documents)</p>
                            </div>
                            <input type="file" id="certificates" className="hidden" />
                        </div>
                    </div>
                </form>
                <div className="px-16 flex flex-col justify-start items-start gap-8 mt-16 w-1/2 mb-16">
                    <p className="font-normal md:pl-5">ID: 2001</p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <DemoContainer components={['DateCalendar']}>
                            <DateCalendar value={value} onChange={(newValue) => setValue(newValue)} />
                        </DemoContainer>
                    </LocalizationProvider>
                </div>
            </div>

            {/* Duration */}
            <div className="flex justify-end mb-10">
                <div className="w-4/5 grid grid-cols-2 gap-y-6">
                    <div className="flex justify-around items-center w-96">
                        <p className="text-sm">Duration</p>
                        <div className="flex justify-center items-center text-sm bg-white px-8 py-1 rounded-sm">
                            216
                        </div>
                        <p className="text-[10px]">(in hours)</p>
                    </div>
                    <div className="flex justify-around items-center w-96">
                        <p className="text-sm">Duration</p>
                        <div className="flex justify-center items-center text-sm bg-white px-8 py-1 rounded-sm">
                            216
                        </div>
                        <p className="text-[10px]">(in Days)</p>
                    </div>
                    <div className="flex justify-around items-center w-96">
                        <p className="text-sm px-3">Leave</p>
                        <div className="flex justify-center items-center text-sm bg-white px-8 py-1 rounded-sm">
                            216
                        </div>
                        <p className="text-[10px]">(in hours)</p>
                    </div>
                    <div className="flex justify-around items-center w-96">
                        <p className="text-sm px-3">Leave</p>
                        <div className="flex justify-center items-center text-sm bg-white px-8 py-1 rounded-sm">
                            216
                        </div>
                        <p className="text-[10px]">(in Days)</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Employee;
