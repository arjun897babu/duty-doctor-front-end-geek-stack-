import { FC } from "react"

const SubmitButton: FC<{ text: string, loading: boolean }> = ({ text, loading }) => {
    return (
        <>
            <button
                className="btn rounded-2xl bg-indigo-900 text-white hover:bg-indigo-950">
                {
                    !loading ?
                        text :
                        <span className="loading loading-spinner loading-lg"></span>
                }
            </button>
        </>
    )
}


export { SubmitButton }
