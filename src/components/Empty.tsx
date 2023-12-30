import { ClipboardText } from "@phosphor-icons/react"

export default function Empty() {
    return (
        <div className="mt-6 py-16 px-6 flex flex-col gap-4 rounded-lg border border-transparent border-t-gray-400 text-gray-300 items-center">
            <ClipboardText size={56} />            
            <span className=" flex flex-col items-center justify-center">
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </span>
        </div>
    )
}