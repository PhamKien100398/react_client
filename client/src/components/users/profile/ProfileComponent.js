import React from 'react'
import './Profile.scss'
import user from '../../../img/20162253.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faLock} from '@fortawesome/free-solid-svg-icons'
import {faEnvelope} from '@fortawesome/free-solid-svg-icons'
import {faImage} from '@fortawesome/free-solid-svg-icons'
import UpdatePasswordComponent from '../../shared/update_profile/update_password/UpdatePasswordComponent'
import UpdtateEmailComponent from '../../shared/update_profile/update_email/UpdateEmailComponent'
import UpdtateAvatarComponent from '../../shared/update_profile/update_avatar/UpdateAvatarComponent'
import LeftSideComponent from '../../users/left_side/LeftSideComponent'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import FooterComponent from '../../footer/FootComponent';
import {connect} from 'react-redux'

class ProfileComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            password: true,
            email: false,
            image: false
        }
    }
    setPassword = ()=>{
        this.setState({
            password: true,
            email: false,
            image: false
        })
    }

    setEmail = ()=>{
        this.setState({
            password: false,
            email: true,
            image: false
        })
    }

    setImage = ()=>{
        this.setState({
            password: false,
            email: false,
            image: true
        })
    }

    render(){
        return (
            <div class="font-sans antialiased h-screen bg-gray-100 w-full flex flex-row">
            <LeftSideComponent/>
                <div class="lg:w-full bg-gray-100 py-2 overflow-hidden overflow-y-scroll">
                    <div class="flex flex-wrap items-center justify-between mx-4 my-4 overflow-hidden">
                        <div class="text-gray-300 text-xl cursor-pointer bg-blue-500 hover:bg-blue-600 px-2 rounded shadow-2xl">
                            {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                            </svg> */}
                            <i class="fa fa-compress"></i>
                        </div>
                        <div class="group text-gray-600 text-2xl cursor-pointer flex items-center">
                            <span class="text-base"><FontAwesomeIcon icon = {faSignOutAlt}/>Log out</span>
                        </div>
                    </div>
                    <div class="px-5 py-4 m-6">
            <div class="py-3">
                <h2 class="lg:text-2xl font-semibold text-gray-800 mb-6 px-4">Manage Account</h2>
                <div class="my-2 flex w-full">
                    <div class="rounded-lg shadow-lg w-64 mx-2 px-3 py-2 bg-white text-gray-700 text-center">
                        <div class="my-3 my-1">
                            <img src = {user}
                                class="avatar mx-auto shadow-md"/>
                        </div>
                        <div class="px-3 my-4"><label
                            class="text-blue-700 text-xl font-semibold uppercase">Pham Kien</label>
                        </div>
                        <div class="px-3 my-1"><label class="font-medium">Pham Kien</label></div>
                        <div class="px-3 my-1"><label>Kien</label></div>
                        <div class="px-3 my-2"><label class="underline text-blue-500">phamkien100398@gmail.com</label></div>
                        <div class="mx-3 my-3 flex justify-center flex-wrap">
                            <div class="mx-2 w-8 h-8 flex justify-center items-center rounded-full bg-blue-500 hover:bg-blue-700 text-white text-lg cursor-pointer"
                                show-delay="100" hide-delay="100"><FontAwesomeIcon icon = {faLock} onClick={this.setPassword}/>
                            </div>
                            <div
                                class="mx-2 w-8 h-8 flex justify-center items-center rounded-full bg-blue-500 hover:bg-blue-700 text-white text-lg cursor-pointer"
                                show-delay="100" hide-delay="100"><FontAwesomeIcon icon = {faEnvelope} onClick={this.setEmail}/>
                            </div>
                            <div
                                class="mx-2 w-8 h-8 flex justify-center items-center rounded-full bg-blue-500 hover:bg-blue-700 text-white text-lg cursor-pointer"
                                show-delay="100" hide-delay="100"><FontAwesomeIcon icon = {faImage} onClick={this.setImage}/>
                            </div>
                        </div>
                    </div>
                    <div class="mx-8 md:w-1/2">
                        {/* <UpdatePasswordComponent/> */}
                        {
                            this.state.password && <><UpdatePasswordComponent/></>
                        }
                        {
                            this.state.email && <><UpdtateEmailComponent/></>
                        }
                        {
                            this.state.image && <><UpdtateAvatarComponent/></>
                        }
                    </div>
                </div>
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
        auth : state.auth
    }
}

export default connect(mapStateToProps)(ProfileComponent);