import React, {useEffect} from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import {faCalendar} from '@fortawesome/free-solid-svg-icons'
import {faCalendarTimes} from '@fortawesome/free-solid-svg-icons'
import LeftSideComponent from '../left_side/LeftSideComponent';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import FooterComponent from '../../footer/FootComponent';
import examService from '../../../service/user/exam/examService'
import socket from '../../../socket';
import Header from "../header/Header";
import {connect} from 'react-redux'
import {getExamQuestion, getExamResult} from '../../../service/index'

class ExamDetailComponent extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            examUser : {},
            examDetail: {},
            course: {},
            part : {},
            user: {}
        }

    }

    start = async e =>{
        e.preventDefault();
        await this.props.getExamQuestion(this.props.match.params.id);
        setTimeout(()=>{
            console.log(this.props.question);
            this.props.history.push(`/user/exam_detail/${this.props.match.params.id}/start`);
        }, 500)
    }

    clickJoin = () =>{
        const roomName = this.state.course.courseCode;
        const userName = this.state.user.username;
        console.log(roomName);
        socket.emit('BE-check-user', { roomId: roomName, userName });
    }

    viewResult = async () =>{
        await this.props.getExamResult(this.props.match.params.id);
        this.props.history.push(`/user/exam_detail/${this.props.match.params.id}/result`)
    }

    componentDidMount(){
        examService.getExamDetailById(this.props.match.params.id).then(res => {
            this.setState({
                examUser: res.data,
                examDetail : res.data.exam,
                course: res.data.exam.part.course,
                part: res.data.exam.part,
                user: res.data.user
            });
        })
    }

    componentDidUpdate(){
        socket.on('FE-error-user-exist', ({ error }) => {
            if (!error) {
              const roomName = this.state.course.courseCode;
              const userName = this.state.user.username;
              const origin = window.location.origin;
      
              sessionStorage.setItem('user', userName);
            //   window.location.href = `/room/${roomName}`
            // this.props.history.push(`/room/${roomName}`);
            window.open(`${origin}/room/${roomName}`, '_blank', 'toolbar=0,location=0,menubar=0');
            // window.location.replace(`/room/${roomName}`);
            } else {
            //   setErr(error);
            //   setErrMsg('User name already exist');
                console.log("loi")
            }
          });
    }

    render(){
        console.log(this.state.user);
        return (
            <div class="font-sans antialiased h-screen bg-gray-100 w-full flex flex-row">
            <LeftSideComponent/>
                    <div class="w-full bg-gray-100 py-0 overflow-hidden overflow-y-scroll" style = {{position : "relative"}}>
                        <Header/>
                        <div class="px-5 py-4 m-6">
                        <div class="flex text-center flex-col w-full h-auto items-center">
                  <h2 class="text-center my-2 mt-5 font-bold  px-2 py-1 bg-blue-300 rounded">{this.state.examDetail.title}</h2>
                  <div class="flex flex-row flex-wrap justify-center">
                    <div class="my-2 mx-3 px-2 py-1 bg-gray-300 rounded"><span class="mx-2">
                    <FontAwesomeIcon icon = {faBook}/></span>Lớp học: {this.state.course.courseCode}</div>
                    <div class="my-2 mx-3 px-2 py-1 bg-gray-300 rounded">Học phần: {this.state.part.name}</div>
                  </div>
                  <div class="my-2 px-2 py-1 bg-gray-300 rounded"><span class="mx-2"><FontAwesomeIcon icon = {faCalendar}/></span>Thời gian kiểm tra bắt đầu: {this.state.examDetail.beginExam}</div>
                    <div class="my-2 px-2 py-1 bg-gray-300 rounded"><span class="mx-2"><FontAwesomeIcon icon = {faCalendarTimes}/></span>Thời gian kiểm tra kết thúc: {this.state.examDetail.finishExam}</div>
                    <div class="my-2 px-2 py-1 bg-gray-300 rounded mb-8">Tổng thời gian thi: {this.state.examUser.remainingTime} second</div>
                    
                    {
                        this.state.examUser.isFinished ? <div>
                            <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer" onClick={this.viewResult}>View Result</a>
                            <div class="my-8 bg-red-600 px-3 py-2 uppercase text-white font-semibold">This exam
                            was end!
                            </div>
                        </div> :
                        <div class="flex justify-center my-5">
                        <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mx-1" onClick = {this.start}>
                        Bắt đầu
                        </a>
                        <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer mx-1" onClick = {this.clickJoin}>
                        Camera
                        </a>
                        {/* <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer">
                        Resume
                        </a> */}
                    </div>
                    }
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
        question : state.question,
        examResult : state.examResult
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getExamQuestion: (id) => dispatch(getExamQuestion(id)),
        getExamResult: (id) => dispatch(getExamResult(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ExamDetailComponent);