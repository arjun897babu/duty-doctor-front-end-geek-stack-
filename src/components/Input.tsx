import { FC } from "react";

const Input: FC<{ type: 'email' | 'text'; field: string, placeHolder: string }> = ({ type, field, placeHolder }) => {
    return (
        <div className="input-field relative">
            <input
                type={type}
                name={field}
                id={field}
                className="peer input rounded-full w-full border-indigo-800 border-2 focus:outline-none focus:border-indigo-950"
                required
            />
            <label
                htmlFor={field}
                className={`absolute capitalize top-1/2 left-4 text-indigo-950 text-sm pointer-events-none bg-base-100  transition-all duration-200 transform -translate-y-1/2 peer-focus:top-0 peer-focus:text-sm ${field !== 'medicalRegistrationNumber'?'peer-focus:bg-base-100':'peer-focus:bg-indigo-950 peer-focus:text-white peer-focus:rounded-full peer-focus:text-xs'} peer-focus:px-2 peer-focus:py-1 peer-focus:font-medium`}>
            {placeHolder}
        </label>
        </div >
    );
};

export const OTPInuput = () => {
    return (
        <input
            type="number"
            className="rounded-full w-8 h-10 sm:w-12 sm:h-16 text-white bg-indigo-900 font-bold focus:outline-none border-none text-center"
        />
    )
}


export default Input;
