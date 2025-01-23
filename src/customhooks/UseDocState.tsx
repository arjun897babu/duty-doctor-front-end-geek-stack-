import { useContext } from "react";
import { DoctorContext, DoctorContextType } from "../context/Context";

const UseDocState = (): DoctorContextType => {
    const doctor = useContext(DoctorContext)
    if (!doctor) {
        throw Error('context not available in this child')
    }
    return doctor
}

export default UseDocState