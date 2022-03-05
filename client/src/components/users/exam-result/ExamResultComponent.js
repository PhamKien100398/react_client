import React from 'react'
import ResultComponent from '../../shared/result/ResultComponent'
import './ExamResult.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck, faEdit, faSpellCheck} from '@fortawesome/free-solid-svg-icons'
import LeftSideComponent from '../left_side/LeftSideComponent';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import FooterComponent from '../../footer/FootComponent';
import { Link } from 'react-router-dom'
import logo from '../../../img/logo.png'
import classNames from 'classnames'
import {connect} from 'react-redux'
import {getExamResult} from '../../../service/index'
import examService from '../../../service/user/exam/examService'
import { logoutUser } from "../../../service";



class ExamResultComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            active: true,
            tabOne : false,
            tabTwo: true,
            currentIndex : 0,
            startIndex : 1,
            endIndex: 5,
            examResult: this.props.examResult.examResult
        }
    }

    logout = ()=>{
        this.props.logoutUser();
    }

    prePagination = () =>{
        if(this.state.startIndex === 1){
            return;
        }
        this.setState({
            startIndex : this.state.startIndex - 5,
            endIndex : this.state.endIndex - 5
        })
    }

    nextPagination = (choiceList) =>{
        if(this.state.endIndex === choiceList.length){
            return;
        }
        this.setState({
            startIndex : this.state.startIndex + 5,
            endIndex : this.state.endIndex + 5
        })
    }

    clickOne = () =>{
        this.setState({
            tabOne : false,
            tabTwo: true
        })
    }

    pageIndex = (index) =>{
        this.setState({
            currentIndex: index
        })
    }

    clickTwo = () =>{
        this.setState({
            tabOne : true,
            tabTwo: false
        })
    }

    async componentDidMount(){
        await this.props.getExamResult(this.props.match.params.id);
        if(window.location.pathname === `/user/exam_detail/${this.props.match.params.id}/result`){
            this.setState({
                active: !this.state.active,
                examResult: this.props.examResult.examResult
            })
        }
    }
    render(){
        console.log(this.state.examResult);
        if(this.state.examResult === ""){
            return "";
        }
        const {choiceList, totalPoint} = this.state.examResult;
        const {choices, question} = choiceList[this.state.currentIndex];
        return(
            <div class="font-sans antialiased h-screen bg-gray-100 w-full flex flex-row">
                <aside class="lg:w-1/5 bg-gray-700 text-white">
                    <div class="my-3">
                        <div class="px-6 my-6 mb-6 text-center">
                            <img style = {{width : "200px", height: "160px"}} src={logo} alt="Lập trình online"/>
                            Xin chào, Pham Kien
                        </div>
                        <div className = {classNames('h-auto', {'active':!this.state.active})}>
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
                        <div className = {classNames({'active':this.state.active})}>
                            <div className = "h-auto">
                            <Link to = "/user/dashboard" routerLinkActive="border-l-4 border-gray-400 bg-blue-700 text-white"
                                class="flex py-3 px-6 cursor-pointer hover:bg-blue-500 transition text-gray-300"><span class="mr-3 w-6"><svg
                                class="h-6 w-6 fill-current mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path
                                fill-rule="evenodd"
                                d="M3.889 3h6.222a.9.9 0 0 1 .889.91v8.18a.9.9 0 0 1-.889.91H3.89A.9.9 0 0 1 3 12.09V3.91A.9.9 0 0 1 3.889 3zM3.889 15h6.222c.491 0 .889.384.889.857v4.286c0 .473-.398.857-.889.857H3.89C3.398 21 3 20.616 3 20.143v-4.286c0-.473.398-.857.889-.857zM13.889 11h6.222a.9.9 0 0 1 .889.91v8.18a.9.9 0 0 1-.889.91H13.89a.9.9 0 0 1-.889-.91v-8.18a.9.9 0 0 1 .889-.91zM13.889 3h6.222c.491 0 .889.384.889.857v4.286c0 .473-.398.857-.889.857H13.89C13.398 9 13 8.616 13 8.143V3.857c0-.473.398-.857.889-.857z"
                                ></path></svg></span>Trang chủ</Link>
                                <a routerLinkActive="border-l-4 border-gray-400 bg-blue-700 text-white"
                                    class="flex py-3 px-6 cursor-pointer hover:bg-blue-500 transition text-gray-300" onClick = {this.clickOne}><span class="mr-3 w-6"><FontAwesomeIcon icon={faSpellCheck} class = "h-6 w-6"/></span>Trắc nghiệm</a>
                                <a routerLinkActive="border-l-4 border-gray-400 bg-blue-700 text-white"
                                    class="flex py-3 px-6 cursor-pointer hover:bg-blue-500 transition text-gray-300" onClick = {this.clickTwo}><span class="mr-3 w-6"><FontAwesomeIcon icon = {faEdit} class = "h-6 w-6"/></span>Tự luận</a>
                            </div>
                            {/* <div class="w-5/6 m-auto flex items-center space-x-1 space-y-1 flex-wrap">
                                {
                                    questions.map((item, index) =>{
                                        if((index + 1) > this.state.endIndex || index + 1 < this.state.startIndex){
                                            return;
                                        }
                                        return (
                                            <a href="javascript:void(0);" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
                                            onClick={() =>this.pageIndex(index)} style={{backgroundColor: item?.selected ? "gray": ""}}>
                                                {index + 1}
                                            </a>
                                        )
                                    })

                                    // questions.filter((question, index) => {
                                    //     if((index + 1) < this.state.endIndex){
                                    //         return (
                                    //             <a href="#" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    //             {index + 1}
                                    //             </a>
                                    //         );
                                    //     }
                                    // })
                                    
                                }
                            </div> */}
                            <div class="w-5/6 my-2 mx-auto flex justify-between">
                                {/* <a href="javascript:void(0);" className="w-20 h-10 text-gray-500 bg-white border border-gray-300 hover:bg-gray-300 hover:text-gray-700 text-sm font-medium rounded-lg flex flex-wrap content-center justify-center" style = {{marginLeft : "0.25rem"}}
                                onClick={this.prePagination} disabled = {this.state.startIndex === 1 ? true : false}>
                                    Previous
                                </a>
                                <a href="javascript:void(0);" class="w-20 h-10 text-gray-500 bg-white border border-gray-300 hover:bg-gray-300 hover:text-gray-700 text-sm font-medium rounded-lg flex flex-wrap content-center justify-center"
                                onClick={this.nextPagination}>
                                    Next
                                </a> */}
                                {/* <button className="w-20 h-10 text-gray-500 bg-white border border-gray-300 hover:bg-gray-300 hover:text-gray-700 text-sm font-medium rounded-lg flex flex-wrap content-center justify-center" style = {{marginLeft : "0.25rem"}}
                                    onClick={this.prePagination} disabled = {this.state.startIndex === 1 ? true : false}>
                                        Previous
                                    </button>
                                <button className="w-20 h-10 text-gray-500 bg-white border border-gray-300 hover:bg-gray-300 hover:text-gray-700 text-sm font-medium rounded-lg flex flex-wrap content-center justify-center"
                                onClick={this.nextPagination} disabled = {questions.length < this.state.endIndex ? true : false}>
                                    Next
                                </button> */}
                            </div>
                        </div>
                    </div>
                </aside>


                    <div class="w-full bg-gray-100 py-0 overflow-hidden overflow-y-scroll" style = {{position : "relative"}}>
                        <div class="flex flex-wrap items-center justify-between mx-4 my-4 overflow-hidden">
                            <div class="text-gray-300 text-xl cursor-pointer bg-blue-500 hover:bg-blue-600 px-2 rounded shadow-2xl">
                                {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                                </svg> */}
                                <i class="fa fa-compress"></i>
                            </div>
                            <div class="group text-gray-600 text-2xl cursor-pointer flex items-center">
                                <Link to={"/login"} class="text-base" onClick={this.logout}><FontAwesomeIcon icon = {faSignOutAlt}/>Log out</Link>
                            </div>
                        </div>
                        <div class="px-5 py-4 m-6">
                        <div class="w-full py-5">
                <div class="capitalize text-center mb-3 font-bold text-3xl text-blue-600">Your result</div>
                {
                    0 <= totalPoint < 50 ? <ResultComponent background = "#ff4e42" totalPoint = {totalPoint}/>
                    : 50 <= totalPoint < 80 ? <ResultComponent background = "#ffa400" totalPoint = {totalPoint}/>
                    : 80 <= totalPoint <= 100 && <ResultComponent background = "#0cce6b" totalPoint = {totalPoint}/>
                }
                <div class="flex justify-center">
                        <div class="inline-flex bg-gray-300 mt-5 py-2 mx-auto rounded-full ">
                        <span class="mx-5 fail flex items-center">0-49</span>
                        <span class="mx-5 average flex items-center">50-79</span>
                        <span class="mx-5 pass flex items-center">80-100</span>
                    </div>
                </div>
                {/* <div className = {classNames("my-12 mx-4 flex flex-row", {"tab":this.state.tabOne})}>
                    <div class="flex flex-col mx-4 mx-2 mb-3 pb-2">
                        <div class="w-48 bg-gray-300 rounded-md ml-0 flex flex-col  items-center">
                            <div class="font-bold text-gray-600 text-xl my-2">Question 1</div>
                            <div class="text-gray-600 text-sm">Difficult:
                                <span class="px-2 py-1 my-2 rounded-md bg-green-300 text-green-600 text-sm font-semibold">Easy</span>
                            </div>
                            <div class="py-2 text-gray-600">15 pts
                            </div>
                        </div>
                        <div class="w-full text-center font-bold pr-2 bg-red-300 text-red-600 mt-2 py-2 rounded-md">Correct</div>
                    </div>
                    <div class="bg-gray-300 rounded-md shadow-lg px-8 py-6 w-full" style = {{height : "400px"}}>
                        <div class="my-4"><span class="font-bold">Q 1: </span>
                            <p class="select-none"></p>
                        </div>
                        <div class="h-auto">
                            <div class="flex flex-col">
                                <div class="w-full my-1">
                                    <div class="flex">
                                        <div class="radio-type w-full flex items-center">
                                            <span class="text-2xl pr-2 w-8">
                                                <i class="fa fa-check text-green-600"></i>
                                            </span>
                                            <div class="radio-btn w-full">
                                                <input type="radio" name="mcChoices-{{ques.id}}" id="mc-{{choice.id}}" disabled="true"/>
                                                <label class="select-none" for="mc-{{choice.id}}">Tiếng Pháp</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <div class="w-full my-1">
                                    <div class="flex">
                                        <div class="radio-type w-full flex items-center">
                                            <span class="text-2xl pr-2 w-8">
                                                <i class="fa fa-check text-green-600"></i>
                                                <FontAwesomeIcon icon = {faCheck} class = "text-green-600"/>
                                            </span>
                                            <div class="radio-btn w-full">
                                                <input type="radio" name="mcChoices-{{ques.id}}" id="mc-{{choice.id}}" disabled="true"/>
                                                <label class="select-none" for="mc-{{choice.id}}">Tiếng Pháp</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <div class="w-full my-1">
                                    <div class="flex">
                                        <div class="radio-type w-full flex items-center">
                                            <span class="text-2xl pr-2 w-8">
                                                <i class="fa fa-check text-green-600"></i>
                                            </span>
                                            <div class="radio-btn w-full">
                                                <input type="radio" name="mcChoices-{{ques.id}}" id="mc-{{choice.id}}" disabled="true"/>
                                                <label class="select-none" for="mc-{{choice.id}}">Tiếng Pháp</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="flex flex-col">
                                <div class="w-full my-1">
                                    <div class="flex">
                                        <div class="radio-type w-full flex items-center">
                                            <span class="text-2xl pr-2 w-8">
                                                <i class="fa fa-check text-green-600"></i>
                                            </span>
                                            <div class="radio-btn w-full">
                                                <input type="radio" name="mcChoices-{{ques.id}}" id="mc-{{choice.id}}" disabled="true"/>
                                                <label class="select-none" for="mc-{{choice.id}}">Tiếng Pháp</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="w-5/6 m-auto flex items-center justify-center space-x-1 space-y-1 flex-wrap mt-3">
                                {
                                    questions.map((item, index) =>{
                                        if((index + 1) > this.state.endIndex || index + 1 < this.state.startIndex){
                                            return;
                                        }
                                        return (
                                            <a href="javascript:void(0);" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
                                            onClick={() =>this.pageIndex(index)} style={{backgroundColor: item?.selected ? "gray": ""}}>
                                                {index + 1}
                                            </a>
                                        )
                                    })

                                    // questions.filter((question, index) => {
                                    //     if((index + 1) < this.state.endIndex){
                                    //         return (
                                    //             <a href="#" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    //             {index + 1}
                                    //             </a>
                                    //         );
                                    //     }
                                    // })
                                    
                                }
                                <a href="javascript:void(0);" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                                </a>
                                <a href="javascript:void(0);" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    1
                                </a>
                                <a href="javascript:void(0);" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    2
                                </a>
                                <a href="javascript:void(0);" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    3
                                </a>
                                <a href="javascript:void(0);" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    4
                                </a>
                                <a href="javascript:void(0);" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    5
                                </a>

                                <a href="javascript:void(0);" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                                </a>
                            </div>
                    </div>
                    
                </div> */}
                <div className = {classNames("my-12 mx-4 flex flex-row", {"tab":this.state.tabOne})}>
                    <div class="w-48 bg-gray-300 mx-4 px-2 py-2 h-32 rounded-md ml-0 flex flex-col select-none items-center">
                        <div class="font-bold text-gray-600 text-xl my-2">Question 1</div>
                            <div class="text-gray-600 text-sm">Difficult:
                            <span class="px-2 py-1 my-2 rounded-md bg-green-300 text-green-600 text-sm font-semibold">Easy</span>
                            {/* <ng-container [ngSwitch]="ques.difficultyLevel">
                                <ng-template [ngSwitchCase]="'EASY'">
                                <span class="px-2 py-1 my-2 rounded-md bg-green-300 text-green-600 text-sm font-semibold">Easy</span>
                                </ng-template>
                                <ng-template [ngSwitchCase]="'MEDIUM'">
                                <span
                                    class="px-2 py-1 my-2 rounded-md bg-gray-400 text-gray-600 text-sm font-semibold">Medium</span>
                                </ng-template>
                                <ng-template [ngSwitchCase]="'HARD'">
                                <span
                                    class="px-2 py-1 my-2 rounded-md bg-red-300 text-red-600 text-sm font-semibold">Hard</span>
                                </ng-template>
                            </ng-container> */}
                        </div>
                        <div class="py-2 text-gray-600">10 pts</div>
                    </div>
                    <div class="bg-gray-300 rounded-md shadow-lg px-8 py-6 w-full" style = {{height : "450px"}}>
                        <div class=""><span class="font-bold">Q {this.state.currentIndex + 1}: </span>
                            <p class="select-none">{question.questionText}</p>
                        </div>
                        <div class="h-auto">
                            <div class = "flex justify-between my-2">
                                <div class="my-3 font-semibold text-blue-600 select-none">Select your answer<span
                                >s</span>
                                </div>
                                <div class="inline-flex">
                                    <button class="bg-gray-400 hover:bg-gray-600 text-blue-600 font-bold py-0 px-4 rounded-lg">
                                        Next
                                    </button>
                                </div>
                            </div>
                        {/* <!--        Answer--> */}
                            {/* <div class="flex">
                                <div class="radio-type flex-1">
                                    <div class="radio-btn">
                                        <input type="radio" id="true-{{choice.id}}"
                                                name="choicesTF-{{ques.id}}" value="True"/>
                                        <label class="select-none" for="true-{{choice.id}}">True</label>
                                    </div>
                                </div>

                                <div class="radio-type flex-1">
                                    <div class="radio-btn">
                                        <input type="radio" id="false-{{choice.id}}"
                                                name="choicesTF-{{ques.id}}" value="False"/>
                                        <label class="select-none" for="false-{{choice.id}}">False</label>
                                    </div>
                                </div>
                            </div> */}
                            {
                                 choices.map((item, index) =>(
                                    <div class="flex flex-col">
                                        <div class="w-full my-1">
                                            <div class="flex">
                                                <div class="radio-type w-full flex items-center">
                                                    {
                                                        item.isRealCorrect === 1 ? <span class="text-2xl pr-2 w-8">
                                                            <i class="fa fa-check text-green-600"></i>
                                                        </span> : (item.choice.isCorrected === 1 && item.isRealCorrect === 0) ? <span class="text-2xl pr-2 w-8">
                                                            <i class="fa fa-times text-red-600" aria-hidden="true"></i>
                                                        </span> : <span class="text-2xl pr-2 w-8"></span>
                                                    }
                                                    <div class="radio-btn w-full">
                                                        <input type="radio" name="mcChoices" id="mc" checked = {(item.choice.isCorrected === 1) ? true : false}/>
                                                        <label class="select-none" for="mc">{item.choice.choiceText}</label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                 ))
                            }
                            {/* <div class="flex flex-col">
                                <div class="w-full my-1">
                                    <div class="flex">
                                        <div class="radio-type w-full flex items-center">
                                            <span class="text-2xl pr-2 w-8">
                                                <i class="fa fa-check text-green-600"></i>
                                            </span>
                                            <div class="radio-btn w-full">
                                                <input type="radio" name="mcChoices-{{ques.id}}" id="mc-{{choice.id}}" disabled="true"/>
                                                <label class="select-none" for="mc-{{choice.id}}">Tiếng Pháp</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                            {/* {
                                choices.map((item, index) =>(
                                    <div class="flex flex-col">
                                        <div class="w-full my-1">
                                            <div class="flex">
                                                <div class="radio-type w-full">
                                                    <div class="radio-btn">
                                                        <input type="radio" class="form-radio" name={"mcChoices-"+item.id} id ={"mc-"+item.id} checked = {item.isCorrected === 1 ? true : false}/> 
                                                        <label class="select-none" for={"mc-"+item.id}>{item.choiceText}</label>
                                                    </div>
                                                </div>

                                            </div>

                                        </div>
                                    </div>
                                ))
                            } */}
                            {/* <div class="flex flex-col">
                                <div class="w-full my-1">
                                    <div class="flex my-1">
                                        <div class="radio-type w-full">
                                            <div class="check-box-btn">
                                                <input type="checkbox" name="msChoices-{{choice.id}}"
                                                        id="ms-{{choice.id}}"/>
                                                <label for="ms-{{choice.id}}" class="check-box select-none">Mot bong hong</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div> */}
                        </div>
                        <div class="w-5/6 m-auto flex items-center justify-center space-x-1 space-y-1 flex-wrap mt-3">
                                {/* {
                                    questions.map((item, index) =>{
                                        if((index + 1) > this.state.endIndex || index + 1 < this.state.startIndex){
                                            return;
                                        }
                                        return (
                                            <a href="javascript:void(0);" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
                                            onClick={() =>this.pageIndex(index)} style={{backgroundColor: item?.selected ? "gray": ""}}>
                                                {index + 1}
                                            </a>
                                        )
                                    })

                                    // questions.filter((question, index) => {
                                    //     if((index + 1) < this.state.endIndex){
                                    //         return (
                                    //             <a href="#" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    //             {index + 1}
                                    //             </a>
                                    //         );
                                    //     }
                                    // })
                                    
                                } */}
                                <a href="javascript:void(0);" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
                                onClick={this.prePagination}>
                                    <i class="fa fa-angle-double-left" aria-hidden="true"></i>
                                </a>
                                {
                                    choiceList.map((item, index) =>{
                                        if((index + 1) > this.state.endIndex || index + 1 < this.state.startIndex){
                                            return;
                                        }
                                        return (
                                            <a href="javascript:void(0);" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
                                            onClick={() =>this.pageIndex(index)}>
                                                {index + 1}
                                            </a>
                                        )
                                    })

                                    // questions.filter((question, index) => {
                                    //     if((index + 1) < this.state.endIndex){
                                    //         return (
                                    //             <a href="#" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white">
                                    //             {index + 1}
                                    //             </a>
                                    //         );
                                    //     }
                                    // })
                                    
                                }
                                <a href="javascript:void(0);" class="w-10 h-10 flex flex-wrap content-center justify-center text-gray-700 bg-gray-200 rounded-md hover:bg-blue-400 hover:text-white"
                                onClick={() => this.nextPagination(choiceList)}>
                                    <i class="fa fa-angle-double-right" aria-hidden="true"></i>
                                </a>
                            </div>
                    </div>
                </div>
                <div className = {classNames("my-12 mx-4 flex flex-row", {"tab":this.state.tabTwo})}>
                    <div class="w-48 bg-gray-300 mx-4 px-2 py-2 h-32 rounded-md ml-0 flex flex-col select-none items-center">
                        <div class="font-bold text-gray-600 text-xl my-2">Question 2</div>
                            <div class="text-gray-600 text-sm">Difficult:
                            <span class="px-2 py-1 my-2 rounded-md bg-green-300 text-green-600 text-sm font-semibold">Easy</span>
                            {/* <ng-container [ngSwitch]="ques.difficultyLevel">
                                <ng-template [ngSwitchCase]="'EASY'">
                                <span class="px-2 py-1 my-2 rounded-md bg-green-300 text-green-600 text-sm font-semibold">Easy</span>
                                </ng-template>
                                <ng-template [ngSwitchCase]="'MEDIUM'">
                                <span
                                    class="px-2 py-1 my-2 rounded-md bg-gray-400 text-gray-600 text-sm font-semibold">Medium</span>
                                </ng-template>
                                <ng-template [ngSwitchCase]="'HARD'">
                                <span
                                    class="px-2 py-1 my-2 rounded-md bg-red-300 text-red-600 text-sm font-semibold">Hard</span>
                                </ng-template>
                            </ng-container> */}
                        </div>
                        <div class="py-2 text-gray-600">15 pts</div>
                    </div>
                    <div class="bg-gray-300 rounded-md shadow-lg px-8 py-6 w-full" style = {{height : "450px"}}>
                        <div class=""><span class="font-bold">Q 2: </span>
                            <p class="select-none">Ngôn ngữ nào phổ biến nhất hiện nay?</p>
                        </div>
                        <div class="h-auto">
                            <div class = "flex justify-between my-2">
                                <div class="my-3 font-semibold text-blue-600 select-none">Writing your answer<span
                                >s</span>
                                </div>
                                <div class="inline-flex">
                                    <button class="bg-gray-400 hover:bg-gray-600 text-blue-600 font-bold py-0 px-4 rounded-l">
                                        Prev
                                    </button>
                                    <button class="bg-gray-400 hover:bg-gray-600 text-blue-600 font-bold py-0 px-4 rounded-r">
                                        Next
                                    </button>
                                </div>
                            </div>
                        {/* <!--        Answer--> */}
                            {/* <div class="flex">
                                <div class="radio-type flex-1">
                                    <div class="radio-btn">
                                        <input type="radio" id="true-{{choice.id}}"
                                                name="choicesTF-{{ques.id}}" value="True"/>
                                        <label class="select-none" for="true-{{choice.id}}">True</label>
                                    </div>
                                </div>

                                <div class="radio-type flex-1">
                                    <div class="radio-btn">
                                        <input type="radio" id="false-{{choice.id}}"
                                                name="choicesTF-{{ques.id}}" value="False"/>
                                        <label class="select-none" for="false-{{choice.id}}">False</label>
                                    </div>
                                </div>
                            </div> */}

                            <div class="flex flex-col">
                                <div class="w-full my-1">
                                    <div class="flex">
                                        <label class="block text-left m-2" style = {{width: "100%"}}>
                                            {/* <textarea
                                                class="form-textarea mt-1 block w-full" style = {{height: "210px"}}
                                                rows="3"
                                                placeholder="Enter some long form content."
                                            ></textarea> */}
                                            <textarea class="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none" style = {{height: "250px"}} rows="4"></textarea>
                                        </label>
                                    </div>

                                </div>
                            </div>
                            {/* <div class="flex flex-col">
                                <div class="w-full my-1">
                                    <div class="flex my-1">
                                        <div class="radio-type w-full">
                                            <div class="check-box-btn">
                                                <input type="checkbox" name="msChoices-{{choice.id}}"
                                                        id="ms-{{choice.id}}"/>
                                                <label for="ms-{{choice.id}}" class="check-box select-none">Mot bong hong</label>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
                        </div>
                        {/* <FooterComponent/> */}
                    </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        examResult : state.examResult
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getExamResult: (id) => dispatch(getExamResult(id)),
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamResultComponent);