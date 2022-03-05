import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMinus } from '@fortawesome/free-solid-svg-icons';
import ExamCardComponent from "../exam-card/ExamCardComponent";
import LeftSideComponent from '../../users/left_side/LeftSideComponent'
import FooterComponent from '../../footer/FootComponent';
// import {connect} from 'react-redux'
import examService from '../../../service/user/exam/examService'
import Header from "../header/Header";


class DashboardComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            exams: []
        }
    }

    // logout = ()=>{
    //     this.props.logoutUser();
    // }

    componentDidMount(){
        // getListExamByUser();
        examService.getExam().then(res =>{
            this.setState({
                exams : res.data
            })
        });
    }

    render(){
        this.state.exams.map((exam) =>{
            console.log(exam.id);
        })
        return (
            <div class="font-sans antialiased h-screen bg-gray-100 w-full flex flex-row">
            <LeftSideComponent/>
            <div class="w-full bg-gray-100 py-0 overflow-hidden overflow-y-scroll" style = {{position : "relative"}}>
                <Header/>
                <div class="px-5 py-4 m-6">
                    <div class="py-3">
                        <div class="flex justify-between items-center mb-3 px-2">
                            <div class="current-exam lg:text-2xl font-semibold text-gray-800">
                            <h2 class="select-none list-title title-coming flex items-center"><FontAwesomeIcon icon = {faMinus} style={{color: "rgb(27, 209, 233)", margin:"10px"}}/>Bài thi sắp tới <span class="mx-2"> ({this.state.exams.length})</span></h2>
                            </div>
                        </div>
                        <div class="list-current-exam flex flex-wrap w-full">
                                {
                                    this.state.exams.map((exam) =>{
                                        return <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                    <ExamCardComponent examCard = {exam}/>
                                                </div>
                                                {/* <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                    <Skeleton/>
                                                </div>
                                                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                                    <Skeleton/>
                                                </div> */}
                            
                                    })
                                }
                                {
                                    this.state.exams.length == 0 && <p class="mx-10 text-gray-700 text-sm">None of new exam is found!</p>
                                }
                                <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                    {/* <SkeletonComponent/> */}
                                </div>
                        </div>
                    </div>
                    {/* <div class="py-3">
                        <div class="flex justify-between items-center mb-3 px-2">
                            <div class="current-exam lg:text-2xl font-semibold text-gray-800">
                            <h2 class="select-none list-title title-coming flex items-center"><FontAwesomeIcon icon = {faMinus} style={{color: "rgb(27, 209, 233)", margin:"10px"}}/>Bài thi đã thực hiện <span class="mx-2"> (1)</span></h2>
                            </div>
                            
                        </div>
                        <div class="list-current-exam flex flex-wrap w-full">
                            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                <ExamCardComponent/>
                            </div>

                            <p class="mx-10 text-gray-700 text-sm">None of new exam is found!</p>
                            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                <SkeletonComponent/>
                            </div>
                            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                <SkeletonComponent/>
                            </div>
                            <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
                                <SkeletonComponent/>
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* <FooterComponent/> */}
            </div>
        </div>

        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         auth : state.auth
//     }
// }

// const mapDispatchToProps = (dispatch) =>{
//     return {
//         logoutUser: () => dispatch(logoutUser())
//     }
// }

export default DashboardComponent;