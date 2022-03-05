import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faBars} from '@fortawesome/free-solid-svg-icons'
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {faTv} from '@fortawesome/free-solid-svg-icons'
import {faUser} from '@fortawesome/free-solid-svg-icons'
import {faQuestionCircle} from '@fortawesome/free-solid-svg-icons'
import {faBook} from '@fortawesome/free-solid-svg-icons'
import {faArchive} from '@fortawesome/free-solid-svg-icons'
import logo from '../../../img/Aniyah.png'
import { Link } from 'react-router-dom';

class NavSideBarComponent extends React.Component{
    render(){
        return (
            <nav
                class="md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-no-wrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6">
                <div
                    class="md:flex-col md:items-stretch md:min-h-full md:flex-no-wrap px-0 flex flex-wrap items-center justify-between w-full mx-auto">
                    <button
                    class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent"
                    type="button">
                    <FontAwesomeIcon icon = {faBars}/>
                    </button>
                    <a
                    class="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0"
                    href="javascript:void(0)">
                        <img style = {{width : "200px", height: "160px"}} src={logo} alt="Lập trình online"/>
                    </a>
                    {/* <!-- User --> */}
                    <ul class="md:hidden items-center flex flex-wrap list-none">
                    {/* <!--      <li class="inline-block relative">--> */}
                    {/* <!--        <app-notification-dropdown></app-notification-dropdown>--> */}
                    {/* <!--      </li>--> */}
                    <li class="inline-block relative">
                        <app-user-dropdown></app-user-dropdown>
                    </li>
                    </ul>
                    {/* <!-- Collapse --> */}
                    <div
                    class="md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded">
                    {/* <!-- Collapse header --> */}
                    <div
                        class="md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-gray-300">
                        <div class="flex flex-wrap">
                        <div class="w-6/12">
                            <a
                            class="md:block text-left md:pb-2 text-gray-700 mr-0 inline-block whitespace-no-wrap text-sm uppercase font-bold p-4 px-0">
                            Trang chủ
                            </a>
                        </div>
                        <div class="w-6/12 flex justify-end">
                            <button
                            type="button"
                            class="cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent">
                            <FontAwesomeIcon icon = {faTimes}/>
                            </button>
                        </div>
                        </div>
                    </div>
                    {/* <!-- Form --> */}
                    <form class="mt-6 mb-4 md:hidden">
                        <div class="mb-3 pt-0">
                        <input
                            type="text"
                            placeholder="Search"
                            class="px-3 py-2 h-12 border border-solid  border-gray-600 placeholder-gray-400 text-gray-700 bg-white rounded text-base leading-snug shadow-none outline-none focus:outline-none w-full font-normal"/>
                        </div>
                    </form>
                    <ul class="md:flex-col md:min-w-full flex flex-col list-none">
                        <li class="items-center">
                        <Link to={"/admin/users"} routerLinkActive="text-blue-500 hover:text-blue-600"
                            class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"><FontAwesomeIcon icon = {faUser} className = "opacity-75 mr-2 text-sm"/>Quản trị tài khoản</Link>
                        </li>
                        <li class="items-center">
                            <Link to={"/admin/question"} routerLinkActive="text-blue-500 hover:text-blue-600"
                            class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"><FontAwesomeIcon icon = {faQuestionCircle} className = "opacity-75 mr-2 text-sm"/>Ngân hàng câu hỏi</Link>
                        </li>
                        <li class="items-center">
                        <Link
                            routerLinkActive="text-blue-500 hover:text-blue-600"
                            class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"><FontAwesomeIcon icon = {faBook} className = "opacity-75 mr-2 text-sm"/>
                            Quản trị môn học</Link>
                        </li>
                        <li class="items-center">
                        <Link to ={"/admin/test"}
                            routerLinkActive="text-blue-500 hover:text-blue-600"
                            class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block"><FontAwesomeIcon icon = {faArchive} className = "opacity-75 mr-2 text-sm"/>
                            Quản trị bài test</Link>
                        </li>
                    </ul>
                    {/* <!-- Divider --> */}
                    <hr class="my-4 md:min-w-full"/>
                    {/* <!-- Heading --> */}
                    <h6
                        class="md:min-w-full text-gray-600 text-xs uppercase font-bold block pt-1 pb-4 no-underline">
                        Cá nhân
                    </h6>
                    {/* <!-- Navigation --> */}
                    <ul
                        class="md:flex-col md:min-w-full flex flex-col list-none md:mb-4">
                        <li class="inline-flex">
                        <a
                            routerLinkActive="text-blue-500 hover:text-blue-600"
                            class="text-gray-800 hover:text-gray-600 text-xs uppercase py-3 font-bold block">
                                <FontAwesomeIcon icon = {faUser} className = "mr-2 text-gray-500 text-base"/>
                            Thông tin tài khoản</a>
                        </li>
                    </ul>
                    </div>
                </div>
                </nav>

                )
            }
        }

export default NavSideBarComponent;