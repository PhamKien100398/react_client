import React from "react";
import CourseService from "../../../../service/admin/service/CourseService";
import PartService from "../../../../service/admin/service/PartService";
import QuestionService from "../../../../service/admin/service/QuestionService";
import QuestionTypeService from "../../../../service/admin/service/QuestionTypeService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from "react-router-dom";

class AddQuestionComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            view: this.props.click,
            listCourse: [],
            listQuestion: [],
            listPartByCourse: [],
            listQuestionType: [],
            selected: false,
            questionText: '',
            point: 0,
            Answer: 0,
            choices: [],
            choiceText: "",
            setItem: 0,
            isCorrected: 0,
            partId: 0,
            typeCode: '',
            count: 0
        }
    }

    close = () =>{
        window.location.reload();
    }

    async componentWillReceiveProps(nextProps){
        if(nextProps.click){
            await CourseService.getCourseList().then( async response =>{
                await QuestionService.getListQuestion().then(async res =>{
                    await QuestionTypeService.getListQuestionType().then(r =>{
                        this.setState({
                            view: !this.state.view,
                            listQuestion: res.data.data,
                            listCourse: response.data,
                            listQuestionType: r.data
                        })
                    })
                })
            })
        }
    }

    removeAswer = (item) =>{
        this.setState({
            choices: this.state.choices.filter((ele) =>{
                return ele != item;
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

    addAnswer = () =>{
        this.state.choices.push({
            "choiceText": "",
            "isCorrected": 0
        });
        this.setState({
            choices: this.state.choices
        })
    }

    create = async (e) =>{
        e.preventDefault();
        const question = {
            'questionText': this.state.questionText,
            'point': this.state.point,
            'choices': this.state.choices
        }

        await QuestionService.createQuestion(question, this.state.typeCode, this.state.partId)
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

    setChoiceText = (index, e) =>{
        let value = e.target.value;
        this.setState({
            choices: this.state.choices.map((item, i) =>{
                return index === i ? {...item, "choiceText": value} : item
            })
        })
    }

    async componentDidMount(){
        await CourseService.getCourseList().then( async response =>{
            await QuestionService.getListQuestion().then(async res =>{
                await QuestionTypeService.getListQuestionType().then(r =>{
                    this.setState({
                        listQuestion: res.data.data,
                        listCourse: response.data,
                        listQuestionType: r.data
                    })
                })
            })
        })
        console.log(this.state.listQuestion);
    }

    selectAnswer = (index) =>{
        this.setState({
            choices: this.state.choices.map((item, i) =>{
                return i === index ? {...item, "isCorrected": 1} : item
            })
        })
    }

    handleChangePart = (e) => {
        this.setState({
            partId: e.target.value
        })
    }

    handlePoint = (e) =>{
        this.setState({
            point: e.target.value
        })
    }

    handleQuestionType = (value) =>{
        this.setState({
            typeCode: value

        })
    }

    render(){
        return (
            <form style={{display : this.state.view ? "block" : "none"}}>
                 <ToastContainer/>
            <div
                class="fixed inset-0 overflow-auto z-50 outline-none focus:outline-none justify-center flex">
                <div class="relative w-4/5 my-5 mx-auto max-w-4xl" style={{marginTop: '2.5rem'}}>
                {/* <!--content--> */}
                <div
                    class="border-0 rounded-lg shadow-lg relative flex flex-col w-full overflow-y-auto my-5 bg-white outline-none focus:outline-none"
                    style={{maxHeight: '90%'}}>
                    {/* <!--header--> */}
                    <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 class="text-2xl font-semibold">Thêm câu hỏi</h3>
                    <button
                        class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        // (click)="closeModal()"
                    >
                        <span
                            class="bg-transparent text-gray-700 opacity-5 h-3 w-3 text-base block outline-none focus:outline-none">
                        <i class="fa fa-close"></i>
                        </span>
                    </button>
                    </div>
                    {/* <!--body--> */}
                    <div class="flex flex-wrap px-3 modal-body">
                    <div class="w-full">
                        {/* <!--            <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">-->
                        <!--              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center"><a-->
                        <!--                class="text-xs font-bold uppercase px-5 py-3 hover:shadow-md rounded block leading-normal cursor-pointer" (click)="toggleTabs(1)"-->
                        <!--                [ngClass]="{'text-blue-600 bg-white': openTab !== 1, 'text-white bg-blue-600': openTab === 1}"> <i-->
                        <!--                class="fa fa-user-circle text-base mr-1"></i> Profile </a></li>-->
                        <!--              <li class="-mb-px mr-2 last:mr-0 flex-auto text-center"><a-->
                        <!--                class="text-xs font-bold uppercase px-5 py-3 hover:shadow-md rounded block leading-normal cursor-pointer" (click)="toggleTabs(2)"-->
                        <!--                [ngClass]="{'text-blue-600 bg-white': openTab !== 2, 'text-white bg-blue-600': openTab === 2}"> <i-->
                        <!--                class="fa fa-upload mr-1"></i> Import </a></li>-->

                        <!--            </ul>--> */}
                        <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                        <div class="px-4 py-5 pb-0 flex-auto">
                            <div class="tab-content tab-space">

                            <div class="relative">
                                <div
                                class="my-4 px-8 text-gray-600 text-base leading-relaxed text-left flex-row flex flex-wrap justify-center lg:justify-start items-center">
                                <div class="-mx-3 md:flex mb-2 w-full">
                                    <div class="md:w-1/2 px-3">
                                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    >
                                        Môn học
                                    </label>
                                    <select onChange={this.select}
                                            formControlName="course" name="course"
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
                                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    >
                                        Nội dung
                                    </label>
                                    <select
                                            formControlName="part" name="part"
                                            class="block appearance-none w-full bg-gray-200 py-2 px-3 my-1 mt-3 pr-4 rounded shadow leading-tight focus:outline-none"
                                            value={this.state.partId} onChange={this.handleChangePart}>
                                        <option value="-1">-- Nội dung môn học --</option>
                                            {
                                                this.state.listPartByCourse.map((items, index) =>{
                                                    return <option key = {index} value={items.id}>{items.name}</option>
                                                })
                                            }

                                    </select>

                                    </div>

                                </div>
                                <div class="-mx-3 md:flex mb-2 w-full">
                                    <div class="md:w-full px-3">
                                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    >
                                        Điểm
                                    </label>
                                    <select formControlName="difficultyLevel"
                                            class="block appearance-none w-full bg-gray-200 py-2 px-3 my-1 mt-3 pr-4 rounded shadow leading-tight focus:outline-none"
                                            value = {this.state.point} onChange = {this.handlePoint}>
                                        <option value="-1" class="text-center">-- Lựa chọn điểm câu hỏi --</option>
                                        <option value="5" class="text-green-600 text-center">5pts</option>
                                        <option value="10" class="text-gray-600 text-center">10pts</option>
                                        <option value="15" class="text-red-600 text-center">15pts</option>
                                    </select>
                                    </div>

                                </div>
                                <div class="-mx-3 md:flex mb-2 w-full">
                                    <div class="md:w-full px-3">
                                    <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    >
                                        Kiểu câu hỏi
                                    </label>
                                    <div class="flex">
                                        {this.state.listQuestionType.map(items =>{
                                            return (
                                                <div class="radio-type flex-1">
                                                    <div class="radio-btn">
                                                        <input type="radio" id={"id_"+items.id} formControlName="questionType"
                                                            name="questionType" value="" onClick={() => this.handleQuestionType(items.typeCode)}/>
                                                        <label for={"id_"+items.id}>{items.description}</label>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                    </div>
                                </div>
                                <div class="-mx-3 md:flex mb-2 w-full">
                                    <div class="md:w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                    >
                                        Nội dung câu hỏi
                                    </label>
                                    <input
                                        class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-green-500"
                                        id="frm-add-username"
                                        type="text"
                                        placeholder= {"Nhập câu hỏi"}
                                        // value={this.state.setItem === index ? this.state.choiceText : ""}
                                        name = "questionText" 
                                        onChange={(e) => this.setState({questionText: e.target.value})}
                                        autocomplete="off"
                                        formControlName="questionText" 
                                        required/>
                                    </div>
                                </div>

                                <div class="-mx-3 md:flex my-2 w-full">
                                    <div class="md:w-full px-3">
                                    <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                    >
                                        Đáp án
                                    </label>
                                    <div>
                                        {/* <div>
                                            <div class="flex">
                                                <div class="radio-type flex-1">
                                                <div class="radio-btn">
                                                    <input type="radio" id="T" formControlName="choices"
                                                        name="choices" value="True"/>
                                                    <label for="T">True</label>
                                                </div>
                                                </div>

                                                <div class="radio-type flex-1">
                                                <div class="radio-btn">
                                                    <input type="radio" id="False" formControlName="choices"
                                                        name="choices" value="F"/>
                                                    <label for="False">False</label>
                                                </div>
                                                </div>
                                            </div>

                                        </div> */}
                                        <div>
                                            <div class="flex flex-col">
                                                {this.state.choices.map((item, index) =>{
                                                    return (
                                                        <div class="w-full my-2">
                                                            <input
                                                                class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-green-500"
                                                                id="frm-add-username"
                                                                type="text"
                                                                placeholder= {"Nhập đáp án "+index}
                                                                // value={this.state.setItem === index ? this.state.choiceText : ""}
                                                                name = "choiceText" 
                                                                onChange={(e) => this.setChoiceText(index, e)}
                                                                autocomplete="off"
                                                                formControlName="questionText" 
                                                                required/>

                                                            <div class="flex my-2">
                                                                <div class="radio-type">
                                                                    <div class="radio-btn" style={{width: "220px"}}>
                                                                        <input type="radio" name="mcChoices" id={"mc-"+index} onClick = {() => this.selectAnswer(index)}/>
                                                                        <label for={"mc-"+index}>Set is corrected</label>
                                                                    </div>
                                                                </div>

                                                                <div class="radio-type">
                                                                    <div class="radio-btn" style={{width: "180px"}}>
                                                                        <button type="button" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded"
                                                                        onClick = {() =>this.removeAswer(item)}s>Remove
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    )
                                                })}
                                                <button type="button" class="mx-auto my-3 py-2 w-32 bg-blue-300 text-blue-700 hover:bg-blue-400 rounded-md focus:outline-none hover:text-blue-800 shadow-md"
                                                onClick = {this.addAnswer}>Thêm đáp
                                                án
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                {/* <!--footer--> */}
                                <div class="flex items-center justify-end p-6 pb-0 border-t border-solid border-gray-300 rounded-b">
                                <button
                                    class="bg-white shadow-md hover:bg-blue-500 hover:text-blue-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1"
                                    type="submit"
                                    onClick = {this.create}><span><i class="fa fa-question-circle mr-1"></i>Tạo câu hỏi</span>
                                </button>
                                <button
                                    class="shadow-md bg-gray-600 text-gray-100 hover:bg-gray-700 hover:text-gray-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-2 rounded outline-none focus:outline-none mr-1 mb-1"
                                    type="button" onClick={this.close}
                                ><span><i class="fa fa-window-close mr-1"></i>Đóng</span>
                                </button>

                                </div>

                            </div>
                            {this.state.count !== 0 && <div class="font-semibold text-xl">Danh sách người dùng thêm thành công: {this.state.count}</div>}
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </form>
        )
    }
}

export default AddQuestionComponent;