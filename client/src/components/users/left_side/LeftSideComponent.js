import React from 'react'
import logo from '../../../img/logo.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSpellCheck} from '@fortawesome/free-solid-svg-icons'
import {faEdit} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './LeftSide.css'

class LeftSideComponent extends React.Component{
    constructor(props){
        super(props);
        
        // this.state = {
        //     active: true
        // }
        // if(window.location.pathname === '/user/exam_detail/start'){
        //     this.setState({
        //         active: !this.state.active
        //     })
        // }
    }

    // componentWillMount(){
    //     if(window.location.pathname === '/user/exam_detail/start'){
    //         this.setState({
    //             active: !this.state.active
    //         })
    //     }
    // }

    render(){
        return (
                <aside class="lg:w-1/5 bg-gray-700 text-white">
                    <div class="my-3">
                        <div class="px-6 my-6 mb-6 text-center">
                            <img style = {{width : "200px", height: "160px"}} src={logo} alt="Lập trình online"/>
                            Xin chào, Pham Kien
                        </div>
                        <div className = "h-auto">
                            <Link to = "/user/dashboard" routerLinkActive="border-l-4 border-gray-400 bg-blue-700 text-white"
                                class="flex py-3 px-6 cursor-pointer hover:bg-blue-500 transition text-gray-300"><span class="mr-3 w-6"><svg
                                class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                                fill-rule="evenodd"
                                d="M3.889 3h6.222a.9.9 0 0 1 .889.91v8.18a.9.9 0 0 1-.889.91H3.89A.9.9 0 0 1 3 12.09V3.91A.9.9 0 0 1 3.889 3zM3.889 15h6.222c.491 0 .889.384.889.857v4.286c0 .473-.398.857-.889.857H3.89C3.398 21 3 20.616 3 20.143v-4.286c0-.473.398-.857.889-.857zM13.889 11h6.222a.9.9 0 0 1 .889.91v8.18a.9.9 0 0 1-.889.91H13.89a.9.9 0 0 1-.889-.91v-8.18a.9.9 0 0 1 .889-.91zM13.889 3h6.222c.491 0 .889.384.889.857v4.286c0 .473-.398.857-.889.857H13.89C13.398 9 13 8.616 13 8.143V3.857c0-.473.398-.857.889-.857z"
                                ></path></svg></span>Trang chủ</Link>
                            <Link to = "/user/profile" routerLinkActive="border-l-4 border-gray-400 bg-blue-700 text-white"
                                class="flex py-3 px-6 cursor-pointer hover:bg-blue-500 transition text-gray-300"><span class="mr-3 w-6"><svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                              </svg></span>Thông tin cá nhân</Link>
                            <a routerLinkActive="border-l-4 border-gray-400 bg-blue-700 text-white"
                                class="flex py-3 px-6 cursor-pointer hover:bg-blue-500 transition text-gray-300"><span
                                class="mr-3 w-6"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                              </svg></span>Thông tin lịch thi</a>
                            <a routerLinkActive="border-l-4 border-gray-400 bg-blue-700 text-white"
                                class="flex py-3 px-6 cursor-pointer hover:bg-blue-500 transition text-gray-300"><span
                                class="mr-3 w-6"><svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                              </svg></span>Thống kê</a>
                        </div>
                        {/* <div className = {classNames({'active':this.state.active})}>
                            <div className = "h-auto">
                                <a routerLinkActive="border-l-4 border-gray-400 bg-blue-700 text-white"
                                    class="flex py-3 px-6 cursor-pointer hover:bg-blue-500 transition text-gray-300"><span class="mr-3 w-6"><FontAwesomeIcon icon={faSpellCheck} class = "h-6 w-6"/></span>Trắc nghiệm</a>
                                <a routerLinkActive="border-l-4 border-gray-400 bg-blue-700 text-white"
                                    class="flex py-3 px-6 cursor-pointer hover:bg-blue-500 transition text-gray-300"><span class="mr-3 w-6"><FontAwesomeIcon icon = {faEdit} class = "h-6 w-6" onClick = {this.clickTwo}/></span>Tự luận</a>
                            </div>
                            <div class="w-5/6 m-auto flex items-center space-x-1 space-y-1 flex-wrap justify-center">
                                <a href="#" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white" style = {{marginLeft : "0.25rem"}}>
                                    1
                                </a>
                                <a href="#" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    2
                                </a>
                                <a href="#" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    3
                                </a>
                                <a href="#" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    4
                                </a>
                                <a href="#" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    5
                                </a>
                                <a href="#" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    6
                                </a>
                                <a href="#" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    7
                                </a>
                                <a href="#" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    8
                                </a>
                                <a href="#" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    9
                                </a>
                                <a href="#" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    10
                                </a>
                                <a href="#" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    11
                                </a>
                                <a href="#" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    12
                                </a>
                            </div>
                            <div class="w-5/6 my-2 mx-auto flex justify-between">
                                <a href="#" class="w-20 h-10 text-gray-500 bg-white border border-gray-300 hover:bg-gray-300 hover:text-gray-700 text-sm font-medium rounded-lg flex flex-wrap content-center justify-center" style = {{marginLeft : "0.25rem"}}>
                                    Previous
                                </a>
                                <a href="#" class="w-20 h-10 text-gray-500 bg-white border border-gray-300 hover:bg-gray-300 hover:text-gray-700 text-sm font-medium rounded-lg flex flex-wrap content-center justify-center">
                                    Next
                                </a>
                            </div>
                        </div> */}
                    </div>
                </aside>
        )
    }
}

export default LeftSideComponent;