import { useState } from 'react'
import Task from './components/Task'
import Input from './components/ui/Input'
import Logo from "./assets/Logotipo.png"
import { PlusCircle } from "@phosphor-icons/react"
import Empty from './components/Empty'

interface ITask {
  id: number
  content: string
  isChecked: boolean
}

export default function App() {
  const [tasks, setTasks] = useState<ITask[]>([
    // {
    //   id: 1,
    //   content: "Task1",
    //   isChecked: false
    // },
    // {
    //   id: 2,
    //   content: "Task2",
    //   isChecked: true
    // }
  ])

  return (
    <div className='h-screen bg-gray-600 flex flex-col items-center'>
      <header className='flex justify-center items-center bg-gray-700 w-full h-[12.5rem]'>
        <h1>
          <img src={ Logo } />
        </h1>
      </header>
      <main className='w-full max-w-[46rem]'>
        <div className='flex gap-2 mt-[-30px]'>
          <Input placeholder='Adicione uma nova tarefa' />
          <button className='flex items-center bg-blue-600 gap-2 rounded-lg text-gray-100 font-bold p-4 hover:bg-blue-400 transition-all ease-in-out duration-300'>
            Criar
            <PlusCircle size={16} />
          </button>
        </div>
        <article className='mt-12'>
          <div className='flex items-center justify-between text-bold'>
            <div className='flex gap-[0.5rem]'>
              <strong className='text-blue-400 text-[0.875rem]'>Tarefas criadas</strong>
              <span className='py-[2px] px-2 rounded-full bg-gray-400 text-gray-200 text-[0.75rem]'>{ tasks.length }</span>
            </div>
            <div className='flex gap-[0.5rem]'>
              <strong className='text-purple-300 text-[0.875rem]'>Concluídas</strong>
              <span className='py-[2px] px-2 rounded-full bg-gray-400 text-gray-200 text-[0.75rem]'>{ tasks.length }</span>
            </div>
          </div>
          {tasks.length > 0 ? (
            <div className="flex flex-col gap-3">
              {tasks.map(task => 
                <Task 
                  content={ task.content }
                  checked={ task.isChecked }
                />
              )}
            </div>
          ) : (
            <Empty />
          )}
        </article>
      </main>
    </div>
  )
}