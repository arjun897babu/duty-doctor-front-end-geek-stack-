import { Link, useNavigate } from "react-router-dom"
import BackGroundImage from "../components/BackGroundImage"
import { SubmitButton } from "../components/Button"
import Input from "../components/Input"
import { apiEndPoint, dutyDoctorPath } from "../constants/endponts"
import { UseZodForm } from "../customhooks/UseZodForm"
import { registerSchema } from "../utils/zod-schema"
import { z } from "zod"
import { useEffect, useState } from "react"
import { serverInstance } from "../service/api"
import UseApiErrorHandler from "../customhooks/UseApiErrorHanlder"
import UseDocState from "../customhooks/UseDocState"

const initialValue: z.infer<typeof registerSchema> = { email: '', firstName: "", lastName: '' }
const Register = () => {
    const navigate = useNavigate()
    const { handleSubmit, register, setError,formState: { errors } } = UseZodForm(registerSchema, initialValue);
    function setErrorCB(key: string, message: string) {
        setError(key as keyof z.infer<typeof registerSchema>, { message })
    };
    const { setDoctorState, doctorState } = UseDocState()
    console.log(setDoctorState)

    const handleApiError = UseApiErrorHandler(setErrorCB);
    const [loading, setLoading] = useState(false);
    async function getOTP(data: z.infer<typeof registerSchema>) {
        try {
            setLoading(true)
            await serverInstance.post(apiEndPoint.sendMail, data);
            navigate(dutyDoctorPath.verify, { state: { data }, replace: true });
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
        <>
            <BackGroundImage>
                <div >

                    <h1 className="font-bold sm:text-2xl  mb-2 text-center">Welcome Doctor.! </h1>
                    <h2 className="font-bold sm:text-xl  mb-2 text-center">Register your details and start</h2>

                    <form className="flex flex-col gap-8 my-12" onSubmit={handleSubmit(getOTP)}>
                        <Input field="firstName" type='text' placeHolder='first name' error={errors?.firstName?.message} {...register('firstName')} />
                        <Input field="lastName" type='text' placeHolder="last name" error={errors?.lastName?.message} {...register('lastName')} />
                        <Input field="email" type='email' placeHolder="email" error={errors?.email?.message} {...register('email')} />
                        <SubmitButton text="Continue" loading={loading} />
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