import { ChangeEvent, FC, forwardRef, useEffect, useRef, useState } from "react";
interface InputProps {
    type: 'email' | 'text';
    field: string;
    placeHolder: string;
    error?: string;
}
const Input: FC<InputProps> = forwardRef<HTMLInputElement, InputProps>(
    (
        { type, field, placeHolder, error, ...props },
        ref
    ) => {
        return (
            <div className="input-field relative">
                <input
                    ref={ref}
                    type={type}
                    name={field}
                    id={field}
                    className="peer input rounded-full w-full border-indigo-800 border-2 focus:outline-none focus:border-indigo-950"
                    required
                    {...props}
                />
                {
                    error &&
                    <small className="text-error text-sm tracking-normal absolute -bottom-5 left-3" >{error}</small>
                }
                <label
                    htmlFor={field}
                    className={`absolute  capitalize top-0 transform -translate-y-1/2 left-4 text-indigo-950 text-sm pointer-events-none bg-base-100  ${field !== 'medicalRegistrationNumber' ? 'bg-base-100' : 'bg-indigo-950 text-white rounded-full text-xs'} px-2 py-1 font-medium`}>
                    {placeHolder}
                </label>
            </div >
        );
    });

export const OTPInuput: FC<{ changeOTP: (newOTp: string) => void,error?:string }> = ({ changeOTP,error }) => {
    const OTPLength = 6
    const [otp, setOTP] = useState(new Array(OTPLength).fill(''));

    const otpRefs = useRef<(HTMLInputElement | null)[]>(new Array(6).fill(null));

    useEffect(() => {
        if (otpRefs.current[0]) {
            otpRefs.current[0].focus();
        }
    }, []);


    function handleChange(event: ChangeEvent<HTMLInputElement>, index: number) {
        const value = event.target.value;
        if (isNaN(parseInt(value))) return;
        const newOtp = [...otp];
        newOtp[index] = value.substring(value.length - 1);
        setOTP(newOtp);

        const combinedOtp = newOtp.join("");
        if (combinedOtp.length == OTPLength) {
            changeOTP(combinedOtp)
        }

        // move to next input after a input field is filled
        if (value && index < OTPLength - 1) {
            otpRefs.current[index + 1]?.focus();
        }

    }

    function handleClick(index: number) {
        otpRefs.current[index]?.setSelectionRange(1, 1);
    }


    return (
        <div className="otp-input-field flex gap-2 justify-between relative">
            {
                otp.map((value, index) => {
                    return (
                        <input
                            ref={(input) => (otpRefs.current[index] = input)}
                            key={index}
                            type="text"
                            name='otp'
                            value={value}
                            onChange={(e) => handleChange(e, index)}
                            onClick={() => handleClick(index)}
                            className="rounded-full w-8 h-10 sm:w-12 sm:h-16 text-white bg-indigo-900 font-bold focus:outline-none border-none text-center"
                        />
                    )
                })
            }
            {
                error &&
                <small className="text-error text-sm tracking-normal absolute -bottom-5 left-3" >{error}</small>
            }
        </div>


    )
}


export default Input;
