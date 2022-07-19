import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons';
import hero_pattern_lg from '../../../img/hero-pattern-lg.png'
import { Link } from "react-router-dom";

class ExamCardComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            examCard : this.props.examCard
        }
    }

    
    render(){
        return (
            <>
            <article class="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl transition duration-700">
                <a>
                    <div class="relative img-hover-zoom">
                        <img alt="image of {{examUser?.exam.part.course.name}}" class="bg-img block h-56 w-full cursor-pointer"
                            src="https://pgdtxhoangmai.edu.vn/sach-giao-khoa-ngu-van-lop-7-tap-1/imager_7141.jpg"/>
                        {/* <i class="fa fa-circle absolute top-0 right-0 mt-4 mr-4"></i> */}
                        <FontAwesomeIcon icon = {faCircle} className = "absolute top-0 right-0 mt-4 mr-4"/>
                    </div>
                </a>
                <header class="flex items-center justify-between leading-tight p-2 md:p-3">
                    <h1 class="text-lg">
                        <Link key = {this.state.examCard.exam.id} to = {`/user/exam_detail/${this.state.examCard.exam.id}`} class="no-underline hover:underline font-bold text-xl text-gray-700 cursor-pointer">
                            {
                                this.state.examCard.exam.title
                            }
                        </Link>
                    </h1>
                </header>
                <div class="text-gray-600 text-sm p-3 pb-0 flex justify-between">
                    <p>
                    {
                        this.state.examCard.exam.beginExam
                    }
                    </p>
                    <p class="text-sm text-green-500 flex items-center">
                        <span class="mr-2"><i class="fa fa-unlock"></i></span>
                        {
                            this.state.examCard.exam.locked ? <>Hasn't exam</> : <>Completed</>
                        }
                    </p>

                </div>
                <footer class="flex items-center justify-between leading-none p-2 md:p-3">
                    <a class="flex items-center no-underline text-gray-600">
                    <img alt="image of " class="block rounded-full shadow-lg w-8 h-8" src={hero_pattern_lg}/>
                    <p class="ml-2 text-sm">
                        <>Mã lớp học: </> 
                        {
                            this.state.examCard.exam.part.course.courseCode
                        }
                    </p>
                    </a>
                    <div class="inline-block bg-gray-300 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">

                    <i class="fa fa-clock-o text-gray-700 lg:mr-1"></i>
                    <span>45 min</span>
                    </div>
                </footer>
            </article>
            </>
        )
    }
}

export default ExamCardComponent;