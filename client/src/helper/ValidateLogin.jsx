import toast from "react-hot-toast"


/** Validate Login Page */

export async function loginVerify(values) {
    const errors = verify({}, values)
    return errors
}

/** Validate Username And Password  */

function verify(error = {}, values) {
    /** For User Name */
    if (!values.userName) {
        error.userName = toast.error("Username Required...!")
        return error;
    } else if (values.userName.includes(" ")) {
        error.userName = toast.error("Enter Vaild Username...!")
        return error;
    }


    /** For Password */
    if (!values.password) {
        error.password = toast.error("Password Required...!")
        return error;
    } else if (values.password.includes(" ")) {
        error.userName = toast.error("Enter Vaild Password...!")
        return error;
    }


}

