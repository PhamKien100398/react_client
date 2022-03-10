import React from "react";
import PartService from "../../../../service/admin/service/PartService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class CreatePartComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            view: this.props.click,
        }
    }

    close = () =>{
        window.location.reload();
    }

    createPart = async (e) =>{
        e.preventDefault();

        let data = {
            'name': this.state.name
        }
        console.log(this.props.courseId);
        await PartService.createPart(this.props.courseId, data).then(res =>{
            toast.success("Thêm dữ liệu thành công!!!");
        }).catch(err =>{
            toast.error("Thêm dữ liệu thất bại!!!");
        })
    }

    checkName = (e) =>{
        if(e.target.value === ""){
            this.setState({
                name: e.target.value,
                checkName: true
            })
        }else{
            this.setState({
                name: e.target.value,
                checkName: false
            })
        }
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
                        <h3 class="text-2xl font-semibold">Tạo part mới</h3>
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
                                    for="partName">
                                Nội dung của part
                                </label>
                                <input
                                class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-blue-500"
                                id="partName"
                                type="text"
                                autocomplete="off"
                                formControlName="name"
                                placeholder="Nhập nội dung"
                                onChange={this.checkName}/>
                                {this.state.checkName && <p class="text-red-500 text-xs italic">Nội dung không được bỏ trống</p>}

                            </div>
                            </div>


                        </div>
                        </div>
                        <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                        <button
                            class="bg-white shadow-md hover:bg-blue-500 hover:text-blue-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                            type="submit" onClick = {this.createPart}><span><i class="fa fa-refresh mr-1"></i>Cập nhật</span>
                        </button>
                        <button
                            class="shadow-md bg-gray-600 text-gray-100 hover:bg-gray-700 hover:text-gray-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                            type="button" onClick = {this.close}><span><i class="fa fa-window-close mr-1"></i>Đóng</span>
                        </button>

                        </div>
                    </div>
                    </div>
                </div>
                </form>
        )
    }
}

export default CreatePartComponent;