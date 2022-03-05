import React from "react";
import userImage from '../../../img/20162253.jpg'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faSearch} from '@fortawesome/free-solid-svg-icons'
import {faSignOutAlt} from '@fortawesome/free-solid-svg-icons'
import classNames from 'classnames'
import { logoutUser } from "../../../service";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class NavbarComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            click : "hidden",
        }
    }

    enter = () =>{
        this.setState({
            click : "block"
        })
    }

    leave = () =>{
        this.setState({
            click : "hidden"
        })
    }

    logout = ()=>{
        this.props.logoutUser();
    }

    render(){
        return (
           <nav className="absolute top-0 left-0 w-full z-10 bg-gray-600 items-center flex md:flex-row md:flex-no-wrap md:justify-start flex items-center p-4">
                <div className="w-full mx-auto items-center flex justify-between md:flex-no-wrap flex-wrap md:px-10 px-4">
                    <a className="text-white text-sm uppercase hidden lg:inline-block font-semibold" style={{fontSize: "20px"}}>Hệ thống thi online cho các môn lập trình</a>
                    <form className="md:flex hidden flex-row flex-wrap items-center lg:ml-auto mr-3 mt-0">
                        <div className="relative flex w-full flex-wrap items-stretch">
                            <span className="z-10 h-full leading-snug font-normal absolute text-center text-gray-400 absolute bg-transparent rounded text-base items-center justify-center w-8 pl-3 py-3"
                            ><FontAwesomeIcon icon = {faSearch}/></span>
                            <input
                            type="text"
                            placeholder="Search here..."
                            className="px-3 py-3 placeholder-gray-400 text-gray-700 relative bg-white bg-white rounded text-sm shadow outline-none focus:outline-none focus:shadow-outline w-full pl-10"
                            />
                        </div>
                    </form>
                    <ul className="flex-col md:flex-row list-none items-center hidden md:flex">
                    <div className="text-gray-600 block">
                        <div className="items-center flex cursor-pointer">
                        <span className="w-12 h-12 text-sm text-white bg-gray-300 inline-flex items-center justify-center rounded-full">
                            <img
                            className="w-full rounded-full align-middle border-none shadow-lg"
                            onMouseEnter={this.enter} onMouseLeave = {this.leave}
                            src={userImage}
                            />
                        </span>
                        </div>

                        <div className = {classNames("absolute bg-white text-base z-50 float-left py-2 list-none text-left rounded shadow-lg mt-1", this.state.click)}
                            style={{minWidth: "12rem", right: "1.8rem"}} onMouseEnter={this.enter} onMouseLeave = {this.leave}>
                            <a className="text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent  text-gray-800">
                            Thông tin tài khoản
                            </a>
                            <hr className="w-full"/>
                            <Link to="/login"
                                className="text-left focus:outline-none hover:bg-gray-200 text-sm py-2 px-4 font-normal block w-full whitespace-no-wrap bg-transparent text-gray-800"
                                onClick = {this.logout}>
                            Thoát
                            <span className="text-gray-800"> <FontAwesomeIcon icon = {faSignOutAlt}/> </span>
                            </Link>
                        </div>
                    </div>
                    </ul>
                </div>

            </nav>
        )
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

export default connect(mapStateToProps, mapDispatchToProps)(NavbarComponent);