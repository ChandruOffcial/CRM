import { Link } from "react-router-dom"
import { useFormik } from 'formik';
import { Toaster } from "react-hot-toast"
import { loginVerify } from "../../helper/ValidateLogin"


const Login = () => {
    const formik = useFormik({
        initialValues: {
            userName: '',
            password: '',
        },
        validate: loginVerify,
        validateOnBlur: false,
        validateOnChange: false,
        onSubmit: async values => {
            console.log(values)
        },
    });
    return (
        <div className="h-screen flex  justify-center items-center  bg-background relative">
            <Toaster
                position="top-center"
                reverseOrder={false} />
            <div className=" p-12 pb-24 min-w-[350px] w-2/4 flex flex-col justify-center items-center">
                <h2 className="text-center text-xl font-bold uppercase py-3 ">login</h2>
                <form className="w-[250px] md:w-[350px]  flex flex-col justify-center items-center gap-y-10 mt-5" onSubmit={formik.handleSubmit}>
                    <input type="text" className=" w-full rounded-3xl text-sm  bg-[#ADA6FB] px-5 py-3 text-center text-white font-normal focus:outline-none placeholder:text-center placeholder:text-white" placeholder="Username" onChange={formik.handleChange} value={formik.values.userName} name="userName" autoComplete="off" />

                    <input type="password" className=" w-full rounded-3xl text-sm  bg-[#ADA6FB] px-5 py-3 text-center text-white font-normal focus:outline-none placeholder:text-center placeholder:text-white" placeholder="Password" onChange={formik.handleChange} value={formik.values.password} name="password" autoComplete="off" />


                    <div className="flex justify-center items-center flex-col gap-3">
                        <button type="submit" className="inline-flex bg-btn_blue px-7 py-2 rounded-2xl text-white uppercase text-sm cursor-pointer font-semibold">Login </button>
                        <Link to="/login/forgotpassword" className="text-[#1C2468] text-sm cursor-pointer" > Forgot Password ?</Link>
                    </div>
                </form>
            </div>
            <div className="absolute flex justify-center items-center bottom-3">
                <p className="text-sm text-center md:text-lg">all rights reserved .Designed by <a className="text-[#ADA6FB] cursor-pointer" target="_blank" href="https://scratchsoftwaresolutions.com">scratch software solutions</a></p>
            </div>
        </div>
    )
}

export default Login