import login from '../../img/bg-login.jpg'
import React from 'react'
import className from 'classnames'
import {connect} from 'react-redux'
import {updatePassword} from '../../service/index'

class ResetPaswordComponent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      isInputValid : true,
      errorMessage: "",
      name: "",
      password: "",
      confirmPassword: ""
    }

    this.blackLogin = this.blackLogin.bind(this);
  }

  blackLogin(){
    this.props.history.push("/login");
  }

  changePassword = (e) =>{
    e.preventDefault();
    const search = window.location.search;
    const token = new URLSearchParams(search).get("token");
    this.props.updatePassword(this.state.password, token);
    console.log("Oke");
    setTimeout(()=>{
      if(this.props.auth.isLoggedIn){
        return this.props.history.push("/login");
      }else{
        // this.resetLogin();
        this.setState({
          "error": "Mật khẩu hoặc password không chính xác. Đăng nhập thất bại!"
        })
      }
    })
  }

  check = (event) =>{
    let checkPassword = event.target.value;
    const regexp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
    if(event.target.name === "password"){
      const checkingResult = regexp.exec(checkPassword);
      if(checkingResult !== null){
        this.setState({
          isInputValid : true,
          name : "password",
          password : checkPassword
        })
      }else{
        this.setState({
          isInputValid : false,
          name : "password"
        })
      }
    }

    if(event.target.name === "confirmPassword"){
      const checkingResult = regexp.exec(checkPassword);
      if(checkingResult !== null){
        this.setState({
          isInputValid : true,
          name : "confirmPassword",
          confirmPassword: checkPassword
        })
      }else{
        this.setState({
          isInputValid : false,
          name : "confirmPassword",
          confirmPassword: checkPassword
        })
      }
    }
  }

    render(){
        return (
            <div className="bg-gray-100 w-screen h-screen flex justify-center items-center">
          <div className="flex fixed max-w-5xl w-5/6 sm:w-4/5 bg-white rounded-sm shadow-2xl">
            <div className="hidden md:block w-6/12 md:w-5/12">
              <img src={login} alt="hình nền login" className="rounded-sm inset-0 h-full w-full object-cover object-center"/>
            </div>
            <div className="w-full md:w-7/12 text-left">
              <div className={className('modal-content px-3 py-2 md:px-4 md:py-1 lg:px-6 lg:py-3')} >
                <div className="flex justify-between">
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold md:px-1 lg:px-6 lg:py-2 lg:pb-3">Cập nhật mật khẩu
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
                  <p>Website hỗ trợ đánh giá khả năng học tập qua hình thức kiểm tra trắc nghiệm.</p>
                </div>
                <form style = {{maxWidth: "100%", margin:"0"}}>
                  <div class="form-group md:mx-1 lg:mx-6 w-full sm:w-4/5 md:w-2/3 pb-3">
                  <div class="flex flex-row justify-between">
                        <label for="password" class="text-gray-500 text-sm md:text-xs font-semibold select-none">Mật
                        khẩu mới*</label>

                    </div>
                    <input className="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-green-500"
                      id="password" type="password" placeholder="Mật khẩu mới" autocomplete="off"
                      name="password" required onChange = {this.check}/>
                       <ul>
                         {
                           !this.state.isInputValid && this.state.name === "password" && <li class="text-red-500 text-xs italic">
                           Mật khẩu cần chứa tối thiểu 8 kí tự bao gồm chữ hoa, thường, số, kí tự đặc biệt.</li>
                         }
            </ul>
                  </div>
  
                  <div class="form-group md:mx-1 lg:mx-6 w-full sm:w-4/5 md:w-2/3 pb-3 relative">
                    <div class="flex flex-row justify-between">
                        <label for="confirmPassword" class="text-gray-500 text-sm md:text-xs font-semibold select-none">Nhập lại mật
                        khẩu*</label>

                    </div>
                    <input
                      class="appearance-none border rounded-md w-full py-2 px-3 mt-1 text-gray-600 font-bold bg-gray-200 leading-tight outline-none focus:border-green-500"
                      id="confirmPassword" type="password" placeholder="**********"
                      name="confirmPassword"
                      required onChange = {this.check}/>

                      <ul>
                        {!this.state.isInputValid && this.state.password !== this.state.confirmPassword && this.state.name === "confirmPassword" && <li class="text-red-500 text-xs italic">
                        Mật khẩu không trùng</li>
                        }
                    </ul>
  
                  </div>
  
                  <div class="flex justify-start items-center">
                    {
                      this.state.password === this.state.confirmPassword && this.state.password !== "" ? <button
                      class="bg-blue-500 hover:bg-blue-400 focus:outline-none text-white rounded-md px-1 px-6 py-2 ml-3 lg:ml-8 mb-3 shadow-xl transition duration-500 ease-in-out"
                      onClick = {this.changePassword}>
                      Cập nhật
                      </button> : <button
                      class="bg-blue-500 hover:bg-blue-400 focus:outline-none text-white rounded-md px-1 px-6 py-2 ml-3 lg:ml-8 mb-3 shadow-xl transition duration-500 ease-in-out cursor-not-allowed">
                      Cập nhật
                      </button>
                    }
                    {/* <button
                    class="bg-blue-500 hover:bg-blue-400 focus:outline-none text-white rounded-md px-1 px-6 py-2 ml-3 lg:ml-8 mb-3 shadow-xl transition duration-500 ease-in-out">
                    Cập nhật
                    </button> */}
                  </div>
                </form>
                <div class="mt-3 mb-4 flex justify-start ">
                  <a class="text-xs text-gray-500 hover:text-gray-600 focus:underline font-semibold select-none cursor-pointer"
                  onClick = {this.blackLogin}>&larr; Quay lại Đăng nhập</a>
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
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    updatePassword: (password, token) => dispatch(updatePassword(password, token))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ResetPaswordComponent);