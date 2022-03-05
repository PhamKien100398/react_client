import React, { Component } from 'react';
import {connect} from 'react-redux'
import { Link } from "react-router-dom";
import {logoutUser, getListExamByUser} from '../../../service/index'

class Header extends Component {
    logout = ()=>{
        this.props.logoutUser();
    }

    render() {
        return (
            <div>
                <div class="flex flex-wrap items-center justify-between mx-4 my-4 overflow-hidden">
                    <div class="text-gray-300 text-xl cursor-pointer bg-blue-500 hover:bg-blue-600 px-2 rounded shadow-2xl">
                        {/* <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                        </svg> */}
                        <i class="fa fa-compress"></i>
                    </div>
                    <div class="group text-gray-600 text-2xl cursor-pointer flex items-center">
                        <Link to = "/login" class="text-base" onClick = {this.logout}><i class="fas fa-sign-out-alt"></i>Thoát</Link>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        auth : state.auth
    }
}

const mapDispatchToProps = (dispatch) =>{
    return {
        logoutUser: () => dispatch(logoutUser())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);