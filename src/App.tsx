  import { FormEvent, useState } from 'react'
  import Logo from "./assets/Logotipo.png"
  import { DotsSixVertical, PlusCircle } from "@phosphor-icons/react"
  import Empty from './components/Empty'
  import { Checkbox } from '@mui/material'
  import { Trash } from '@phosphor-icons/react'
  import CheckboxChecked from "./assets/CheckboxChecked.svg"
  import CheckboxUnchecked from "./assets/CheckboxUnchecked.svg"
  import { v4 as id } from 'uuid'
  import ScrollWrapper from './components/ui/scrollArea/ScrollWrapper'
  import { Reorder } from 'framer-motion'

  type Task = {
    id: string
    content: string
    isChecked: boolean
  }

  type Tasks = {
    [taskId: string]: Task
  }

  export default function App() {
    const [tasks, setTasks] = useState<Tasks>({})

    const [newTask, setNewTask] = useState('')

    const [tasksKeys, setTasksKeys] = useState(Object.keys(tasks) as string[])

    const isNewTaskEmpty = newTask.length === 0

    function handleAddTask(event: FormEvent) {
      event.preventDefault()

      if (!isNewTaskEmpty && !tasks[newTask]) {
        const taskId = id()
    
        setTasks((prevTasks) => ({
          [newTask]: {
            id: taskId,
            content: newTask,
            isChecked: false,
          },
          ...prevTasks,
        }))

        setTasksKeys([newTask, ...tasksKeys])
      }

      setNewTask('')
    }

    function handleDeleteTask(taskKey: string) {
      const tasksUpdated = tasks
      delete tasksUpdated[taskKey]
      setTasks(tasksUpdated)
      setTasksKeys(tasksKeys.filter(taskKeyItem => taskKeyItem !== taskKey))
    }

    function handleToggleCheckTask(taskKey: string) {
      setTasks((prevTasks) => {
        const updatedTasks: Tasks = { ...prevTasks }
        
        if (updatedTasks[taskKey]) {
          updatedTasks[taskKey] = {
            ...updatedTasks[taskKey],
            isChecked: !updatedTasks[taskKey].isChecked,
          }
        }
  
        return updatedTasks
      })
    }

    function countFinishedTasks() {
      let finishedTasks = 0;
    
      Object.values(tasks).forEach((task) => {
        if (task.isChecked) {
          finishedTasks++
        }
      })
    
      return finishedTasks
    }

    // const scrollRef = useRef<HTMLDivElement>(null);

    // function handleScrollUp() {
    //   if (scrollRef.current) {
    //     const scrollToTop = () => {
    //       const currentScrollTop = scrollRef.current.scrollTop;
    
    //       if (currentScrollTop > 0) {
    //         scrollRef.current.scrollTop = currentScrollTop - 1;
    //         requestAnimationFrame(scrollToTop);
    //       }
    //     };
    
    //     scrollToTop();
    //   }
    // }
    
    return (
      <div className='h-screen bg-gray-600 flex flex-col items-center'>
        <header className='flex justify-center items-center bg-gray-700 w-full h-[12.5rem]'>
          <h1>
            <img src={ Logo } />
          </h1>
        </header>
        <main className='w-full max-w-[46rem]'>
          <form onSubmit={handleAddTask} className='flex gap-2 mt-[-30px]'>
            <input
              className="border border-gray-700 bg-gray-500 rounded-lg p-4 w-full text-base text-gray-100 focus:outline-purple-500 placeholder:text-gray-300"
              placeholder='Adicione uma nova tarefa'
              value={newTask}
              onChange={(e) => setNewTask(e.target.value)}
            />
            <button 
              className='flex items-center bg-blue-600 gap-2 rounded-lg text-gray-100 font-bold p-4 hover:bg-blue-400 transition-all ease-in-out duration-300'
            >
              Criar
              <PlusCircle size={16} />
            </button>
          </form>
          <article className='mt-12'>
            <div className='flex items-center justify-between text-bold'>
              <div className='flex gap-[0.5rem]'>
                <strong className='text-blue-400 text-[0.875rem]'>Tarefas criadas</strong>
                <span className='py-[2px] px-2 rounded-full bg-gray-400 text-gray-200 text-[0.75rem]'>{ Object.keys(tasks).length }</span>
              </div>
              <div className='flex gap-[0.5rem]'>
                <strong className='text-purple-300 text-[0.875rem]'>Concluídas</strong>
                <span className='py-[2px] px-2 rounded-full bg-gray-400 text-gray-200 text-[0.75rem]'>{`${countFinishedTasks()} ${countFinishedTasks() > 0 ? `de ${Object.keys(tasks).length}` : ''} `}</span>
              </div>
            </div>
            {Object.keys(tasks).length > 0 ? (
              <ScrollWrapper /*ref={scrollRef}*/ className='w-full h-[505px] mt-6'>
                {/* <div 
                  className='flex items-center justify-center text-gray-300 transition-all duration-200 ease-in-out w-full h-[45px] bg-gray-700 opacity-25 absolute z-10 hover:opacity-75' 
                  onMouseEnter={handleScrollUp}
                >
                  <CaretUp size={32} />
                </div> */}
                <Reorder.Group 
                  axis="y" 
                  values={tasksKeys} 
                  onReorder={setTasksKeys} 
                  className="flex flex-col gap-3 p-5"
                >
                  {tasksKeys.map((taskKey) => 
                    <Reorder.Item 
                      key={taskKey} 
                      value={taskKey} 
                      className="py-4 pl-4 border border-gray-500 bg-gray-500 w-full rounded-lg flex justify-between items-start"
                    >
                      <label className={`cursor-pointer text-[0.875rem] ${tasks[taskKey].isChecked ? 'text-gray-300 line-through' : 'text-gray-100'}`}>
                          <Checkbox
                            icon={<img src={ CheckboxUnchecked } />}
                            checkedIcon={<img src={ CheckboxChecked } />}
                            value={tasks[taskKey].isChecked}
                            onChange={() => handleToggleCheckTask(tasks[taskKey].content)}
                          />
                          { tasks[taskKey].content }
                      </label>
                      <div className='flex text-gray-300'>
                        <button 
                          className="transition-all ease-in-out duration-300 p-1 rounded-md hover:text-red-400 hover:bg-gray-400"
                          onClick={() => handleDeleteTask(tasks[taskKey].content)}
                        >
                          <Trash size={18} />
                        </button>
                        <DotsSixVertical size={32} className='cursor-pointer' />
                      </div>
                    </Reorder.Item>
                  )}
                </Reorder.Group>
                {/* <div 
                  className='bottom-0 flex items-center justify-center text-gray-300 transition-all duration-200 ease-in-out w-full h-[45px] bg-gray-700 opacity-25 absolute z-10 hover:opacity-75' 
                  // onMouseEnter={handleScrollUp}
                >
                  <CaretDown size={32} />
                </div> */}
              </ScrollWrapper>
            ) : (
              <Empty />
            )}
          </article>
        </main>
      </div>
    )
  }