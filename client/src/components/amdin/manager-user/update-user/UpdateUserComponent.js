import React from "react";
import { connect } from "react-redux";
import UserService from "../../../../service/admin/service/UserService";
import { getUsers } from "../../../../service";
import { Link } from "react-router-dom";


class UpdateUserComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            view: !this.props.click,
            checkLast: false,
            checkFirst: false,
            checkEmail: false,
            existEmail: false,
            id: "",
            username: "",
            lastName: "",
            firstName: "",
            email: "",
            password: "",
            regexEmail: false,
            dataUser: {}
        }
    }

    close = () =>{
        this.setState({
            view: !this.props.click,
            regexEmail: false,
            checkLast: false,
            existEmail: false,
            id: "",
            username: "",
            lastName: "",
            firstName: "",
            email: "",
        })
    }

    async componentDidMount(){
        this.setState({
            view: this.props.click,
            id: this.props.data.id,
            username: this.props.data.username,
            lastName: this.props.data.profile.lastName,
            firstName: this.props.data.profile.firstName,
            email: this.props.data.email,
            existEmail: false,
            checkLast: false,
            regexEmail: false,
        })
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.data);
        if(nextProps.click){
            this.setState({
                view: this.props.click,
                id: nextProps.data.id,
                username: nextProps.data.username,
                lastName: nextProps.data.profile.lastName,
                firstName: nextProps.data.profile.firstName,
                email: nextProps.data.email,
                existEmail: false,
                checkLast: false,
                regexEmail: false,
            })
        }
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
                regexEmail: false,
                existEmail: false
            })
        }else if(checkingResult === null){
            this.setState({
                regexEmail: true,
                email: value,
                checkEmail: true,
                existEmail: false
            })
        }else{
            let data = false;
            await UserService.checkEmail(value, this.props.data.id)
            .then(res =>{
                data = res.data
            }).catch(error =>{
                console.log(error);
            })

        console.log(data);
        if(data){
            this.setState({
                regexEmail: false,
                email: value,
                checkEmail: true,
                existEmail: true
            })
        }else{
            this.setState({
                regexEmail: false,
                email: value,
                checkEmail: false,
                existEmail: false
            })
        }
        }
    }

    handingUpdate = async (event) =>{
        event.preventDefault();
        const user = {
            username: this.state.username,
            email: this.state.email,
            profile: {
                lastName: this.state.lastName,
                firstName: this.state.firstName
            }
        }

        await UserService.updateUser(user, this.state.id).then(res =>{
            return this.props.users.users.users.data.map((item, index) =>{
                return {
                    ...item,
                    email: "kien100398@gmail.com"
                }
            })
        })
        window.location.reload();
        // await this.props.getUsers();
        // this.props.history.push("/admin/users");
    }

    render(){
        console.log(this.props.data)
        const d = this.props.data;
        return (
            <form style={{display : this.state.view ? "block" : "none"}}>
                <div
                    class="fixed inset-0 overflow-auto z-50 outline-none focus:outline-none justify-center flex">


                    <div class="relative w-4/5 my-5 mx-auto max-w-2xl" style={{marginTop: "2.5rem"}}>
                    {/* <!--content--> */}
                    <div
                        class="border-0 rounded-lg shadow-lg relative flex flex-col w-full overflow-y-auto my-5 bg-white outline-none focus:outline-none"
                        style={{maxHeight: '90%'}}>
                        {/* <!--header--> */}
                        <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                        <h3 class="text-2xl font-semibold">Cập nhật thông tin người dùng</h3>
                        <button
                            class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                            <span
                                class="bg-transparent text-gray-700 opacity-5 h-3 w-3 text-base block outline-none focus:outline-none">
                            <i class="fa fa-close"></i>
                            </span>
                        </button>
                        </div>
                        {/* <!--body--> */}
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
                                class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-400 leading-tight outline-none focus:border-green-500"
                                id="frm-add-username"
                                type="text"
                                name="username"
                                value={this.props.data.username}
                                autocomplete="off"
                                formControlName="username"
                                disabled/>

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
                                id="frm-add-last-name" type="text" placeholder="Họ, tên đệm của bạn"
                                name="lastName"
                                value={this.state.lastName}
                                autocomplete="off"
                                formControlName="lastName" onChange={this.checkLastName}
                                required/>

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
                                id="frm-add-first-name" type="text" placeholder="Tâm"
                                autocomplete="off"
                                name="firstName"
                                value={this.state.firstName}
                                formControlName="firstName" onChange={this.checkFirstName}
                                required/>
                                
                                {(this.state.checkFirst && this.state.firstName === "") && <p class="text-red-500 text-xs italic">
                                Tên không được bỏ trống</p>}
                            </div>

                            </div>

                            <div class="-mx-3 md:flex mb-2 w-full">
                            <div class="md:w-full px-3">
                                <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                    for="email">
                                Email
                                </label>
                                <input
                                class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-green-500"
                                id="email"
                                type="email"
                                placeholder="Nhập thông tin email"
                                autocomplete="off"
                                name="email"
                                value={this.state.email}
                                formControlName="email" onChange={this.checkEmail}
                                required/>

                                {this.state.checkEmail && this.state.email === "" && <p class="text-red-500 text-xs italic"
                                >Email không được bỏ trống</p>}
                                {this.state.regexEmail && this.state.checkEmail && this.state.email !== "" && <p class="text-red-500 text-xs italic"
                                >Email không hợp lệ</p>}
                                {this.state.checkEmail && !this.state.regexEmail && this.state.email !== "" && this.state.existEmail && <p class="text-red-500 text-xs italic">
                                Email đang thuộc tài khoản khác</p>}
                            </div>
                            </div>
                            <div class="-mx-3 md:flex mb-2 w-full">
                            <div class="md:w-1/2 px-3">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    for="frm-add-password">
                                Mật khẩu
                                </label>
                                <input
                                class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-green-500"
                                id="frm-add-password" type="password" placeholder="********"
                                autocomplete="off"
                                name="password"
                                formControlName="password"/>


                            </div>
                            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
                                <label class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                                    for="confirm-password">
                                Nhập lại mật khẩu
                                </label>
                                <input
                                class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-green-500"
                                id="confirm-password" type="password" placeholder="********"
                                name="password"
                                autocomplete="off"
                                formControlName="confirmPass"/>

                            </div>


                            </div>
                            {/* <div class="pass-validation">
                            <ul>
                                <li class="text-red-500 text-xs italic"
                                >Mật khẩu cần có ít nhất 8 kí tự, bao gồm chữ cái và số, hoa, thường</li>
                                <li class="text-red-500 text-xs italic">
                                Mật khẩu không trùng khớp</li>
                            </ul>

                            </div> */}
                        </div>
                        </div>
                        {/* <!--footer--> */}
                        <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                        {!this.state.checkLast && !this.state.checkFirst && !this.state.existEmail && !this.state.regexEmail && <Link to={"/admin/users"}
                            class="bg-white shadow-md hover:bg-blue-500 hover:text-blue-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                            type="submit"
                            onClick={this.handingUpdate}
                        ><span><i class="fa fa-refresh mr-1"></i>Cập nhật</span>
                        </Link>}
                        <button
                            class="shadow-md bg-gray-600 text-gray-100 hover:bg-gray-700 hover:text-gray-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                            type="button" onClick={this.close}><span><i class="fa fa-window-close mr-1"></i>Đóng</span>
                        </button>


                        </div>
                    </div>
                    </div>


                    </div>
                </form>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        users : state.users
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        getUsers: () => dispatch(getUsers())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UpdateUserComponent);