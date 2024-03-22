import { useFormik } from 'formik';
import toast, { Toaster } from "react-hot-toast"
import bgImage from "../../assets/bg.png";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';



const VerifyOTP = () => {
    const navigate = useNavigate();

    const bg_style = {
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: 'center',
        backgroundSize: 'contain',
        backgroundRepeat: 'no-repeat'
    };
    function OTPVerify(values) {
        const errors = verifyOTP({}, values)
        return errors
    }


    /** UserName Verify */

    function verifyOTP(error = {}, values) {
        /** For User Name */
        if (!values.OTP) {
            error.userName = toast.error("Enter OTP...!")
        } else if (!/^\d{6}$/.test(values.OTP)) {
            error.OTP = toast.error("Enter a valid 6-digit OTP...!");
        }
        return error
    }


    const formik = useFormik({
        initialValues: {
            OTP: '',

        },
        validate: OTPVerify,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async (values, { resetForm }) => {
            const response = await axios.post(`/api/verifyOTP`, values)
            toast.success(response.data.message);
            resetForm();
            setTimeout(() => {
                navigate('/login/newpassword')
            }, 1000)

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
                    <label htmlFor="OTP" className='font-semibold'>Enter your OTP</label>
                    <input type="number" className=" w-full rounded-3xl text-sm  bg-[#ADA6FB] px-5 py-3 text-center text-white font-normal focus:outline-none placeholder:text-center placeholder:text-white" placeholder="OTP" onChange={formik.handleChange} value={formik.values.OTP} autoComplete="off" id='OTP' />


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

export default VerifyOTP