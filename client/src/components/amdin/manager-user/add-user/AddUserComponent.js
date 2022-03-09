import React from "react";
import classNames from "classnames";
import UserService from "../../../../service/admin/service/UserService";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class AddUserComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            view: this.props.click,
            checkLast: false,
            checkFirst: false,
            checkUser: false,
            checkEmail: false,
            existEmail: false,
            username: "",
            existUsername: false,
            lastName: "",
            firstName: '',
            email: '',
            regexEmail: false,
            tab1: "text-blue-600 bg-white",
            tab2: "text-blue-600 bg-white",
            moveTab1: "block",
            moveTab2: "none",
            notify: false,
            listUser: 0
        }
    }

    close = () =>{
        window.location.reload();
    }

    enter_1 = () =>{
        this.setState({
            tab1 : "text-white bg-blue-600",
            tab2: "text-blue-600 bg-white",
            moveTab1: "block",
            moveTab2: "none"
        })
    }

    enter_2 = () =>{
        this.setState({
            tab1 : "text-blue-600 bg-white",
            tab2: "text-white bg-blue-600",
            moveTab2: "block",
            moveTab1: "none"
        })
    }

    leave = () =>{
        this.setState({
            tab1: "text-blue-600 bg-white",
            tab2: "text-blue-600 bg-white"
        })
    }

    checkLastName = (e) =>{
        if(e.target.value === ""){
            this.setState({
                lastName: e.target.value,
                checkLast: true
            })
        }else{
            this.setState({
                lastName: e.target.value,
                checkLast: false
            })
        }
    }

    componentWillReceiveProps(nextProps){
        if(nextProps.click){
            this.setState({
                view: !this.state.view,
            })
        }
    }

    checkFirstName = (e) =>{
        if(e.target.value === ""){
            this.setState({
                firstName: e.target.value,
                checkFirst: true
            })
        }else{
            this.setState({
                firstName: e.target.value,
                checkFirst: false
            })
        }
    }

    checkEmail = async (e) =>{
        const value = e.target.value;
        const regex = /^[_A-Za-z0-9-\+]+(\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\.[A-Za-z0-9]+)*(\.[A-Za-z]{2,})$/;
        const checkingResult = regex.exec(value);
        console.log(checkingResult);
        if(e.target.value === ""){
            this.setState({
                email: value,
                checkEmail: true,
                regexEmail: false
            })
        }else if(checkingResult === null){
            this.setState({
                regexEmail: true,
                email: value,
                checkEmail: true
            })
        }else{
            this.setState({
                email: value,
                checkEmail: false,
                regexEmail: false
            })
        }
    }

    handingAdd = async () =>{
        const data = {
            'username': this.state.username,
            'profile': {
                'firstName': this.state.firstName,
                'lastName': this.state.lastName
            },
            'email': this.state.email
        }

        await UserService.createUser(data).then(res =>{
            toast.success(res.data.message);
            this.setState({
                notify: true,
                listUser: this.state.listUser + 1
            })
        }).catch(error =>{
            toast.error("Thêm dữ liệu thất bại!!!");
            this.setState({
                notify: false
            })
        })
    }

    checkUsername = async (e) =>{
        let value = e.target.value;
        if(value === ""){
            this.setState({
                username: value,
                checkUser: true,
            })
        }else if(value.length < 6){
            this.setState({
                username: value,
                checkUser: true,
            })
        }else{
            this.setState({
                username: e.target.value,
                checkUser: false
            })
        }
    }

    render(){
        return (
            <form style={{display : this.state.view ? "block" : "none"}}>
                <ToastContainer/>
                <div
                    class="fixed inset-0 overflow-auto z-50 outline-none focus:outline-none justify-center flex">
                    <div class="relative w-4/5 my-5 mx-auto max-w-2xl" style={{marginTop: '2.5rem'}}>
                    {/* <!--content--> */}
                    <div
                        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full overflow-y-auto my-5 bg-white outline-none focus:outline-none"
                        style={{maxHeight: '90%'}}>
                        {/* <!--header--> */}
                        <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                        <h3 class="text-2xl font-semibold">Thêm người dùng</h3>

                        <button
                            class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                            <span
                                class="bg-transparent text-gray-700 opacity-5 h-3 w-3 text-base block outline-none focus:outline-none">
                            <i class="fa fa-close"></i>
                            </span>
                        </button>
                        </div>
                        {/* <!--body--> */}
                        <div class="flex flex-wrap px-3">
                        <div class="w-full">
                            <ul class="flex mb-0 list-none flex-wrap pt-3 pb-4 flex-row">
                            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center"><a
                                className={classNames("text-xs font-bold uppercase px-5 py-3 hover:shadow-md rounded block leading-normal cursor-pointer", this.state.tab1)}
                                onMouseEnter={this.enter_1} onMouseLeave = {this.leave}> <i
                                class="fa fa-user-circle text-base mr-1" ></i> Profile </a></li>
                            <li class="-mb-px mr-2 last:mr-0 flex-auto text-center"><a
                                className={classNames("text-xs font-bold uppercase px-5 py-3 hover:shadow-md rounded block leading-normal cursor-pointer", this.state.tab2)}
                                onMouseEnter={this.enter_2} onMouseLeave = {this.leave}> <i
                                class="fa fa-upload mr-1"></i> Import </a></li>

                            </ul>
                            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 rounded">
                            <div class="px-4 py-5 pb-0 flex-auto">
                                <div class="tab-content tab-space">
                                <div style={{display : this.state.moveTab1}}>
                                    <div class="relative">
                                    <div
                                        class="my-4 px-8 text-gray-600 text-base leading-relaxed text-left flex-row flex flex-wrap justify-center lg:justify-start items-center">
                                        <div class="-mx-3 md:flex mb-2 w-full">
                                        <div class="md:w-full px-3">
                                            <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                                for="frm-add-username">
                                            Tên đăng nhập
                                            </label>
                                            <input
                                            class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-green-500"
                                            id="frm-add-username"
                                            type="text"
                                            placeholder="Nhập thông tin username"
                                            name="username"
                                            value={this.state.username}
                                            onChange={this.checkUsername}
                                            autocomplete="off"
                                            formControlName="username"
                                            required
                                            />
                                            {this.state.checkUser && this.state.username === "" && <p class="text-red-500 text-xs italic">
                                            Username không được bỏ trống</p>}
                                            {this.state.checkUser && this.state.username.length > 0 && this.state.username.length < 6
                                            && <p class="text-red-500 text-xs italic">
                                            Username phải có ít nhất 6 kí tự</p>}
                                        </div>
                                        </div>
                                        <div class="-mx-3 md:flex mb-2 w-full">
                                        <div class="md:w-1/2 px-3">
                                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                                for="frm-add-last-name">
                                            Họ, tên đệm
                                            </label>
                                            <input
                                            class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-green-500"
                                            id="frm-add-last-name" type="text" placeholder="Họ, tên đệm"
                                            autocomplete="off"
                                            name="lastName"
                                            value={this.state.lastName}
                                            onChange={this.checkLastName}
                                            formControlName="lastName"
                                            required 
                                            />
                                            {(this.state.checkLast && this.state.lastName === "") && <p class="text-red-500 text-xs italic">
                                            Họ, tên đệm không được bỏ trống</p>}

                                        </div>
                                        <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                                for="frm-add-first-name">
                                            Tên
                                            </label>
                                            <input
                                            class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-green-500"
                                            id="frm-add-first-name" type="text" placeholder="Nhập tên"
                                            autocomplete="off"
                                            name="firstName"
                                            value={this.state.firstName}
                                            onChange={this.checkFirstName}
                                            formControlName="firstName"
                                            required/>
                                            {(this.state.checkFirst && this.state.firstName === "") && <p class="text-red-500 text-xs italic">
                                            Tên không được bỏ trống</p>}
                                        </div>

                                        </div>

                                        <div class="-mx-3 md:flex mb-2 w-full">
                                        <div class="md:w-full px-3">
                                            <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                                for="frm-add-username">
                                            Email
                                            </label>
                                            <input
                                            class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-green-500"
                                            id="frm-add-email"
                                            type="email"
                                            placeholder="Nhập thông tin email"
                                            autocomplete="off"
                                            name="email"
                                            value={this.state.email}
                                            onChange={this.checkEmail}
                                            formControlName="email"
                                            required
                                            />
                                            {this.state.checkEmail && this.state.email === "" && <p class="text-red-500 text-xs italic"
                                                >Email không được bỏ trống</p>}
                                                {this.state.regexEmail && this.state.checkEmail && this.state.email !== "" && <p class="text-red-500 text-xs italic"
                                                >Email không hợp lệ</p>}
                                                    </div>
                                        </div>
                                    </div>
                                    </div>
                                    {/* <!--footer--> */}
                                    <div class="flex items-center justify-end p-6 pb-0 border-t border-solid border-gray-300 rounded-b">
                                    {!this.state.checkEmail && !this.state.checkFirst && !this.state.existEmail && !this.state.regexEmail && <Link to={"/admin/users"}
                                        class="bg-white shadow-md hover:bg-blue-500 hover:text-blue-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                        type="submit"
                                        onClick={this.handingAdd}
                                    ><span><i class="fa fa-refresh mr-1"></i>Cập nhật</span>
                                    </Link>}
                                    <Link to="/admin/users"
                                        class="shadow-md bg-gray-600 text-gray-100 hover:bg-gray-700 hover:text-gray-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                                        type="button" onClick = {this.close}><span><i class="fa fa-window-close mr-1"></i>Đóng</span>
                                    </Link>


                                    </div>
                                </div>
                                <div style={{display : this.state.moveTab2}}>
                                    <div class="-mx-3 md:flex flex-col mb-2 w-full">
                                    <div class="md:w-full px-3">
                                        <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                        >
                                        Tải lên một file excel (*.xlsx, *.xls)
                                        </label>
                                        <input
                                            class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-blue-500"
                                            type="file"
                                            accept="image/*, .xlsx, .xls"
                                            placeholder="Choose file"
                                            autocomplete="off"
                                            required/>
                                    </div>
                                    </div>
                                    <div class="my-5 flex justify-end px-6">
                                    <button
                                        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                                        type="button">Upload
                                    </button>
                                    </div>
                                </div>
                                {this.state.listUser !== 0 && <div class="font-semibold text-xl">Danh sách người dùng thêm thành công: {this.state.listUser}</div>}
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

export default AddUserComponent;