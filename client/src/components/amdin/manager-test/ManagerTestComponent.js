import React from "react";
import NavSideBarComponent from "../nav-sidebar/NavSideBarComponent";
import NavbarComponent from "../navbar/NavbarComponent";
import ExamService from "../../../service/admin/service/ExamService";
import moment from 'moment';
import AddTestComponent from "./add-test/AddTestComponent";
import { Link } from "react-router-dom";

class ManageTestComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            listExam: [],
            addExam: false
        }
    }

    async componentDidMount(){
        await ExamService.getExamList().then( res =>{
            this.setState({
                listExam: res.data.data
            })
        })
    }

    add = () =>{
        this.setState({
            addExam: true
        })
    }

    render() {
        return (
            <div>
                <NavSideBarComponent/>
                <div class="relative md:ml-64 bg-gray-200">
                    <NavbarComponent/>
                    <div class="bg-gray-600 md:pt-32 pb-32 pt-12">
                        <div class="px-4 md:px-10 mx-auto w-full">
                        </div>
                    </div>
                    <div class=" mx-auto w-full -m-24">

                <div class="flex flex-wrap mt-4 justify-center">
                    <div class="w-full mb-12 xl:mb-0 px-4 max-w-5xl">
                    <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                        <div class="rounded-t mb-0 px-4 py-3 border-0">
                        <div class="flex flex-wrap items-center">
                            <div class="relative w-full px-4 max-w-full flex-grow leading-8 mb-3">
                            <h3 class="font-semibold text-2xl text-gray-800">
                                Danh sách bài test
                            </h3>
                            </div>
                            <div class="flex flex-wrap flex-col w-full">
                            <div class="flex flex-wrap flex-row">

                                <div class="relative w-full px-4 max-w-full flex-flow flex-basis">

                                <span class="mx-3 text-gray-600 text-sm">Hiển thị tối đa</span>
                                <div class="inline-block relative max-w-xs w-20 mr-2">
                                    <select
                                    class="block appearance-none w-full bg-white px-3 py-1 pr-4 rounded shadow leading-tight focus:outline-none text-sm">
                                    <option>ABC</option>

                                    </select>
                                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                    </div>
                                </div>
                                <button
                                class="bg-white shadow-md hover:bg-green-500 hover:text-green-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 md:mb-0 rounded outline-none focus:outline-none mx-1 mb-1"
                                type="button">
                                <span><i class="fa fa-file-excel-o mx-1"></i>Export file</span>
                                </button>
                                <Link to="/admin/test/add-test"
                                    class="bg-white shadow-md hover:bg-blue-500 hover:text-blue-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mx-1 mb-1"
                                    type="button"><span><i class="fa fa-book mr-1"></i>Add new</span>
                                </Link>
                                </div>
                            </div>
                            <form style = {{maxWidth:"100%", justifyContent: "end", margin :"0"}}> 
                                <div class="p-2 flex justify-end">
                                    <div class="bg-white flex items-center rounded-full shadow-md w-1/3">
                                        <input name="search-input" class="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
                                        id="search" type="text" placeholder="Nhập username hoặc email" autocomplete="off"/>

                                        <div class="p-1">
                                            <button class="focus:outline-none flex items-center" type="submit">
                                                <i class="fa fa-search bg-blue-500 text-white rounded-full p-1 pt-2 truncate hover:bg-blue-400 focus:outline-none w-8 h-8 flex items-center justify-center">
                                                </i>
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </form>

                            </div>


                        </div>
                        </div>
                        <div class="block w-full">
                        {/* <!-- Projects table --> */}
                        <table
                            class="items-center w-full bg-transparent border-collapse whitespace-no-wrap user-list block lg:table overflow-x-auto overflow-y-auto">
                            <thead>
                            <tr>

                            <th
                                class="row-title px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Tiêu đề
                            </th>

                            <th
                                class="row-name px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                TG bắt đầu
                            </th>
                            <th
                                class="row-name px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Trạng thái
                            </th>
                            <th
                                class="row-name px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Intake
                            </th>

                            <th
                                class="row-action px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                            </th>
                            </tr>
                            </thead>

                            <tbody>
                                {
                                    this.state.listExam.map((item, index) => {
                                        return (
                                            <tr class="border hover:bg-gray-300">
                                                <td
                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md font-semibold text-gray-800 whitespace-no-wrap p-4">
                                                <a class="hover:text-blue-700"><span class="mx-2 text-gray-600 text-sm">(Đã huỷ)</span>{item.title}</a>
                                                </td>
                                                <td
                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-no-wrap p-4 text-left">{item.beginExam}
                                                </td>

                                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                                    {moment(moment(item.beginExam).format('YYYY-MM-DD HH:mm:ss')).isAfter(moment(new Date()).format('YYYY-MM-DD HH:mm:ss')) && <span class="text-gray-700 bg-gray-200 rounded px-2 py-1">Chưa bắt đầu</span>}
                                                    
                                                    {moment(moment(item.beginExam).format('YYYY-MM-DD HH:mm:ss')).isBefore(moment(new Date()).format('YYYY-MM-DD HH:mm:ss')) && <span class="text-red-700 bg-red-200 rounded px-2 py-1">Kết thúc</span>}
                                                    {item.beginExam.canceled && <span class="text-red-900 bg-red-400 rounded px-2 py-1">Đã huỷ</span>}
                                                </td>
                                                <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                                {item.intake.name}
                                                </td>
                                                <td
                                                class="border-t-0 px-6 align-middle flex justify-between border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 w-full">

                                                <a
                                                    class="bg-white shadow-md hover:bg-blue-500 hover:text-gray-200 cursor-pointer transition duration-200 ease-in-out text-xs font-bold uppercase rounded outline-none focus:outline-none px-2 py-1">
                                                    <span><i class="fa fa-users"></i></span>
                                                </a>
                                                </td>

                                            </tr>
                                        )
                                    })
                                }
                            </tbody>


                        </table>
                        </div>

                                <div
                                    class="px-4 py-3 bg-white border-t flex flex-row justify-between xs:flex-row items-center xs:justify-between">
                                                {/* <span class="text-xs xs:text-sm text-gray-700 px-4">
                                                    Hiển thị {{paginationDetail?.isLastPage ? paginationDetail?.totalCount - paginationDetail.pageCount + 1 : paginationDetail?.pageNumber * paginationDetail?.pageCount + 1}}
                                                đến {{paginationDetail?.isLastPage ? paginationDetail.totalCount : (paginationDetail?.pageNumber + 1) * paginationDetail?.pageCount}}
                                                trong số {{paginationDetail?.totalCount}} kết quả
                                                </span> */}
                                <div class="inline-flex mt-2 px-4 xs:mt-0">
                                    <button
                                    class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l focus:outline-none"
                                    >
                                    <span><i class="fa fa-arrow-left"></i></span><span class="hidden md:inline ml-1 ">Trang trước</span>
                                    </button>
                                    <button
                                    class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r focus:outline-none"
                                    >
                                    <span class="hidden md:inline mr-1">Trang kế</span><span><i class="fa fa-arrow-right"></i></span>
                                    </button>
                                </div>
                                </div>
                                {this.state.listExam.length === 0 && <div class="px-4 py-3 bg-white border-t flex flex-row justify-between xs:flex-row items-center xs:justify-between">
                                    <p class="mx-auto text-gray-700 text-sm">Nội dung chưa được tạo</p>
                                </div>}

                    </div>
                    </div>
                </div>
                </div>
                </div>
                {this.state.addExam && <AddTestComponent click = {true}/>}
            </div>
        )
    }
}

export default ManageTestComponent;