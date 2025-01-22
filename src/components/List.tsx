import { FC, forwardRef } from "react"
import { selectListValues } from "../constants/enum"
interface IListProps { field: string, placeHolder: string, error?: string }
const List: FC<IListProps> = forwardRef<HTMLSelectElement,IListProps>(({ field, placeHolder, error,...props },ref) => {
    const listOptions = selectListValues[field] || [];

    return (


        < div className="select-list relative" >
            <select ref={ref} {...props} name={field} className="select select-bordered w-full rounded-full focus:outline-none border-2  border-indigo-900">
                <option disabled >Select {placeHolder}</option>
                {listOptions.map((option) => (
                    <option key={option} value={option}>
                        {option}
                    </option>
                ))}
            </select>
            {
                error &&
                <small className="text-error text-sm tracking-normal absolute -bottom-5 left-3" >{error}</small>
            }
            <label
                htmlFor={field}
                className="absolute -top-2 capitalize left-4 text-indigo-950  bg-base-100 rounded-sm text-sm px-2 pointer-events-none "
            >
                {placeHolder}
            </label>
        </div >

    )
})


export default List