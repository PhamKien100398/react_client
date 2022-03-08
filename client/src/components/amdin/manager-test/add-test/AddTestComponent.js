import React from "react";
import NavSideBarComponent from "../../nav-sidebar/NavSideBarComponent";
import NavbarComponent from "../../navbar/NavbarComponent";
import IntakeService from "../../../../service/admin/service/IntakeService";
import CourseService from "../../../../service/admin/service/CourseService";
import QuestionService from "../../../../service/admin/service/QuestionService";
import PartService from "../../../../service/admin/service/PartService";
import ExamService from "../../../../service/admin/service/ExamService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import moment from 'moment';
import { Link } from "react-router-dom";

class AddTestComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            listIntake: [],
            listCourse: [],
            listQuestion: [],
            listPartByCourse: [],
            listCheckBoxQuestion: [],
            totalPoint: 0,
            intakeId: 0,
            title: '',
            partId: 0,
            beginExam: new Date(),
            finishExam: new Date(),
            durationExam: 0,
            count: 0
        }
    }

    async componentDidMount(){
        await IntakeService.getIntakeList().then(async r =>{
            await CourseService.getCourseList().then(async response =>{
                this.setState({
                    listCourse: response.data,
                    listIntake: r.data
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

    selectIntake = (event) =>{
        this.setState({
            intakeId: event.target.value
        })
    }

    selectPart = async (event) =>{
        let value = event.target.value;
        await QuestionService.getListQuestionByPart(value)
        .then(res =>{
            this.setState({
                selected: true,
                listQuestion: res.data.data,
                partId: value
            })
        })
    }

    getStartTime = (event) =>{
        this.setState({
            beginExam: event.target.value
        })
    }

    getDurationExam = (event) =>{
        this.setState({
            durationExam: event.target.value
        })
    }

    getTille = (event) =>{
        this.setState({
            title: event.target.value
        })
    }

    getFinishExam = (event) =>{
        this.setState({
            finishExam: event.target.value
        })
    }


    createTest = async () =>{
        const exam = {
            'title': this.state.title,
            'beginExam': moment(this.state.beginExam).format('YYYY-MM-DD HH:mm:ss'),
            'finishExam': moment(this.state.finishExam).format('YYYY-MM-DD HH:mm:ss'),
            'durationExam': this.state.durationExam,
            'questionData': JSON.stringify(this.state.listCheckBoxQuestion)
        }

        await ExamService.createExam(exam, this.state.intakeId, this.state.partId, true)
            .then(res =>{
                toast.success("Thêm dữ liệu thành công!!!");
                this.setState({
                    count: this.state.count + 1
                })
            }).catch(error =>{
                toast.error("Thêm dữ liệu thất bại!!!");
                this.setState({
                    count: this.state.count
                })
            })
    }

    checkBoxQuestion = (item, event) =>{
        if(this.state.listCheckBoxQuestion.length > 0){

            let data = this.state.listCheckBoxQuestion;
            let length = data.length;
            data.map((i, index) =>{
                return i.questionId === item.id ? data.splice(index, 1) : i;
            })

            if(length === data.length){
                console.log(true);
                data.push({
                    'questionId': item.id,
                    'point': item.point
                })
                this.setState({
                    listCheckBoxQuestion: data,
                    totalPoint: this.state.totalPoint + item.point
                })
            }else{
                this.setState({
                    listCheckBoxQuestion: data,
                    totalPoint: this.state.totalPoint - item.point
                })
            }
        }else{
            this.state.listCheckBoxQuestion.push({
                'questionId': item.id,
                'point': item.point
            })
            this.setState({
                listCheckBoxQuestion: this.state.listCheckBoxQuestion,
                totalPoint: this.state.totalPoint + item.point
            })
        }
    }

    render(){
        console.log(this.state.beginExam);
        return (
            <div>
                <ToastContainer/>
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
                                        <div>
                                            <button
                                            class="bg-blue-200 shadow-md hover:bg-blue-300 text-blue-600 border border-gray-400 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                            type="submit" onClick={this.createTest}
                                            ><span><i class="fa fa-plus-square mr-1"></i>Tạo bài test</span>
                                            </button>
                                            <Link to ="/admin/test"
                                            class="shadow-md bg-gray-600 text-gray-100 hover:bg-gray-700 hover:text-gray-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                            type="submit"><span><i class="fa fa-window-close mr-1"></i>Đóng</span>
                                        </Link>
                                        </div>
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
                                                Lớp học
                                                </label>
                                                <select onChange={this.selectIntake}
                                                formControlName="intake"
                                                name="intake"
                                                class="block appearance-none w-full bg-gray-200 py-2 px-3 my-1 mt-3 pr-4 rounded shadow leading-tight focus:outline-none">
                                                <option value="-1">-- please choose intake --</option>
                                                {
                                                    this.state.listIntake.map((item, index) =>{
                                                        return (
                                                            <option value={item.id}>{item.name}</option>
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
                                                onChange={this.getTille}
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
                                                <select onChange={this.selectPart}
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
                                                onChange = {this.getStartTime}
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
                                                onChange = {this.getFinishExam}
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
                                                onChange = {this.getDurationExam}
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
                                                    Điểm
                                                </th>
                                                <th
                                                    class="row-header row-type px-6 bg-gray-100 text-gray-600 align-middle  border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0  font-semibold text-left">
                                                    Loại câu
                                                </th>
                                                </tr>
                                                </thead>

                                                <tbody>
                                                    {
                                                        this.state.listQuestion.map((item, index) =>{
                                                            return (
                                                            <tr class="border hover:bg-gray-300">

                                                                <td
                                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md text-gray-500  p-4">
                                                                <input type="checkbox" name="noneCheck" onChange = {(event) => this.checkBoxQuestion(item, event)}/>
                                                                </td>

                                                                <th
                                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-left">
                                                                <div>{item.questionText}</div>
                                                                </th>

                                                                <td
                                                                class="border-t-0 text-center px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
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
                                                                <td
                                                                class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs  p-4 italic font-semibold">
                                                                {item.questionType.description}
                                                                </td>

                                                            </tr>
                                                            )
                                                        })
                                                    }
                                                </tbody>


                                            </table>
                                            </div>

                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>

                                <div class="px-4 flex justify-between my-4 text-gray-800 font-bold">
                                    <div class="px-4">
                                        <span class="mx-1">Số câu đã chọn:</span>
                                        <span class="mx-1 text-blue-700">{this.state.listCheckBoxQuestion.length}</span>
                                    </div>
                                    <div class="px-4">
                                        {this.state.totalPoint > 100 && <span class="text-red-500 bg-red-200 rounded px-2 py-1 text-sm"
                                            >Điểm số vượt quá 100</span>}
                                        <span class="mx-1">Tổng điểm:</span>
                                        <span class="mx-1 text-blue-700">{this.state.totalPoint}</span>
                                    </div>
                                </div>
                                {this.state.count !== 0 && <div class="px-4 my-4 font-semibold text-xl flex justify-center">Danh sách thêm bài kiểm tra thành công: {this.state.count}</div>}
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