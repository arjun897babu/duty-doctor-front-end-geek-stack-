import { Link } from "react-router-dom"
import BackGroundImage from "../components/BackGroundImage"
import { SubmitButton } from "../components/Button"
import Input from "../components/Input"
import { dutyDoctorPath } from "../constants/endponts"

const Register = () => {
    return (
        <>
            <BackGroundImage>
                <div >

                    <h1 className="font-bold sm:text-2xl  mb-2 text-center">Welcome Doctor.! </h1>
                    <h2 className="font-bold sm:text-xl  mb-2 text-center">Register your details and start</h2>

                    <form className="flex flex-col gap-8 my-12">
                        <Input field="firstName" type='text' placeHolder='first name' />
                        <Input field="lastName" type='text' placeHolder="last name" />
                        <Input field="email" type='email' placeHolder="email" />
                        <SubmitButton text="Continue" />
                    </form>
                    <p className="text-center text-sm">
                        Do you have an account? <Link to={dutyDoctorPath.login} className="cursor-pointer text-indigo-950 font-medium"> Login</Link>
                    </p>
                </div>
            </BackGroundImage>
        </>
    )
}

export default Register