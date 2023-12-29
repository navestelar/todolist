interface inputProperties {
    placeholder?: string
}

export default function Input({ placeholder }: inputProperties) {
    return (
        <input placeholder={ placeholder } />
    )
}