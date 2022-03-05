import login from '../../img/bg-login.jpg'
import React from 'react'
import className from 'classnames'
import {connect} from 'react-redux'
import {authenticateUser, setMail, getUsers} from '../../service/index'
import { Link } from 'react-router-dom'

class LoginComponent extends React.Component{
    constructor(props){
        super(props);
    
        this.state = this.innitState;
    
        this.changeTab = this.changeTab.bind(this);
        this.blackHome = this.blackHome.bind(this);
      }

      innitState = {
        active: true,
        username: "",
        password: "",
        error: "",
        message: "",
        isInputValid : false,
        email: ""
      }
    
      changeTab(){
        this.setState({
          active : !this.state.active
        })
      }

      blackHome(){
        this.props.history.push("/")
      }

      blackLogin = () =>{
        this.setState({
          active : !this.state.active
        })
      }

      validateUser = async e=>{
        e.preventDefault();
        if(this.state.password == null || this.state.password == ""){
          this.setState({
            message: "Ô này không bỏ trống!"
          })
          return;
        }
       await this.props.authenticateUser(this.state.username, this.state.password);
        console.log("oke");
        // if(this.props.auth.isLogg.isLogIned){
        //   console.log(this.props.auth.isLogg.user)
        //   return this.props.history.push("/user/dashboard");
        // }else{
        //   // this.resetLogin();
        //   this.setState({
        //     "error": "Mật khẩu hoặc password không chính xác. Đăng nhập thất bại!"
        //   })
        // }
        setTimeout(() =>{
          if(this.props.auth.isLogg.isLogIned){
            console.log(this.props.auth)
            const {roles} = this.props.auth.isLogg.user;
            roles.map(async (role) =>{
              if(role === "ROLE_ADMIN"){
                return this.props.history.push("/admin/users");
              }else if(role === "ROLE_STUDENT"){
                return this.props.history.push("/user/dashboard");
              }
            })
          }else{
            // this.resetLogin();
            this.setState({
              error: "Mật khẩu hoặc password không chính xác. Đăng nhập thất bại!"
            })
          }
        }, 500)
      }

      testMail = (e)=>{
        let mail = e.target.value;
        if(mail == null || mail == ""){
          this.setState({
            isInputValid : false,
            email: "empty"
          })
          return;
        }
        const regexp = /^\w+@[a-zA-Z]{3,}\.com$/;
        const checkMail = regexp.exec(mail);
        if(checkMail != null){
          this.setState({
            isInputValid : true,
            email: mail
          })
        }else{
          this.setState({
            isInputValid : false,
            email: "not_matche"
          })
        }
      }

      handingMail = (e)=>{
        e.preventDefault();
        this.props.setMail(this.state.email)
        setTimeout(() =>{
          if(this.props.auth.isLogg.isLogIned){
            console.log("Gui mail thanh cong")
          }else{
            console.log("Gui mail khong thanh cong")
          }
        })
      }

      resetLogin = () =>{
        this.setState(() =>this.innitState);
      }

      textChange = (event) =>{
        this.setState({
          [event.target.name]:event.target.value
        })
      }
    render(){
        return (
        <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
          <div className="flex fixed max-w-5xl w-5/6 sm:w-4/5 bg-white rounded-sm shadow-2xl">
            <div className="hidden md:block w-6/12 md:w-5/12">
              <img src={login} alt="hình nền login" className="rounded-sm inset-0 h-full w-full object-cover object-center"/>
            </div>
            <div className="w-full md:w-7/12 text-left">
              <div className={className('modal-content px-3 py-2 md:px-4 md:py-1 lg:px-6 lg:py-3', {'active':!this.state.active})} >
                <div className="flex justify-between">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold md:px-1 lg:px-6 lg:py-2 lg:pb-3">Đăng nhập hệ thống
                  </div>
  
                  <div className="modal-close cursor-pointer z-50 md:-mx-1">
                      <a>
                        <svg className="fill-current text-gray-500 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" width="18"
                            height="18"
                            viewBox="0 0 18 18">
                          <path
                            d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                          </path>
                        </svg>
                      </a>
                  </div>
                </div>
  
                <div className="md:px-1 lg:px-6 text-wrap text-gray-600 pb-4 font-semibold md:pr-12">
                  <p>Website hỗ trợ đánh giá khả năng học tập qua hình thức kiểm tra online các môn lập trình.</p>
                </div>
                <form style = {{maxWidth : "450px", margin : "0"}}>
                  <div class="form-group md:mx-1 lg:mx-6 w-full sm:w-4/5 md:w-2/3 pb-3">
                    <div class="flex flex-row justify-between">
                      <label for="username" class="text-gray-500 text-sm md:text-xs font-semibold select-none">Tên đăng
                      nhập*</label>
                      {
                        this.state.message && this.state.username == "" && <div class="alert alert-danger text-red-600">{this.state.message}</div>
                      }
                    </div>
                    <input className="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-green-500"
                      id="username" type="text" placeholder="Username" autocomplete="off"
                      name="username" onChange = {this.textChange} value = {this.state.username}/>
                  </div>
  
                  <div class="form-group md:mx-1 lg:mx-6 w-full sm:w-4/5 md:w-2/3 pb-3 relative">
                    <div class="flex flex-row justify-between">
                      <label for="password" class="text-gray-500 text-sm md:text-xs font-semibold select-none">Mật khẩu*</label>
                      {
                        this.state.message && this.state.password == "" && <div class="alert alert-danger text-red-600">{this.state.message}</div>
                      }
                    </div>
                    <input
                      class="appearance-none border rounded-md w-full py-2 px-3 mt-1 text-gray-600 font-bold bg-gray-200 leading-tight outline-none focus:border-green-500"
                      id="password" type="password" placeholder="**********"
                      name="password" onChange = {this.textChange} value = {this.state.password}/>
  
                  </div>
  
                  <div class="flex justify-between  lg:flex md:px-1 lg:px-6 w-full sm:w-4/5 md:w-2/3 pb-3 mt-2 mx-2">
                    <label
                      class="remember-me flex items-center block relative pl-6 mb-3 cursor-pointer select-none text-gray-700 text-sm md:text-xs">Lưu
                      mật khẩu
                      <input type="checkbox" class="absolute opacity-0 cursor-pointer h-0 w-0 rounded-md" checked/>
                      <span
                        class="check-mark absolute top-0 left-0 h-5 w-5 bg-gray-300 rounded-md hover:bg-gray-200 border border-green-600"></span>
                      </label>
                      <a className="text-sm md:text-xs cursor-pointer text-green-500 hover:text-green-600 focus:underline font-bold mr-4 lg:-mr-6 outline-none select-none"
                      onClick = {this.changeTab}>Quên mật khẩu?</a>
                  </div>
  
                  <div class="flex justify-start items-center">
                    <button
                    class="bg-blue-500 hover:bg-blue-400 focus:outline-none text-white rounded-md px-1 px-6 py-2 ml-3 lg:ml-8 mb-3 shadow-xl transition duration-500 ease-in-out"
                    onClick = {this.validateUser}>
                    Đăng nhập
                    </button>
                  </div>
                  <div class="form-group">
                    {
                      this.state.error && <div
                        class="alert alert-danger ml-8 text-red-600"
                        role="alert">
                        {this.state.error}
                      </div>
                    }
                  </div>
                </form>
                <div class="mt-3 mb-4 flex justify-start ">
                  <a
                  class="text-xs text-gray-500 hover:text-gray-600 focus:underline font-semibold select-none cursor-pointer"
                  onClick = {this.blackHome}>&larr; Quay lại trang chủ</a>
                </div>
              </div>
              <div className={className('modal-content px-3 py-2 md:px-4 md:py-1 lg:px-6 lg:py-3', {'active':this.state.active})} >
                  <div class="flex justify-between">
                  <div class="text-xl md:text-2xl lg:text-3xl font-bold md:px-1 lg:px-6 lg:py-2 lg:pb-3">Khôi phục mật khẩu
                  </div>
                  <div class="modal-close cursor-pointer z-50 md:-mx-1">
                    <a>
                      <svg class="fill-current text-gray-500 hover:text-gray-700" xmlns="http://www.w3.org/2000/svg" width="18"
                        height="18"
                        viewBox="0 0 18 18">
                        <path
                          d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
                        </path>
                      </svg>
                    </a>
                  </div>
                </div>
                <div class="md:px-1 lg:px-6 text-wrap text-gray-600 pb-4 font-semibold md:pr-12">
                    <p>Website hỗ trợ đánh giá khả năng học tập qua hình thức kiểm tra trắc nghiệm.</p>
                </div>
                <form style = {{maxWidth : "100%", margin: "0"}}>
                  <div class="form-group md:mx-1 lg:mx-6 w-full sm:w-4/5 md:w-2/3 pb-3">
                    <div class="flex flex-row justify-between">
                      <label for="email" class="text-gray-500 text-sm md:text-xs font-semibold select-none">Email*</label>
                    </div>
  
  
                    <input
                      class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-green-500"
                      id="email" type="text" placeholder="Email" autocomplete="off"
                      name="email"
                      formControlName="email"
                      required
                     onChange = {this.testMail}/>
  {/* ^\w+@[a-zA-Z]{3,}\.com$ */}
                    {
                      !this.state.isInputValid && this.state.email == "empty" && <p class="text-red-500 text-xs italic">Email không được bỏ trống!</p>
                    }

                    {
                      !this.state.isInputValid && this.state.email == "not_matche" && <p class="text-red-500 text-xs italic">Định dạng email không phù hợp!</p>
                    }
                  </div>

                  {
                    this.state.isInputValid ? <button
                    class="bg-blue-500 hover:bg-blue-400 focus:outline-none text-white rounded-md px-1 px-6 py-2 ml-3 lg:ml-8 mb-3 shadow-xl transition duration-500 ease-in-out"
                    onClick = {this.handingMail}>
                    Khôi phục ngay
                  </button> : <button
                    class="bg-blue-500 hover:bg-blue-400 focus:outline-none text-white rounded-md 
                    px-1 px-6 py-2 ml-3 lg:ml-8 mb-3 shadow-xl transition duration-500 ease-in-out cursor-not-allowed">
                    Khôi phục ngay
                  </button>
                  }
                </form>
                <div class="mt-3 mb-4 flex justify-start">
                  <a onClick = {this.blackLogin}
                    class="cursor-pointer text-xs text-gray-500 hover:text-gray-600 focus:underline font-semibold select-none">&larr; Trang đăng nhập</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        )
    }
}

const mapStateToProps = state =>{
  return {
    auth: state.auth,
    users : state.users
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    authenticateUser: (username, password) => dispatch(authenticateUser(username, password)),
    setMail: (email) => dispatch(setMail(email)),
    getUsers: () => dispatch(getUsers())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);