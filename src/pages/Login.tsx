import { Link } from "react-router-dom"
import BackGroundImage from "../components/BackGroundImage"
import { SubmitButton } from "../components/Button"
import Input from "../components/Input"
import { dutyDoctorPath } from "../constants/endponts"
import { useState } from "react"

const Login = () => {
        const [loading, setLoading] = useState(false);
    
    return (
        <BackGroundImage>
            <div className="mb-10">
                <h2 className="sm:text-2xl font-bold leading-6 text-indigo-950 text-center" >Welcome to Duty Doctor 👋 </h2>
                <p className="text-center text-base-300 font-medium leading-7 ">Sign in to your account</p>
            </div>
            <div>
                <h3 className="text-left font-bold sm:text-2xl sm:w-[300px] mb-2">Enter your email address
                    to get OTP</h3>
                <form className="flex flex-col gap-5 mt-8" >
                    <Input field="email" type="email" placeHolder="email"/>
                    <SubmitButton text="Get OTP" loading={loading}/>
                </form>

                <p className="text-sm font-normal leading-4 text-left mt-3 mb-4">
                    By clicking, I accept the <span className="underline cursor-pointer">terms of service</span> and <span className="underline cursor-pointer">privacy policy</span>.
                </p>
                <p className="text-center text-sm">
                    If you don’t have an account?
                    <Link to={dutyDoctorPath.register}>
                        <span className="cursor-pointer text-indigo-950 font-medium"> Register Now</span>
                    </Link>
                </p>

            </div>

        </BackGroundImage>
    )
}

export default Login