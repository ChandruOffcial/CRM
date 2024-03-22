
import { useFormik } from 'formik';
import { Toaster } from "react-hot-toast"
import { UsernameVerify } from "../../helper/ValidateUsername"
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import bgImage from "../../assets/bg.png";


const Forgotpassword = () => {
    const navigate = useNavigate();
    const bg_style = {
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    };
    const formik = useFormik({
        initialValues: {
            userName: '',

        },
        validate: UsernameVerify,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await axios.post(`/api/forgotPassword`, values)
                toast.success(response.data.message);
                resetForm();
                setTimeout(() => {
                    navigate('/login/verification')
                }, 1000)

            } catch (error) {
                if (error.response) {
                    toast.error(error.response.data.error);
                } else {
                    console.error('An unexpected error occurred:', error);
                }
            }
        },
    })
    return (
        <div className="h-screen flex  justify-center items-center  bg-background relative" style={bg_style}>
            <Toaster
                position="top-center"
                reverseOrder={false} />
            <div className=" p-12 pb-24 min-w-[350px] w-2/4 flex flex-col justify-center items-center">
                <h2 className="text-center text-xl font-bold uppercase py-3 ">FORGOT PASSWORD</h2>
                <form className="w-[250px] md:w-[350px]  flex flex-col justify-center items-center gap-y-10 mt-5" onSubmit={formik.handleSubmit}>
                    <label htmlFor="userName" className='font-semibold'>Enter your USER ID</label>
                    <input type="text" className=" w-full rounded-3xl text-sm  bg-[#ADA6FB] px-5 py-3 text-center text-white font-normal focus:outline-none placeholder:text-center placeholder:text-white" placeholder="Username" onChange={formik.handleChange} value={formik.values.userName} autoComplete="off" id='userName' />


                    <div className="flex justify-center items-center flex-col gap-3">
                        <button type="submit" className="inline-flex bg-btn_blue px-7 py-2 rounded-2xl text-white uppercase text-sm cursor-pointer font-semibold">Submit </button>
                    </div>
                </form>
            </div>
            <div className="absolute flex justify-center items-center bottom-3">
                <p className="text-sm text-center md:text-lg">all rights reserved .Designed by <a className="text-[#ADA6FB] cursor-pointer" target="_blank" href="https://scratchsoftwaresolutions.com">scratch software solutions</a></p>
            </div>
        </div>
    )

}

export default Forgotpassword