import { FC } from "react"

const SubmitButton: FC<{ text: string, loading: boolean }> = ({ text, loading }) => {
    return (
        <>
            <button
                className="btn rounded-2xl bg-indigo-900 text-white hover:bg-indigo-950">
                {
                    !loading ?
                        text :
                        <span className="loading loading-spinner loading-sm"></span>
                }
            </button>
        </>
    )
}

const ActionButton: FC<{ text: string, loading?: boolean }> = ({ text, loading }) => {
    return (
        <>
            <button
                className="btn rounded-full capitalize text-base  bg-indigo-900 text-white hover:bg-indigo-950">
                {
                    !loading ?
                        text :
                        <span className="loading loading-spinner loading-sm"></span>
                }
            </button>
        </>
    )
}

const Callbutton: FC<{ text: string, loading?: boolean }> = ({ text, loading }) => {
    return (
        <>
            <button
                className="btn rounded-full capitalize text-base bg-white text-indigo-900 hover:bg-base-200 ">
                {
                    !loading ?
                        text :
                        <span className="loading loading-spinner loading-sm"></span>
                }
            </button>
        </>
    )
}





export { SubmitButton, ActionButton, Callbutton }
