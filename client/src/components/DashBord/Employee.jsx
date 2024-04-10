import { MdModeEditOutline } from "react-icons/md";
import { IoIosSave } from "react-icons/io";
import { IoClose } from "react-icons/io5";

const Employee = () => {
   
    return (
                <div className="bg-white w-full rounded-3xl mt-12">
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
                                    <input type="text" id="name" placeholder="Chandru" className="focus:outline-none" />
                                </div>
                            </div>
                            <div className="  w-full flex justify-between items-center">
                                <label htmlFor="Designation">Designation</label>
                                <div>
                                    <span>: </span>
                                    <input type="text" id="Designation" placeholder="Fullstack developer" className="focus:outline-none" />
                                </div>
                            </div>
                            <div className=" w-full flex justify-between items-center">
                                <label htmlFor="Salary">Salary</label>
                                <div>
                                    <span>: </span>
                                    <input type="text" id="Salary" placeholder="7000" className="focus:outline-none" />
                                </div>
                            </div>
                            <div className=" w-full flex justify-between items-center">
                                <label htmlFor="photo" className="w-1/2">Add employee photo</label>
                                <div className="w-[202px]">
                                    <span>: </span>
                                    <label htmlFor="photo" className="py-[9px] px-[47px] rounded-3xl bg-[#4886FF] cursor-pointer text-white text-sm ">Choose photo</label>
                                    <input type="file" id="photo" className="hidden" />
                                </div>
                            </div>
                            <div className=" w-full flex justify-between items-center">
                                <label htmlFor="certificates" className="w-1/2">Add certificates</label>
                                <div className="">
                                    <span>: </span>
                                    <label htmlFor="certificates" className="px-8 py-2 rounded-3xl bg-[#4886FF] cursor-pointer text-white text-sm w-full">Choose Document</label>
                                    <input type="file" id="certificates" className="hidden" />
                                </div>
                            </div>
                        </form>
                        <div className="w-1/2">
                            <p>hello</p>
                        </div>
                    </div>
                </div>
    );
};

export default Employee;
