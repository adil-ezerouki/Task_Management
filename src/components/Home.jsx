import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Done from '../assets/Done.png'
import NotDone from '../assets/NotYet.png'
import { useDispatch, useSelector } from 'react-redux';


export default function Home() {
    
    const [activeLink, SetActiveLink] = useState('allTasksLink');
    let tasks = useSelector((state)=> state.tasks)

    const filterCompletedTasks = ()=> {
        tasks = tasks.filter((task)=>task.completed == true)
    }




    return (
        <div>

            <header className="fixed right-0 top-0 left-60 bg-yellow-50 py-3 px-4 ">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div>
                            <button onClick={filterCompletedTasks} type="button" className="flex items-center focus:outline-none rounded-lg
                             text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border
                              border-transparent hover:border-yellow-300 focus:border-yellow-300 transition">
                                <span className="inline-flex items-center justify-center w-16 text-gray-600 text-xs rounded bg-white transition mr-2">
                                    <img src={Done} className='' alt="" />
                                </span>
                                <span className="text-sm">Completed</span>
                            </button>
                        </div>
                        <div className="text-lg font-bold">Today's Plan</div>
                        <div>
                            <button type="button" className="flex items-center focus:outline-none rounded-lg text-gray-600 
                            hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent 
                            hover:border-yellow-300 focus:border-yellow-300 transition">
                                <span className="text-sm">Uncompleted</span>
                                <span className="inline-flex items-center justify-center w-16 text-gray-600 text-xs rounded bg-white transition ml-2">
                                <img src={NotDone} className='' alt="" />
                                </span>
                            </button>
                        </div>
                    </div>
                </div>
            </header>

            <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-60">
                <div className="flex flex-col justify-between h-full">
                    <div className="flex-grow">
                        <div className="px-4 py-6 text-center border-b">
                            <h1 className="text-xl font-bold leading-none"><span className="text-yellow-700">Task Manager</span> App</h1>
                        </div>
                        <div className="p-4">
                            <ul className="space-y-1">
                                <li>
                                    <Link onClick={() => SetActiveLink('allTasksLink')} className={`link flex 
                                    items-center rounded-xl ${activeLink == 'allTasksLink' ? 'bg-blue-300' : ''}
                                     font-bold text-sm text-yellow-900 py-3 px-4`} to='/'>All Tasks List</Link>
                                </li>
                                <li>
                                    <Link onClick={() => SetActiveLink('highTasks')} className={`link flex
                                     items-center rounded-xl ${activeLink == 'highTasks' ? 'bg-red-300' : ''}
                                      font-bold text-sm text-yellow-900 py-3 px-4`} to='/high_tasks'>High Tasks</Link>

                                </li>
                                <li>
                                    <Link onClick={() => SetActiveLink('mediumTasks')} className={`link flex
                                     items-center rounded-xl ${activeLink == 'mediumTasks' ? 'bg-green-300' : ''}
                                      font-bold text-sm text-yellow-900 py-3 px-4`} to='/medium_tasks'>Medium Tasks</Link>
                                </li>
                                <li>
                                    <Link onClick={() => SetActiveLink('lowTasks')} className={`link flex
                                     items-center rounded-xl ${activeLink == 'lowTasks' ? 'bg-yellow-300' : ''}
                                      font-bold text-sm text-yellow-900 py-3 px-4`} to='/low_tasks'>Low Tasks</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="p-4">
                        <button type="button" className="inline-flex items-center justify-center h-9 px-4 rounded-xl
                         bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">

                        </button> <span className="font-bold text-sm ml-2">Logout</span>
                    </div>
                </div>
            </aside>

            <main className="ml-60 pt-16">
                <div className="px-6 py-8">
                    <div className="mx-auto">
                            <Outlet />
                    </div>
                </div>
            </main>
        </div>
    )
}
