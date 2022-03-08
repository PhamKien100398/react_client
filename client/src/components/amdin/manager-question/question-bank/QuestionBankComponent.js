import React from "react";
import NavSideBarComponent from "../../nav-sidebar/NavSideBarComponent";
import NavbarComponent from "../../navbar/NavbarComponent";
import AddQuestionComponent from "../add-question/AddQuestionComponent";
import CourseService from "../../../../service/admin/service/CourseService";
import PartService from "../../../../service/admin/service/PartService";
import QuestionService from "../../../../service/admin/service/QuestionService";

class QuestionBankComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            addQuestion: false,
            listCourse: [],
            listQuestion: [],
            listPartByCourse: [],
            selected: false
        }
    }

    async componentDidMount(){
        await CourseService.getCourseList().then( async response =>{
            await QuestionService.getListQuestion().then(res =>{
                this.setState({
                    listQuestion: res.data.data,
                    listCourse: response.data,
                    addQuestion: false
                })
            })
        })
    }

    select = async (event) => {
        await PartService.getPartListByCourseId(event.target.value)
        .then(res =>{
            this.setState({
                selected: true,
                listPartByCourse: res.data
            })
        })
    }

    selectPart = async (event) =>{
        await QuestionService.getListQuestionByPart(event.target.value)
        .then(res =>{
            this.setState({
                selected: true,
                listQuestion: res.data.data
            })
        })
    }

    add = () =>{
        this.setState({
            addQuestion: true
        })
    }
    render(){
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
                                    Ngân hàng câu hỏi
                                </h3>
                                </div>
                                <div class="flex flex-wrap flex-col w-full">
                                <div class="flex flex-wrap flex-row">

                                    <div class="relative w-full px-4 max-w-full flex-flow flex-basis">

                                    <span class="mx-3 text-gray-600 text-sm">Hiển thị tối đa</span>
                                    <div class="inline-block relative max-w-xs w-20 mr-2">
                                        <select
                                        class="block appearance-none w-full bg-white px-3 py-1 pr-4 rounded shadow leading-tight focus:outline-none text-sm">
                                        <option>10</option>
                                        <option>20</option>

                                        </select>
                                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                            <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                        </svg>
                                        </div>
                                    </div>
                                    <button
                                        class="bg-white shadow-md hover:bg-blue-500 hover:text-blue-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mx-1 mb-1"
                                        onClick={this.add}><span><i class="fa fa-plus mr-1"></i>Add new</span>
                                    </button>

                                    <div class="flex mt-4">
                                        <div class="md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                        >
                                            Môn học
                                        </label>
                                        <select onChange={this.select}
                                                name="course"
                                                class="block appearance-none w-full bg-gray-200 py-2 px-3 my-1 mt-3 pr-4 rounded shadow leading-tight focus:outline-none">
                                                <option value="0">-- Tên môn học --</option>
                                            {

                                                this.state.listCourse.map((items, index) =>{
                                                    return (
                                                        <option key={index} value={items.id}>{items.name}</option>
                                                    )
                                                })
                                            }

                                        </select>

                                        </div>
                                        <div class="md:w-1/2 px-3">
                                        <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                        >
                                            Nội dung
                                        </label>
                                        <select onChange={this.selectPart}
                                                name="part"
                                                class="block appearance-none w-full bg-gray-200 py-2 px-3 my-1 mt-3 pr-4 rounded shadow leading-tight focus:outline-none">
                                            <option value="0">-- Nội dung môn học --</option>
                                            {
                                                this.state.listPartByCourse.map((items, index) =>{
                                                    return <option key = {index} value={items.id}>{items.name}</option>
                                                })
                                            }

                                        </select>

                                        </div>
                                    </div>

                                    </div>
                                </div>

                                </div>


                            </div>
                            </div>
                            <div class="block w-full">
                            {/* <!-- Projects table --> */}
                            <table
                                class="items-center table-fixed w-full bg-transparent border-collapse user-list block lg:table overflow-x-auto overflow-y-auto">
                                <thead>
                                <tr>

                                <th
                                    class="row-question px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                    Câu hỏi
                                </th>
                                <th
                                    class="row-status px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                    Ẩn/Hiện
                                </th>
                                <th
                                    class="row-difficulty text-center px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                    Điểm
                                </th>
                                <th
                                    class="row-type px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 font-semibold text-left">
                                    Loại câu
                                </th>

                                </tr>
                                </thead>

                                <tbody>
                                {
                                    this.state.listQuestion.map((item, index) =>{
                                        return (
                                            <tr class="border hover:bg-gray-300">

                                    <th class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-left">
                                        <div class="cursor-pointer hover:text-blue-800 text-md">{item.questionText}</div>
                                    </th>
                                    <td class="border-t-0 text-center px-6 align-middle  border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 w-1/3">
                                        <span class="text-2xl cursor-pointer"><i class="fa fa-toggle-on" aria-hidden="true"></i></span>
                                    </td>
                                    <td class="border-t-0 text-center px-6 align-middle border-l-0 border-r-0 text-xs p-4">
                                    {/* {/* <ng-container>
                                        <ng-template [ngSwitchCase]="'EASY'"> */}
                                        {item.point === 5 && <span
                                            class="px-2 py-1 bg-green-400 cursor-pointer font-medium hover:bg-green-300 transition duration-300 ease-in-out font-light text-green-600 text-xs rounded-md" style={{color: 'white'}}>
                                                {item.point}</span>}
                                        {/* </ng-template>
                                        <ng-template [ngSwitchCase]="'MEDIUM'"> */}
                                        {item.point === 10 && <span
                                            class="px-2 py-1 bg-red-400 cursor-pointer font-medium hover:bg-green-300 transition duration-300 ease-in-out font-light text-green-600 text-xs rounded-md" style={{color: 'white'}}>
                                                {item.point}</span>}

                                        {/* </ng-template>
                                        <ng-template [ngSwitchCase]="'HARD'"> */}
                                        {item.point === 15 && <span
                                            class="px-2 py-1 bg-gray-400 cursor-pointer font-medium hover:bg-green-300 transition duration-300 ease-in-out font-light text-green-600 text-xs rounded-md" style={{color: 'white'}}>
                                                {item.point}</span>}
                                    </td>
                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 italic font-semibold">
                                    {item.questionType.description}
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
                                            <span class="text-xs xs:text-sm text-gray-700 px-4">
                                                {/* Hiển thị {{paginationDetail?.isLastPage ? paginationDetail?.totalCount - paginationDetail.pageCount + 1 : paginationDetail?.pageNumber * paginationDetail?.pageCount + 1}}
                                            đến {{paginationDetail?.isLastPage ? paginationDetail.totalCount : (paginationDetail?.pageNumber + 1) * paginationDetail?.pageCount}}
                                            trong số {{paginationDetail?.totalCount}} kết quả */}
                                            Hiển thị 1 trên 2 câu hỏi
                                            </span>
                            <div class="inline-flex mt-2 px-4 xs:mt-0">
                                <button
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l focus:outline-none">
                                <span><i class="fa fa-arrow-left"></i></span><span class="hidden md:inline ml-1 ">Trang trước</span>
                                </button>
                                <button
                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r focus:outline-none"
                                >
                                <span class="hidden md:inline mr-1">Trang kế</span><span><i class="fa fa-arrow-right"></i></span>
                                </button>
                            </div>
                            </div>
                            {/* <ng-container *ngIf="questionList.length==0 && skeleton==false"> */}
                            <div
                                class="px-4 py-3 bg-white border-t flex flex-row justify-between xs:flex-row items-center xs:justify-between">
                                <p class="mx-auto text-gray-700 text-sm">Nội dung không có để hiển thị</p>
                            </div>
                            {/* </ng-container> */}
                        </div>
                        </div>


                    </div>

                    {/* <app-admin-footer></app-admin-footer> */}
                    </div>
                    {this.state.addQuestion && <AddQuestionComponent click = {true}/>}
                </div>
            </div>
        )
    }
}

export default QuestionBankComponent;