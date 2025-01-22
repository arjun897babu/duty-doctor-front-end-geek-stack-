import { useEffect, useState } from "react";
import BackGroundImage from "../components/BackGroundImage"
import { SubmitButton } from "../components/Button"
import { OTPInuput } from "../components/Input"
import { useLocation, useNavigate } from "react-router-dom";
import { UseZodForm } from "../customhooks/UseZodForm";
import { OTPSchema } from "../utils/zod-schema";
import { z } from "zod";
import { apiEndPoint, dutyDoctorPath } from "../constants/endponts";
import { serverInstance } from "../service/api";
const initialValue: z.infer<typeof OTPSchema> = { email: '', otp: "" }
const OTPVerify = () => {
    const locationState = useLocation();
    const navigate = useNavigate();
    const { setValue, handleSubmit, formState: { errors } } = UseZodForm(OTPSchema, initialValue)
    const [loading, setLoading] = useState(false);

    const trackOTp = (OTP: string) => {
        setValue('otp', OTP)
    };

    useEffect(() => {
        const data = locationState?.state?.data || null
        if (!data) {
            navigate(dutyDoctorPath.register, { replace: true, state: { message: 'something went wrong.please try again' } })
            return
        }

        setValue('email', data.email)

        return () => {

            locationState.state = null
        }

    }, [])

    async function verifyOTP(data: z.infer<typeof OTPSchema>) {
        try {
            setLoading(true)
            await serverInstance.post(apiEndPoint.verifyMail, data);
            navigate(dutyDoctorPath.register2, { replace: true, state: { data: locationState.state.data } })
        } catch (error) {

        } finally {
            setLoading(false)
        }
    }
    return (
        <>
            <BackGroundImage>
                <div className="h-full flex flex-col justify-center">
                    <h1 className="text-left font-bold sm:text-2xl sm:w-[300px] mb-2">6 - digit Code</h1>
                    <span className="font-medium ">
                        Please enter the code we’ve sent to your
                        email dummyemail@gmail.com
                    </span>
                    <form action="" className="flex flex-col gap-6 mt-6" onSubmit={handleSubmit(verifyOTP)}>
                        <OTPInuput changeOTP={trackOTp} error={errors?.otp?.message} />
                        <SubmitButton text="Continue" loading={loading} />
                    </form>
                </div>
            </BackGroundImage>
        </>
    )
}

export default OTPVerify