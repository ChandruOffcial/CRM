import toast from "react-hot-toast"

/** User Name Verify */
export async function UsernameVerify(values) {
    const errors = verifyUsername({}, values)
    return errors
}


/** UserName Verify */

function verifyUsername(error = {}, values) {
    /** For User Name */
    if (!values.userName) {
        error.userName = toast.error("Username Required...!")
        return error
    } else if (values.userName.includes(" ")) {
        error.userName = toast.error("Enter Vaild Username...!")
        return error
    }

}