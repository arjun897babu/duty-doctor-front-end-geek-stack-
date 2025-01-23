import { Link, useNavigate } from "react-router-dom"
import BackGroundImage from "../components/BackGroundImage"
import { SubmitButton } from "../components/Button"
import Input from "../components/Input"
import { apiEndPoint, dutyDoctorPath } from "../constants/endponts"
import { useEffect, useState } from "react"
import { UseZodForm } from "../customhooks/UseZodForm"
import { emailSchema } from "../utils/zod-schema"
import { z } from "zod"
import { serverInstance } from "../service/api"
import UseApiErrorHandler from "../customhooks/UseApiErrorHanlder"
import UseDocState from "../customhooks/UseDocState"

const Login = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()
    const { register, handleSubmit, setError, formState: { errors } } = UseZodForm(emailSchema, { email: '' });

    function setErrorCB(key: string, message: string) {
        setError(key as keyof z.infer<typeof emailSchema>, { message })
    };
    const { setDoctorState, doctorState } = UseDocState()
    console.log(setDoctorState)
    const handleApiError = UseApiErrorHandler(setErrorCB);

    async function getOTP(data: z.infer<typeof emailSchema>) {
        try {
            setLoading(true)
            await serverInstance.post(apiEndPoint.getOTP, data)
            navigate(dutyDoctorPath.verify, { replace: true, state: { data: { email: data.email, login: true } } })
        } catch (error) {
            handleApiError(error)
        } finally {
            setLoading(false)

        }
    }

    useEffect(() => {
        if (doctorState.isAuthed) {
            navigate(dutyDoctorPath.home, { replace: true })
        }
    }, [doctorState]);

    if (doctorState.isAuthed) return

    return (
        <BackGroundImage>
            <div className="mb-10">
                <h2 className="sm:text-2xl font-bold leading-6 text-indigo-950 text-center" >Welcome to Duty Doctor 👋 </h2>
                <p className="text-center text-base-300 font-medium leading-7 ">Sign in to your account</p>
            </div>
            <div>
                <h3 className="text-left font-bold sm:text-2xl sm:w-[300px] mb-2">Enter your email address
                    to get OTP</h3>
                <form className="flex flex-col gap-6 mt-8" onSubmit={handleSubmit(getOTP)} >
                    <Input field="email" type="email" placeHolder="email" {...register('email')} error={errors?.email?.message} />
                    <SubmitButton text="Get OTP" loading={loading} />
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