import React from "react";
import { Link } from "react-router-dom";
import CourseService from "../../../../service/admin/service/CourseService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CreateCourceComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            view: this.props.click,
            courseCode: '',
            courseName: '',
            checkCode: false,
            checkName: false,
            file: '',
            count: 0
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.click){
            this.setState({
                view: !this.state.view,
            })
        }
    }

    create = async (e) =>{
        e.preventDefault();
        const data = {
            'courseCode': this.state.courseCode,
            'name': this.state.courseName,
            'imgUrl': this.state.file
        }

        await CourseService.createCourse(data).then(res =>{
            toast.success("Thêm dữ liệu thành công!!!");
            this.setState({
                count: this.state.count + 1
            })
        }).catch(err =>{
            toast.error("Thêm dữ liệu thất bại!!!");
            this.setState({
                count: this.state.count
            })
        })
    }


    checkCourceCode = (e) =>{
        if(e.target.value === ""){
            this.setState({
                courseCode: e.target.value,
                checkCode: true
            })
        }else{
            this.setState({
                courseCode: e.target.value,
                checkCode: false
            })
        }
    }

    choiceFile = (event) =>{
        this.setState({
            file: event.target.value
        })
    }

    checkCourseName = (e) =>{
        if(e.target.value === ""){
            this.setState({
                courseName: e.target.value,
                checkName: true
            })
        }else{
            this.setState({
                courseName: e.target.value,
                checkName: false
            })
        }
    }

    close = () =>{
        window.location.reload();
    }

    render() {
        return (
            <form style={{display : this.state.view ? "block" : "none"}}>
                 <ToastContainer/>
                        <div
                            class="fixed inset-0 overflow-auto z-50 outline-none focus:outline-none justify-center flex">

                            <div class="relative w-4/5 my-5 mx-auto max-w-2xl" style={{marginTop: '2.5rem'}}>
                            
                            <div
                                class="border-0 rounded-lg shadow-lg relative flex flex-col w-full overflow-y-auto my-5 bg-white outline-none focus:outline-none"
                                style={{maxHeight: '90%'}}>
                                
                                <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                                <h3 class="text-2xl font-semibold">Tạo môn học mới</h3>
                                <button
                                    class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                                    <span
                                        class="bg-transparent text-gray-700 opacity-5 h-3 w-3 text-base block outline-none focus:outline-none">
                                    <i class="fa fa-close"></i>
                                    </span>
                                </button>
                                </div>
                                
                                <div class="relative">
                                <div
                                    class="my-4 px-8 text-gray-600 text-base leading-relaxed text-left flex-row flex flex-wrap justify-center lg:justify-start items-center">
                                    <div class="-mx-3 md:flex mb-2 w-full">
                                    <div class="md:w-full px-3">
                                        <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                            for="course-code">
                                        Mã môn học
                                        </label>
                                        <input
                                        class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-blue-500"
                                        id="course-code"
                                        type="text"
                                        autocomplete="off"
                                        onChange = {this.checkCourceCode}
                                        formControlName="courseCode"
                                        placeholder="Nhập mã môn học"/>
                                        {this.state.checkCode && <p class="text-red-500 text-xs italic">Mã môn học không được bỏ trống</p>}

                                    </div>

                                    </div>

                                    <div class="-mx-3 md:flex mb-2 w-full">
                                    <div class="md:w-full px-3">
                                        <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                            for="course-name">
                                        Tên môn học
                                        </label>
                                        <input
                                        class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-blue-500"
                                        id="course-name"
                                        type="text"
                                        placeholder="Nhập tên môn học"
                                        autocomplete="off"
                                        onChange = {this.checkCourseName}
                                        formControlName="courseName"
                                        required/>
                                        {this.state.checkName && <p class="text-red-500 text-xs italic">Tên môn học không được bỏ trống</p>}


                                    </div>
                                    </div>

                                </div>
                                <div class="my-4 px-8 text-gray-600 text-base leading-relaxed text-left flex-row flex flex-wrap justify-center lg:justify-start items-center">
                                    <input
                                    class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-blue-500"
                                    type="file"
                                    accept="image/*"
                                    placeholder="Chọn hình ảnh"
                                    onChange = {this.choiceFile}
                                    autocomplete="off"
                                    required/>
                                </div>

                                </div>
                                <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                                <button
                                    class="bg-white shadow-md hover:bg-blue-500 hover:text-blue-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                    type="submit" onClick={this.create}><span><i class="fa fa-refresh mr-1"></i>Cập nhật</span>
                                </button>
                                <Link to="/admin/cource"
                                    class="shadow-md bg-gray-600 text-gray-100 hover:bg-gray-700 hover:text-gray-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                    type="button" onClick = {this.close}><span><i class="fa fa-window-close mr-1"></i>Đóng</span>
                                </Link>


                                </div>
                            </div>
                            </div>
                            {this.state.count !== 0 && <div class="font-semibold text-xl">Danh sách người dùng thêm thành công: {this.state.count}</div>}

                        </div>
                    </form>
        )
    }
}

export default CreateCourceComponent;