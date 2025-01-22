import { FC } from "react"

const SubmitButton: FC<{ text: string }> = ({ text }) => {
    return (
        <>
            <button className="btn rounded-2xl bg-indigo-900 text-white hover:bg-indigo-950">{text}</button>
        </>
    )
}


export { SubmitButton }
