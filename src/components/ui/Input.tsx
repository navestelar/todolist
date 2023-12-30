interface inputProperties {
    placeholder?: string
    name?: string
    id?: string
}

export default function Input({ placeholder, name, id }: inputProperties) {
    return (
        <input
            name={ name }
            id={ id }
            placeholder={ placeholder }
            className="border border-gray-700 bg-gray-500 rounded-lg p-4 w-full text-base text-gray-100 focus:outline-purple-500 placeholder:text-gray-300"
        />
    )
}