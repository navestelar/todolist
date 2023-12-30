import { Checkbox } from "@mui/material"
import { Trash } from '@phosphor-icons/react'
import CheckboxChecked from "../assets/CheckboxChecked.svg"
import CheckboxUnchecked from "../assets/CheckboxUnchecked.svg"

interface taskProperties {
    content: string
    checked: boolean
}

export default function Task({ content, checked }: taskProperties) {
    return (
        <div className="p-4 border border-gray-500 bg-gray-500 w-full rounded-lg flex justify-between items-start">
            <label className={`cursor-pointer text-[0.875rem] ${checked ? 'text-gray-300 line-through' : 'text-gray-100'}`}>
                <Checkbox
                    icon={<img src={ CheckboxUnchecked } />}
                    checkedIcon={<img src={ CheckboxChecked } />}
                />
                { content }
            </label>
            <button className="transition-all ease-in-out duration-300 p-1 rounded-md text-gray-300 hover:text-red-400 hover:bg-gray-400">
                <Trash size={18} />
            </button>
        </div>
    )
}