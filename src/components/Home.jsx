import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Home() {

    const [activeLink, SetActiveLink] = useState('allTasksLink');



    return (
        <div>

            <header className="fixed right-0 top-0 left-60 bg-yellow-50 py-3 px-4 h-16">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div>
                            <button type="button" className="flex items-center focus:outline-none rounded-lg
                             text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border
                              border-transparent hover:border-yellow-300 focus:border-yellow-300 transition">
                                <span className="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition mr-2">
                                    &lt;
                                </span>
                                <span className="text-sm">Archive</span>
                            </button>
                        </div>
                        <div className="text-lg font-bold">Today's Plan</div>
                        <div>
                            <button type="button" className="flex items-center focus:outline-none rounded-lg text-gray-600 
                            hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent 
                            hover:border-yellow-300 focus:border-yellow-300 transition">
                                <span className="text-sm">This week</span>
                                <span className="inline-flex items-center justify-center w-6 h-6 text-gray-600 text-xs rounded bg-white transition ml-2">
                                    &gt;
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
                                    items-center rounded-xl ${activeLink == 'allTasksLink' ? 'bg-yellow-200' : ''}
                                     font-bold text-sm text-yellow-900 py-3 px-4`} to='/'>All Tasks</Link>
                                </li>
                                <li>
                                    <Link onClick={() => SetActiveLink('addTasksLink')} className={`link flex
                                     items-center rounded-xl ${activeLink == 'addTasksLink' ? 'bg-yellow-200' : ''}
                                      font-bold text-sm text-yellow-900 py-3 px-4`} to='/add_task'>Add Task</Link>

                                </li>
                                <li>
                                    <Link onClick={() => SetActiveLink('editTasksLink')} className={`link flex
                                     items-center rounded-xl ${activeLink == 'editTasksLink' ? 'bg-yellow-200' : ''}
                                      font-bold text-sm text-yellow-900 py-3 px-4`} to='/edit_task'>Edit Task</Link>
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

            <main className="ml-60 pt-16 max-h-screen overflow-auto">
                <div className="px-6 py-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-white rounded-3xl p-8 mb-5">
                            <Outlet />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
