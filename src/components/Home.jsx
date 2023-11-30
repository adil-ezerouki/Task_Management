import React, { useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux';
import High from '../assets/High.png'
import Medium from '../assets/Medium.png'
import Low from '../assets/Low.png'
import AllTasksImg from '../assets/AllTasks.png'
import Logo from '../assets/Logo.png';
import LogoHigh from '../assets/LogoHigh.png';
import LogoMedium from '../assets/LogoMedium.png';
import LogoLow from '../assets/LogoLow.png';


export default function Home() {

    const [activeLink, SetActiveLink] = useState('allTasksLink');
    let tasks = useSelector((state) => state.tasks)

    const location = useLocation();
    const currentRoute = location.pathname == '/' ? (<span><span className='text-[#2595AD]'>All </span>Tasks</span>)
        : location.pathname == '/high_tasks' ? (<span><span className='text-[#FE1D25]'>High </span>Tasks</span>)
            : location.pathname == '/medium_tasks' ? (<span><span className='text-[#55A24C]'>Medium </span>Tasks</span>)
                : location.pathname == '/low_tasks' ? (<span><span className='text-[#FFA10F]'>Low </span>Tasks</span>)
                    : location.pathname == '/add_task' ? 'Add Task' : location.pathname.includes('/edit_task') ? 'Edit Task'
                        : ''




    return (
        <div>

            <header className="fixed right-0 top-0 left-60 border-b-2 bg-white py-[29.5px] px-4 shadow-sm">
                <div className="max-w-4xl mx-auto">
                    <div className="flex items-center justify-between">
                        <div>
                            {/* <button onClick={filterCompletedTasks} type="button" className="flex items-center focus:outline-none rounded-lg
                             text-gray-600 hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border
                              border-transparent hover:border-yellow-300 focus:border-yellow-300 transition">
                                <span className="inline-flex items-center justify-center w-16 text-gray-600 text-xs rounded bg-white transition mr-2">
                                    <img src={Done} className='' alt="" />
                                </span>
                                <span className="text-sm">Completed</span>
                            </button> */}
                        </div>
                        <div className="text-[30px] font-bold">{currentRoute}</div>
                        <div>
                            {/* <button type="button" className="flex items-center focus:outline-none rounded-lg text-gray-600 
                            hover:text-yellow-600 focus:text-yellow-600 font-semibold p-2 border border-transparent 
                            hover:border-yellow-300 focus:border-yellow-300 transition">
                                <span className="text-sm">Uncompleted</span>
                                <span className="inline-flex items-center justify-center w-16 text-gray-600 text-xs rounded bg-white transition ml-2">
                                <img src={NotDone} className='' alt="" />
                                </span>
                            </button> */}
                        </div>
                    </div>
                </div>
            </header>

            <aside className="fixed inset-y-0 left-0 bg-white shadow-md max-h-screen w-[250px] border-r-2">
                <div className="flex flex-col justify-between  h-full ">
                    <div className="flex-grow">
                        <div className="px-4 py-6 text-center border-b-2 flex justify-center">
                            <img src={activeLink == 'allTasksLink' ? Logo : activeLink == 'highTasks' ? LogoHigh : activeLink == 'mediumTasks' ? LogoMedium : activeLink == 'lowTasks' ? LogoLow : ''} alt="" />
                        </div>
                        <div className="p-4 h-[535px]  flex items-center">
                            <ul className="space-y-1 flex flex-col gap-6">
                                <li>
                                    <Link onClick={() => SetActiveLink('allTasksLink')} className={`link flex 
                                    items-center rounded-xl hover:bg-blue-300 ${activeLink == 'allTasksLink' ? 'bg-blue-300' : ''}
                                     font-bold text-lg text-yellow-900 py-3 px-4`} to='/'> <img className='w-[35px]' src={AllTasksImg} alt="" /> <span className='ps-5'>All Tasks</span></Link>
                                </li>
                                <li>
                                    <Link onClick={() => SetActiveLink('highTasks')} className={`link flex
                                     items-center rounded-xl hover:bg-red-300 ${activeLink == 'highTasks' ? 'bg-red-300' : ''}
                                      font-bold text-lg text-yellow-900 py-3 px-4 `} to='/high_tasks'><img className='w-[35px]' src={High} alt="" /> <span className='ps-5'>High Tasks</span> </Link>

                                </li>
                                <li>
                                    <Link onClick={() => SetActiveLink('mediumTasks')} className={`link flex
                                     items-center rounded-xl hover:bg-green-300 ${activeLink == 'mediumTasks' ? 'bg-green-300' : ''}
                                      font-bold text-lg text-yellow-900 py-3 px-4`} to='/medium_tasks'><img className='w-[35px]' src={Medium} alt="" /><span className='ps-5'>Medium Tasks</span></Link>
                                </li>
                                <li>
                                    <Link onClick={() => SetActiveLink('lowTasks')} className={`link flex
                                     items-center rounded-xl hover:bg-yellow-300 ${activeLink == 'lowTasks' ? 'bg-yellow-300' : ''}
                                      font-bold text-lg text-yellow-900 py-3 px-4`} to='/low_tasks'><img className='w-[35px]' src={Low} alt="" /> <span className='ps-5'>Low Tasks</span></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div className="p-4">
                        <button type="button" className="inline-flex items-center justify-center h-9 px-4 rounded-xl
                         bg-gray-900 text-gray-300 hover:text-white text-sm font-semibold transition">

                        </button> <span className="font-bold text-sm ml-2">Logout</span>
                    </div> */}
                </div>
            </aside>

            <main className="ml-60 pt-8 h-full">
                <div className="pt-16 h-full">
                    <div className="mx-auto h-full">
                        <Outlet />
                    </div>
                </div>
            </main>
        </div>
    )
}
