import { FC } from "react"
import { selectListValues } from "../constants/enum"

const List: FC<{ field: string, placeHolder: string}> = ({ field, placeHolder }) => {
    const listOptions = selectListValues[field] || [];

    return (


        < div className="select-list relative" >
            <select className="select select-bordered w-full rounded-full focus:outline-none border-2  border-indigo-900">
                <option disabled selected>Select {placeHolder}</option>
                {listOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            <label
                htmlFor={field}
                className="absolute -top-2 capitalize left-4 text-indigo-950  bg-base-100 rounded-sm text-sm px-2 pointer-events-none "
            >
                {placeHolder}
            </label>
        </div >

    )
}

export default List