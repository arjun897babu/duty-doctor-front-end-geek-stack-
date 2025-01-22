import BackGroundImage from "../components/BackGroundImage"
import { SubmitButton } from "../components/Button"
import { OTPInuput } from "../components/Input"

const OTPVerify = () => {
    return (
        <>
            <BackGroundImage>
                <div className="h-full flex flex-col justify-center">
                    <h1 className="text-left font-bold sm:text-2xl sm:w-[300px] mb-2">6 - digit Code</h1>
                    <span className="font-medium ">
                        Please enter the code we’ve sent to your
                        email dummyemail@gmail.com
                    </span>
                    <form action="" className="flex flex-col gap-4 mt-6">
                        <div className="otp-input-field flex gap-2 justify-between">
                            <OTPInuput />
                            <OTPInuput />
                            <OTPInuput />
                            <OTPInuput />
                            <OTPInuput />
                            <OTPInuput />
                        </div>
                        <SubmitButton text="Continue" />
                    </form>
                </div>
            </BackGroundImage>
        </>
    )
}

export default OTPVerify