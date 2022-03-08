import React from "react";
import { Link } from "react-router-dom";
import ExamService from "../../../../service/admin/service/ExamService";
import NavSideBarComponent from "../../nav-sidebar/NavSideBarComponent";
import NavbarComponent from "../../navbar/NavbarComponent";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class DetailTestComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            cancel: false,
            okeCancel: false
        }
    }

    cancelTest = () =>{
        this.setState({
            cancel: !this.state.cancel
        })
    }

    yesCancelTest = async () =>{
        await ExamService.cancelExam(this.props.match.params.id).then((res) =>{
            if(res.data){
                toast.success("Hủy dữ liệu thành công!!!");
                this.setState({
                    okeCancel: true,
                    cancel: !this.state.cancel
                })
            }else{
                toast.error("Đề thi đã kết thúc. Hủy dữ liệu thất bại!!!");
                this.setState({
                    okeCancel: false,
                    cancel: !this.state.cancel
                })
            }
            
        }).catch((err) =>{
            toast.error("Hủy dữ liệu thất bại!!!");
            this.setState({
                okeCancel: false,
                cancel: this.state.cancel
            })
        })
    }

    render() {
        return (
            <div>
                <ToastContainer/>
                <NavSideBarComponent/>
                <div class="relative md:ml-64 bg-gray-200">
                    <NavbarComponent/>
                    <div class="bg-gray-600 md:pt-32 pb-32 pt-12">
                        <div class="px-4 md:px-10 mx-auto w-full">
                            <Link to="/admin/test" class="text-white cursor-pointer hover:underline"><i
                            class="fa fa-arrow-left"></i><span class="mx-2">Quay về danh sách test</span></Link>
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
                                    Chi tiết bài test <span class="text-gray-500">#ABC</span>
                                    </h3>
                                    {!this.state.okeCancel && <button class="px-2 py-1 rounded bg-gray-300 text-gray-700 hover:bg-gray-400"
                                    onClick = {this.cancelTest}>
                                    Huỷ bài test
                                    </button>}
                                    {this.state.okeCancel && <span class="px-2 py-1 rounded bg-red-300 text-red-700">Đã huỷ</span>}
                                </div>
                                <hr class="border w-full my-3"/>
                                <div class="flex flex-wrap flex-col w-full">

                                    <div class="flex flex-wrap flex-row">
                                    <div class="relative w-full px-4 max-w-full flex-flow flex-basis">

                                        <p class="mx-3 my-3 text-gray-600 text-md text-blue-700 text-xl font-semibold">Đối tượng tham
                                        gia</p>

                                        <div class="-mx-3 md:flex mb-2 w-full">
                                        <div class="md:w-full px-3">
                                            <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                            >
                                            Khoá thực tập
                                            </label>
                                            <select name="intake"
                                                    class="block appearance-none w-full bg-gray-200 py-2 px-3 my-1 mt-3 pr-4 rounded shadow leading-tight focus:outline-none">
                                            <option >ABC</option>

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
                                            >
                                            Tiêu đề
                                            </label>

                                            <div><span class="px-2 py-1 bg-blue-200 text-blue-700 rounded">ABC</span></div>
                                        </div>
                                        </div>

                                        <div class="-mx-3 md:flex mb-2 w-full">
                                        <div class="md:w-1/2 px-3">
                                            <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold my-2"
                                            >
                                            Môn học
                                            </label>
                                            <select
                                            tabindex="2"
                                            name="course"
                                            class="block appearance-none w-full bg-gray-200 py-2 px-3 my-1 mt-3 pr-4 rounded shadow leading-tight focus:outline-none">
                                            <option 
                                            >ABC</option>

                                            </select>

                                        </div>
                                        <div class="md:w-1/2 px-3">
                                            <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold my-2"
                                            >
                                            Nội dung
                                            </label>
                                            <select
                                            name="part"
                                            class="block appearance-none w-full bg-gray-200 py-2 px-3 my-1 mt-3 pr-4 rounded shadow leading-tight focus:outline-none">
                                            <option >ABC</option>

                                            </select>

                                        </div>
                                        </div>

                                    </div>
                                    <hr class="border w-full my-3"/>
                                    <div class="relative w-full px-4 max-w-full flex-flow flex-basis">

                                        <p class="mx-3 my-3 text-gray-600 text-md text-blue-700 text-xl font-semibold">Thiết lập thời
                                        gian</p>
                                        <div class="-mx-3 md:flex mb-2 w-full justify-around">
                                        <div class="md:w-1/3 px-3">
                                            <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                            >
                                            Thời gian mở
                                            </label>
                                            <div>ABC</div>
                                        </div>

                                        <div class="md:w-1/3 px-3">
                                            <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                            >
                                            Thời gian đóng
                                            </label>
                                            <div>ABC</div>
                                        </div>
                                        <div class="md:w-1/3 px-3">
                                            <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                            >
                                            Thời gian làm bài (phút)
                                            </label>
                                            <div>ABC</div>
                                        </div>
                                        </div>
                                    </div>
                                    <hr class="border w-full my-3"/>
                                    <div class="relative w-full px-4 max-w-full flex-flow flex-basis">
                                        <p class="mx-3 my-3 text-gray-600 text-md text-blue-700 text-xl font-semibold">Thiết lập khác</p>
                                        <div class="-mx-3 md:flex mb-2 w-full">
                                        <div class="w-64 px-3">
                                            <div class="radio-type flex-1">
                                            <div class="radio-btn">
                                                <input type="checkbox" id="shuffle"
                                                    name="shuffle"
                                                />

                                                <label for="shuffle">Trộn câu hỏi</label>
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
                                    </div>
                                    <div class="example-list">
                                    <div class="example-box">
                                        <div class="w-full hover:bg-gray-300 flex flex-row items-center">
                                        <div class="px-4 w-20">
                                            <span class="text-gray-600 italic font-semibold text-lg">ABC</span>
                                        </div>
                                        <div
                                            class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs p-4 text-left md:w-3/5">
                                            <div></div>
                                        </div>

                                        <div
                                            class="border-t-0 md:w-1/6 px-6 align-middle border-l-0 border-r-0 text-xs  p-4">
                                                    <span
                                                        class="px-2 py-1 bg-green-200 cursor-pointer font-medium hover:bg-green-300 transition duration-300 ease-in-out font-light text-green-600 text-xs rounded-md">ABC</span>
                                           
                                                    <span
                                                        class="px-2 py-1 bg-gray-200 cursor-pointer font-medium hover:bg-gray-400 transition duration-300 ease-in-out font-light text-gray-600 text-xs rounded-md">ANC</span>
                                            
                                                    <span
                                                        class="px-2 py-1 bg-red-200 cursor-pointer font-medium hover:bg-red-300 transition duration-300 ease-in-out font-light text-red-600 text-xs rounded-md">ABC</span>
                                            
                                        </div>
                                        <div
                                            class="border-t-0 px-6 md:w-1/6 align-middle text-center border-l-0 border-r-0 text-xs  p-4">
                                            ABC
                                        </div>

                                        <td
                                            class="border-t-0 px-6 align-middle text-right border-l-0 border-r-0 text-xs  p-4">
                                            <div class="text-xl">ABC</div>
                                        </td>

                                        </div>
                                    </div>
                                    </div>


                                </div>

                                </div>
                            </div>
                            </div>


                        </div>

                        </div>
                        {this.state.cancel && <div
                        class="fixed inset-0 overflow-auto z-50 outline-none focus:outline-none justify-center flex">
                        <div class="relative w-4/5 my-5 mx-auto max-w-2xl" style={{marginTop: '2.5rem'}}>
                        <div
                            class="border-0 rounded-lg shadow-lg relative flex flex-col w-full overflow-y-auto my-5 bg-white outline-none focus:outline-none"
                            style={{maxHeight: '90%'}}>
                            <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                            <h3 class="text-2xl font-semibold">Huỷ bài test</h3>
                            <button
                                class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                                <span
                                    class="bg-transparent text-gray-700 opacity-5 h-3 w-3 text-base block outline-none focus:outline-none">
                                <i class="fa fa-close"></i>
                                </span>
                            </button>
                            </div>
                            <div class="relative p-3">
                            <div
                                class="my-4 px-8 text-gray-600 text-base leading-relaxed text-left flex-row flex flex-wrap justify-center lg:justify-start items-center">
                                Bài test này sẽ được huỷ?
                            </div>
                            </div>
                            <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                            <button
                                class="bg-white shadow-md hover:bg-red-500 hover:text-red-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                type="button" onClick = {this.yesCancelTest}><span><i class="fa fa-trash mr-1"></i>Có, huỷ ngay</span>
                            </button>
                            <button
                                class="shadow-md bg-gray-600 text-gray-100 hover:bg-gray-700 hover:text-gray-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                type="button" onClick={this.cancelTest}><span><i class="fa fa-window-close mr-1"></i>Để xem lại</span>
                            </button>


                            </div>
                        </div>
                        </div>
                    </div>}
                    </div>
                </div>
            </div>       
        )
    }
}

export default DetailTestComponent;
