import React from "react";

class UpdatePasswordComponent extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            oldPassword: false,
            newPassword: false,
            confirmPassword: false,
            errorMassage: "",
            newPass: "",
            confirmPass: ""
        }

    }

    setOldPaword = (event) =>{
        if(this.state.newPassword){
            this.setState({
                oldPassword: false
            });
            return;
        }
        if(event.target.value === ""){
            this.setState({
                oldPassword: true,
                errorMassage: "This field must be not empty!!!"
            })
        }else{
            this.setState({
                oldPassword: false,
                errorMassage: ""
            })
        }
    }

    setNewPassword = (event) =>{
        let newPassword = event.target.value;
        const regexp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
        if(this.state.oldPassword){
            this.setState({
                newPassword: false
            });
            return;
        }
        if(newPassword === ""){
            this.setState({
                newPassword: true,
                errorMassage: "This field must be not empty!!!"
            })
        }else{
            const check = regexp.exec(newPassword);
            if(check !== null){
                this.setState({
                    newPassword : false,
                    errorMassage: "",
                    newPass: newPassword
                })
            }else{
                this.setState({
                    newPassword : true,
                    errorMassage: "Your password must contain at least one uppercase, or capital, letter, digit and minimum length is 8 characters !!!"
                })
            }
        }


    }

    setConfirmPassword = (event)=>{
        let confirm = event.target.value;
        const regexp = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=])(?=\S+$).{8,}$/;
        if(this.state.oldPassword){
            this.setState({
                confirmPassword: false
            });
            return;
        }
        if(confirm === ""){
            this.setState({
                confirmPassword: true,
                errorMassage: "This field must be not empty!!!"
            })
        }else{
            const check = regexp.exec(confirm);
            if(check !== null){
                // if(confirmPassword === this.state.password){
                //     this.setState({
                //         confirmPassword : confirmPassword,
                //         errorMassage: ""
                //     })
                // }else{
                //     this.setState({
                //         confirmPassword : true,
                //         errorMassage: "Password is not match"
                //     })
                // }
                this.setState({
                    confirmPassword : false,
                    errorMassage: "",
                    confirmPass: confirm
                })

            }else{
                this.setState({
                    confirmPassword : true,
                    errorMassage: "Your password must contain at least one uppercase, or capital, letter, digit and minimum length is 8 characters !!!"
                })
            }
        }
    }

    render(){
        return (
            <form style = {{maxWidth : "400px", margin : "0 auto"}}>
                <div class="-mx-3 md:flex flex-col mb-2 w-full">
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                                for="old-password">
                            Old password <span class="mx-1 text-lg text-gray-700">
                                <i class="fa fa-eye"></i>
                            </span>
                        </label>
                        <input
                            class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-blue-500"
                            id="old-password"
                            type="password"
                            placeholder="********"
                            autocomplete="off"
                            formControlName="oldPassword"
                            required onChange={this.setOldPaword}/>
                    
                    {
                        this.state.oldPassword && <p class="text-red-500 text-xs italic">{this.state.errorMassage}</p>
                    }
                    </div>
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                        for="new-pwd-1">
                        New password <span class="mx-1 text-lg text-gray-700">
                            <i class = "fa fa-eye-slash"></i>
                        </span>
                        </label>
                        <input
                            class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-blue-500"
                            id="new-pwd-1" type = "password"
                            placeholder="********"
                            autocomplete="off"
                            formControlName="newPassword"
                            required onChange={this.setNewPassword}/>
                            {
                                this.state.newPassword && <ul>
                                <li class="text-red-500 text-xs italic">{this.state.errorMassage}</li>
                            </ul>
                            }

                    </div>
                    <div class="md:w-full px-3">
                        <label class="block uppercase tracking-wide text-gray-600 text-xs font-bold mb-2"
                        for="new-pwd-2">
                        Confirm new password <span class="mx-1 text-lg text-gray-700">
                        <i class = "fa fa-eye"></i>
                        </span>
                        </label>
                        <input
                            class="appearance-none border rounded-md w-full py-2 px-3 my-1 text-gray-600 bg-gray-200 leading-tight outline-none focus:border-blue-500"
                            id="new-pwd-2" type = "password"
                            placeholder="********"
                            autocomplete="off"
                            formControlName="confirmPassword"
                            required onChange={this.setConfirmPassword}/>
                            <ul>
                                {
                                    this.state.confirmPassword && <li class="text-red-500 text-xs italic">Your password must contain at least one uppercase, or capital, letter, digit and minimum length is 8 characters </li>
                                }
                                {
                                    this.state.newPass !== this.state.confirmPass && <li class="text-red-500 text-xs italic">
                                    Password is not match</li>
                                }
                            </ul>
                    </div>
                </div>
                <div class="my-5 flex justify-end px-6">
                    <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer"
                            type="submit">Change now
                    </button>
                </div>
            </form>
        )
    }
}

export default UpdatePasswordComponent;