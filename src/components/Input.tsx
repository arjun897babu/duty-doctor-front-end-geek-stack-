import { FC } from "react";

const Input: FC<{ type: 'email' | 'text'; field: string }> = ({ type, field }) => {
    return (
        <div className="input-field relative">
            <input
                type={type}
                name={field}
                id={field}
                className="peer input rounded-2xl w-full border-indigo-800 focus:outline-none focus:border-indigo-950"
                required
            />
            <label
                htmlFor={field}
                className="absolute top-1/2 left-2 text-indigo-950 text-lg pointer-events-none transition-all duration-200 transform -translate-y-1/2 peer-focus:top-0 peer-focus:text-sm peer-focus:bg-white peer-focus:px-2 peer-focus:py-1 peer-focus:font-medium "
            >
                {field}
            </label>
        </div>
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
