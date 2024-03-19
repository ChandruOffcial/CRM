import toast from "react-hot-toast"

export async function verifyPWD(values) {

    const errors = validatePWD({}, values)
    return errors
}


function validatePWD(error = {}, values) {

    if (!values.newPassword) {
        error.newPassword = toast.error("Enter Password...!");
        return error
    } else if (values.newPassword.length < 6) {
        error.newPassword = toast.error("Password must be at least 6 characters long...!");
        return error
    }

    if (!values.confirm_pwd) {
        error.confirm_pwd = toast.error("Enter Confirm Password...!");
        return error
    }

    if (values.newPassword !== values.confirm_pwd) {
        error.confirm_pwd = toast.error("Passwords do not match...!");
        return error
    }


}