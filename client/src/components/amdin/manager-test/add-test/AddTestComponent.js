import React from "react";
import NavSideBarComponent from "../../nav-sidebar/NavSideBarComponent";
import NavbarComponent from "../../navbar/NavbarComponent";
import IntakeService from "../../../../service/admin/service/IntakeService";
import CourseService from "../../../../service/admin/service/CourseService";
import QuestionService from "../../../../service/admin/service/QuestionService";
import PartService from "../../../../service/admin/service/PartService";

class AddTestComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listIntake: [],
            listCourse: [],
            listQuestion: [],
            listPartByCourse: []
        }
    }

    async componentDidMount(){
        await IntakeService.getIntakeList().then(async r =>{
            await CourseService.getCourseList().then(async response =>{
                await QuestionService.getListQuestion().then(res =>{
                    this.setState({
                        listQuestion: res.data.data,
                        listCourse: response.data,
                        listIntake: r.data
                    })
                })
            })
        })
    }

    select = async (event) => {
        console.log(event);
        await PartService.getPartListByCourseId(event.target.value)
        .then(res =>{
            this.setState({
                selected: true,
                listPartByCourse: res.data
            })
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
                                <div class="relative flex justify-between w-full px-4 max-w-full flex-grow leading-8 mb-3">
                                    <h3 class="font-semibold text-2xl text-gray-800">
                                    Tạo bài test
                                    </h3>
                                    <button
                                    class="bg-blue-200 shadow-md hover:bg-blue-300 text-blue-600 border border-gray-400 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                    type="submit"
                                    ><span><i class="fa mr-1"></i>Tạo bài test</span>
                                    </button>
                                </div>
                                <hr class="border w-full my-3"/>
                                <div class="flex flex-wrap flex-col w-full">

                                    <div class="flex flex-wrap flex-row">
                                    <div class="relative w-full px-4 max-w-full flex-flow flex-basis">

                                        <p class="mx-3 my-3 text-gray-600 text-md text-blue-700 text-xl font-semibold">Đối tượng tham gia</p>

                                        <div class="-mx-3 md:flex mb-2 w-full">
                                        <div class="md:w-full px-3">
                                            <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                            >
                                            Khoá học
                                            </label>
                                            <select
                                            formControlName="intake"
                                            name="intake"
                                            class="block appearance-none w-full bg-gray-200 py-2 px-3 my-1 mt-3 pr-4 rounded shadow leading-tight focus:outline-none">
                                            <option value="-1">-- please choose intake --</option>
                                            {
                                                this.state.listIntake.map((item, index) =>{
                                                    return (
                                                        <option value={index}>{item.name}</option>
                                                    )
                                                })
                                            }

                                            </select>
                                        </div>
                                        </div>

                                    </div>
                                    <hr class="border w-full my-3"/>
                                    <div class="relative w-full px-4 max-w-full flex-flow flex-basis">

                                        <p class="mx-3 my-3 text-gray-600 text-md text-blue-700 text-xl font-semibold">Thông tin chung</p>

                                        <div class="-mx-3 md:flex mb-2 w-full">
                                        <div class="md:w-full px-3">
                                            <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                                for="test-title"
                                            >
                                            Đặt tiêu đề
                                            </label>
                                            <input
                                            class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-blue-500"
                                            id="test-title"
                                            formControlName="testTitle"
                                            type="text"
                                            placeholder="Nhập tiêu đề bài test"
                                            autocomplete="off"
                                            tabindex="1"
                                            required/>
                                        </div>
                                        </div>

                                        <div class="-mx-3 md:flex mb-2 w-full">
                                        <div class="md:w-1/2 px-3">
                                            <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                            >
                                            Chọn môn học
                                            </label>
                                            <select onChange={this.select}
                                            tabindex="2"
                                            name="course"
                                            class="block appearance-none w-full bg-gray-200 py-2 px-3 my-1 mt-3 pr-4 rounded shadow leading-tight focus:outline-none">
                                            <option value="-1">-- please choose course --</option>
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
                                            <select
                                                    name="part"
                                                    class="block appearance-none w-full bg-gray-200 py-2 px-3 my-1 mt-3 pr-4 rounded shadow leading-tight focus:outline-none">
                                            <option value="">-- please choose part --</option>
                                            {
                                                this.state.listPartByCourse.map((items, index) =>{
                                                    return <option key = {index} value={items.id}>{items.name}</option>
                                                })
                                            }

                                            </select>

                                        </div>
                                        </div>

                                    </div>
                                    <hr class="border w-full my-3"/>


                                    <div class="relative w-full px-4 max-w-full flex-flow flex-basis">

                                        <p class="mx-3 my-3 text-gray-600 text-md text-blue-700 text-xl font-semibold">Thiết lập thời
                                        gian</p>
                                        <div class="-mx-3 md:flex mb-2 w-full">
                                        <div class="md:w-1/3 px-3">
                                            <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                            >
                                            Thời gian mở
                                            </label>
                                            <input
                                            class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-blue-500"
                                            type="datetime-local"
                                            step="1"
                                            formControlName="timeBegin"
                                            autocomplete="off"
                                            tabindex="1"
                                            required/>
                                        </div>

                                        <div class="md:w-1/3 px-3">
                                            <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                            >
                                            Thời gian đóng
                                            </label>
                                            <input
                                            class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-blue-500"

                                            type="datetime-local"
                                            step="1"
                                            formControlName="timeEnd"
                                            autocomplete="off"
                                            tabindex="1"
                                            required/>
                                        </div>
                                        <div class="md:w-1/3 px-3">
                                            <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                            >
                                            Thời gian làm bài (phút)
                                            </label>
                                            <input
                                            class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-blue-500"
                                            type="number"
                                            name="timeDuration"
                                            formControlName="timeDuration"
                                            min="1"
                                            autocomplete="off"
                                            tabindex="1"
                                            required/>
                                        </div>
                                        </div>
                                    </div>
                                    <hr class="border w-full my-3"/>
                                    <div class="relative w-full px-4 max-w-full flex-flow flex-basis">
                                        <p class="mx-3 my-3 text-gray-600 text-md text-blue-700 text-xl font-semibold">Chọn câu hỏi</p>
                                        <p class="text-sm italic text-gray-800">Vui lòng chọn môn học và nội
                                        dung.</p>
                                        <div class="block w-full overflow-scroll" style={{height: '500px'}}>
                                        <table
                                            class="items-center w-full bg-transparent border-collapse table-fixed user-list block lg:table overflow-x-auto overflow-y-auto">
                                            <thead>
                                            <tr>
                                            <th
                                                class="row-header row-checkbox px-6 bg-gray-100 text-gray-600 align-middle  border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left">
                                                <input type="checkbox" name="allCheck"/>
                                            </th>
                                            <th
                                                class="row-header row-question px-6 bg-gray-100 text-gray-600 align-middle  border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left">
                                                Câu hỏi
                                            </th>

                                            <th
                                                class="row-header row-difficulty text-center px-6 bg-gray-100 text-gray-600 align-middle  border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left">
                                                Độ khó
                                            </th>
                                            <th
                                                class="row-header row-type px-6 bg-gray-100 text-gray-600 align-middle  border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left">
                                                Loại câu
                                            </th>
                                            </tr>
                                            </thead>

                                            <tbody>
                                            <tr class="border hover:bg-gray-300">

                                                <td
                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md text-gray-500  p-4">
                                                <input type="checkbox" name="noneCheck"/>
                                                </td>

                                                <th
                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-left"

                                                >
                                                <div></div>
                                                </th>

                                                <td
                                                class="border-t-0 text-center px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                                                    <span
                                                        class="px-2 py-1 bg-green-200 cursor-pointer font-medium hover:bg-green-300 transition duration-300 ease-in-out font-light text-green-600 text-xs rounded-md">ABC</span>
                                                    
                                                    <span
                                                        class="px-2 py-1 bg-gray-200 cursor-pointer font-medium hover:bg-gray-400 transition duration-300 ease-in-out font-light text-gray-600 text-xs rounded-md">ABC</span>
                                                    
                                                    <span
                                                        class="px-2 py-1 bg-red-200 cursor-pointer font-medium hover:bg-red-300 transition duration-300 ease-in-out font-light text-red-600 text-xs rounded-md">abc</span>
                                                    
                                                </td>
                                                <td
                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                                                ABC
                                                </td>

                                            </tr>
                                            </tbody>


                                        </table>
                                        </div>

                                    </div>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>

                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                            <div class="rounded-t mb-0 px-4 py-3 border-0">
                                <div class="flex flex-wrap items-center">
                                <div class="relative flex flex-col w-full px-4 max-w-full flex-grow leading-8 mb-3">
                                    <p class="mx-3 my-3 text-gray-600 text-md text-blue-700 text-xl font-semibold">
                                    Câu hỏi đã chọn
                                    </p>
                                    <div class="flex justify-between my-4 px-2 text-gray-800 font-bold">
                                    <div>
                                        <span class="mx-1">Số câu đã chọn:</span>
                                        <span class="mx-1 text-blue-700">ABC</span>
                                    </div>
                                    <div>
                                        <span class="text-red-500 bg-red-200 rounded px-2 py-1 text-sm"
                                        >Điểm số vượt quá 100</span>
                                        <span class="mx-1">Tổng điểm:</span>
                                        <span class="mx-1 text-blue-700">100/100</span>
                                    </div>
                                    </div>

                                    <div cdkDropList class="example-list">
                                    <div class="example-box">
                                        <div class="example-custom-placeholder"></div>
                                        <div class="w-full hover:bg-gray-300 flex flex-row items-center">
                                        <div class="px-4">
                                            <span class="text-gray-600 italic font-semibold text-lg">abc</span>
                                        </div>
                                        <div
                                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-left md:w-1/2">
                                            <div></div>
                                        </div>

                                        <div
                                            class="border-t-0 md:w-1/6 text-center px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                                                    <span
                                                        class="px-2 py-1 bg-green-200 cursor-pointer font-medium hover:bg-green-300 transition duration-300 ease-in-out font-light text-green-600 text-xs rounded-md">ABC</span>
                                           
                                                    <span
                                                        class="px-2 py-1 bg-gray-200 cursor-pointer font-medium hover:bg-gray-400 transition duration-300 ease-in-out font-light text-gray-600 text-xs rounded-md">ABC</span>
                                                    <span
                                                        class="px-2 py-1 bg-red-200 cursor-pointer font-medium hover:bg-red-300 transition duration-300 ease-in-out font-light text-red-600 text-xs rounded-md">abvc</span>
                                        </div>
                                        <div
                                            class="border-t-0 px-6 md:w-1/6 align-middle border-l-0 border-r-0 text-xs  p-4">
                                            ABC
                                        </div>

                                        <div
                                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                                            <input
                                            class="appearance-none border text-center text-xl rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-blue-500"
                                            type="number"
                                            min="1"
                                            max="100"
                                            autocomplete="off"
                                            tabindex="1"
                                            required/>
                                        </div>
                                        <div class="mx-2 cursor-pointer"><span class="hover:bg-red-300 text-red-700 px-2 py-1 bg-red-200 rounded"><i class="fa fa-minus"></i></span></div>

                                        </div>
                                    </div>
                                    </div>

                                </div>
                                </div>
                            </div>
                            </div>


                        </div>

                        </div>
                    </div>
                    </div>
                </div>
        )
    }
}


export default AddTestComponent;