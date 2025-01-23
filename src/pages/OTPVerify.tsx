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
import UseApiErrorHandler from "../customhooks/UseApiErrorHanlder";
import { IDoctorAuthResponse } from "../constants/types";
import UseDocState from "../customhooks/UseDocState";
const initialValue: z.infer<typeof OTPSchema> = { email: '', otp: "" }
const OTPVerify = () => {
    const locationState = useLocation();
    const navigate = useNavigate();
    const { setValue, handleSubmit, setError, formState: { errors } } = UseZodForm(OTPSchema, initialValue);
    function setErrorCB(key: string, message: string) {
        setError(key as keyof z.infer<typeof OTPSchema>, { message })
    };

    const handleApiError = UseApiErrorHandler(setErrorCB);
    const { setDoctorState, doctorState } = UseDocState()

    const [loading, setLoading] = useState(false);

    const trackOTp = (OTP: string) => {
        setValue('otp', OTP)
    };

    useEffect(() => {
        if (doctorState.isAuthed) {
            navigate(dutyDoctorPath.home, { replace: true })
        }
    }, [doctorState]);

    useEffect(() => {
        const data = locationState?.state?.data || null
        if (!data) {
            navigate(dutyDoctorPath.login, { replace: true, state: { message: 'something went wrong.please try again' } })
            return
        }

        setValue('email', data.email)

        return () => {

            locationState.state = null
        }

    }, []);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate(dutyDoctorPath.login, {
                replace: true,
                state: { message: 'Please try again.' },
            });
        }, 2 * 60 * 1000);

        return () => {
            clearTimeout(timer);
            locationState.state = null;
        };
    }, [])

    async function verifyOTP(data: z.infer<typeof OTPSchema>) {
        try {
            setLoading(true)
            const state = locationState?.state?.data || null;
            let endpoint = state.login ? apiEndPoint.login : apiEndPoint.verifyMail
            let navigationPath = state.login ? dutyDoctorPath.home : dutyDoctorPath.register2

            const response: IDoctorAuthResponse = (await serverInstance.post(endpoint, data)).data;
            if (state.login) {
                setDoctorState((prev) => ({ ...prev, isAuthed: true, token: response.data.token }));
            }

            navigate(navigationPath, { replace: true, state: { data: locationState.state.data } })
        } catch (error) {
            handleApiError(error)
        } finally {
            setLoading(false)
        }
    }
    if (doctorState.isAuthed) return
    return (
        <>
            <BackGroundImage>
                <div className="h-full flex flex-col justify-center">
                    <h1 className="text-left font-bold sm:text-2xl sm:w-[300px] mb-2">6 - digit Code</h1>
                    <span className="font-medium ">
                        Please enter the code we’ve sent to your
                        email dummyemail@gmail.com
                    </span>
                    <form action="" className="flex flex-col gap-8 mt-6" onSubmit={handleSubmit(verifyOTP)}>
                        <OTPInuput changeOTP={trackOTp} error={errors?.otp?.message} />
                        <SubmitButton text="Continue" loading={loading} />
                    </form>
                </div>
            </BackGroundImage>
        </>
    )
}

export default OTPVerify