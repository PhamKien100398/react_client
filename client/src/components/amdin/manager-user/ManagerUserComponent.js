import React from "react";
import FooterComponent from '../admin-footer/FooterComponent'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faFileExcel} from '@fortawesome/free-solid-svg-icons'
import { FaSearch } from 'react-icons/fa';
import {FaToggleOn}  from "react-icons/fa";
import {FaEye}  from "react-icons/fa";
import {FaEdit} from "react-icons/fa";
import {FaTrash} from "react-icons/fa";
import NavSideBarComponent from "../nav-sidebar/NavSideBarComponent";
import NavbarComponent from "../navbar/NavbarComponent";
import { connect } from "react-redux";
import {getUsers} from '../../../service/index'
import DetailUserComponent from "./detail-user/DetailUserComponent";
import { Link } from "react-router-dom";
import UpdateUserComponent from "./update-user/UpdateUserComponent";
import UserService from "../../../service/admin/service/UserService";
import AddUserComponent from "./add-user/AddUserComponent";

class ManagerUserComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            keySearch: "",
            viewDetail : false,
            updateUser: false,
            addUser: false,
            data: "",
            users: [],
            pagination: {}
        }
    }

    view = (d) =>{
        this.setState({
            viewDetail : true,
            updateUser: false,
            addUser: false,
            data: d
        })
    }

    async componentDidMount(){
        await this.props.getUsers();
        this.setState({
            users: this.props.users.users.users.data,
            pagination: this.props.users.users.users.paginationDetails
        })
    }

    update = (d) =>{
        this.setState({
            viewDetail : false,
            updateUser: true,
            addUser: false,
            data: d
        })
    }

    add = () =>{
        this.setState({
            viewDetail : false,
            updateUser: false,
            addUser: true
        })
    }

    delete = async (d) =>{
        if(d.deleted){
            return;
        }
        if(this.state.keySearch === ""){
            await UserService.deleteUser(d.id, !d.deleted).then(async res =>{
                await UserService.getUsers().then(response =>{
                    this.setState({
                        viewDetail: false,
                        updateUser: false,
                        users: response.data.data
                    })
                })
            })
        }else{
            await UserService.deleteUser(d.id, !d.deleted).then(async res =>{
                await UserService.searchUser(this.state.keySearch, 0, 20).then(response =>{
                    this.setState({
                        viewDetail: false,
                        updateUser: false,
                        users: response.data.data
                    })
                })
            })
        }
    }

    // componentDidMount(){
        
    // }

    search = (e) =>{
        let value = e.target.value;
        UserService.searchUser(value, 0, 20).then(res =>{
            this.setState({
                keySearch: value,
                viewDetail: false,
                updateUser: false,
                addUser: false,
                users: res.data.data
            })
        })
    }

    goPreviousPage = async () =>{
        const firstPage = this.state.pagination.isFirstPage;
        console.log(firstPage);
        if(!firstPage){
            await UserService.searchUser(this.state.keySearch, this.state.pagination.previousPage.pageNumber, 20)
            .then(res =>{
                this.setState({
                    viewDetail: false,
                    updateUser: false,
                    users: res.data.data
                })
            })
        }
    }

    goNextPage = async () =>{
        const nextPage = this.state.pagination.nextPage;
        if(!nextPage){
            await UserService.searchUser(this.state.keySearch, this.state.pagination.previousPage.pageNumber, 20)
            .then(res =>{
                this.setState({
                    viewDetail: false,
                    updateUser: false,
                    users: res.data.data
                })
            })
        }

    }

    changeDeleted = async (d)=>{
        if(this.state.keySearch === ""){
            await UserService.deleteUser(d.id, !d.deleted).then(async res =>{
                await UserService.getUsers().then(response =>{
                    this.setState({
                        viewDetail: false,
                        updateUser: false,
                        users: response.data.data
                    })
                })
            })
        }else{
            await UserService.deleteUser(d.id, !d.deleted).then(async res =>{
                await UserService.searchUser(this.state.keySearch, 0, 20).then(response =>{
                    this.setState({
                        viewDetail: false,
                        updateUser: false,
                        users: response.data.data
                    })
                })
            })
        }
    }

    render(){
        return (
            <div>
                <NavSideBarComponent/>
                <div class="relative md:ml-64 bg-gray-200">
                    <NavbarComponent/>
                    <div class="bg-gray-600 md:pt-32 pb-32 pt-12">
                        <div class="px-4 md:px-10 mx-auto w-full">
                        </div>
                    </div>
                    <div class=" mx-auto w-full -m-24">
                        <div class="flex flex-wrap mt-4 justify-center">
                            <div class="w-full mb-12 xl:mb-0 px-4 max-w-5xl">
                                <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                                    <div class="rounded-t mb-0 px-4 py-3 border-0">
                                        <div class="flex flex-wrap items-center">
                                            <div class="relative w-full px-4 max-w-full flex-grow leading-8 mb-3">
                                                <h3 class="font-semibold text-2xl text-gray-800">
                                                    Tài khoản người dùng
                                                </h3>
                                            </div>
                                            <div class="flex flex-wrap flex-col w-full">
                                                <div class="flex flex-wrap flex-row">
                                                    <div class="relative w-full px-4 max-w-full flex-flow flex-basis">
                                                        <span class="mx-3 text-gray-600 text-sm">Hiển thị tối đa</span>
                                                        <div class="inline-block relative max-w-xs w-20 mr-2">
                                                            <select
                                                            class="block appearance-none w-full bg-white px-3 py-1 pr-4 rounded shadow leading-tight focus:outline-none text-sm">
                                                            <option>20</option>
                                                            </select>
                                                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                                                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                                                </svg>
                                                            </div>
                                                        </div>
                                                        <button
                                                            class="bg-white shadow-md hover:bg-green-500 hover:text-green-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 md:mb-0 rounded outline-none focus:outline-none mx-1 mb-1"
                                                            type="button">
                                                            <span><FontAwesomeIcon icon = {faFileExcel} className = "mx-1"/> Export file</span>
                                                        </button>
                                                        {/* Phan nay them add user */}
                                                        <button
                                                            class="bg-white shadow-md hover:bg-blue-500 hover:text-blue-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mx-1 mb-1"
                                                            type="button" onClick={this.add}><span><i class="fa fa-user-plus mr-1"></i>Add new</span>
                                                        </button>

                                                    </div>
                                                </div>
                                                <form style = {{maxWidth:"100%", justifyContent: "end", margin :"0"}}>
                                                    <div class="p-2 flex justify-end">
                                                        <div class="bg-white flex items-center rounded-full shadow-md w-1/3">
                                                            <input name="search-input"
                                                                class="rounded-l-full w-full py-2 px-6 text-gray-700 leading-tight focus:outline-none"
                                                                id="search" type="text" placeholder="Nhập username hoặc email" autocomplete="off"
                                                                onChange={this.search} value = {this.state.keySearch}/>

                                                            <div class="p-1">
                                                            <button class="focus:outline-none flex items-center" type="submit">
                                                                {/* <FontAwesomeIcon icon = {faSearch} className = "fa-w-25 bg-blue-500 text-white rounded-full p-1 pt-2 truncate hover:bg-blue-400 focus:outline-none w-8 h-8 flex items-center justify-center"/> */}
                                                                <FaSearch className = "bg-blue-500 text-white rounded-full p-1 pt-2 truncate hover:bg-blue-400 focus:outline-none w-8 h-8 flex items-center justify-center"/>
                                                            </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="block w-full">
                                        <table
                                            class="items-center w-full bg-transparent border-collapse whitespace-no-wrap user-list block lg:table overflow-x-auto overflow-y-auto">
                                            <thead>
                                                <tr>
                                                <th
                                                    class="row-username text-center px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                                    Username
                                                </th>

                                                <th
                                                    class="row-name text-center px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                                    Tên hiển thị
                                                </th>
                                                <th
                                                    class="row-email text-center px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                                    Email
                                                </th>
                                                <th
                                                    class="row-active text-center px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                                    Trạng thái tài khoản
                                                </th>
                                                <th
                                                    class="row-action text-center px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                                    Action
                                                </th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {
                                                    this.state.users.map(d =>{
                                                        return (
                                                            <tr class="border hover:bg-gray-300">
                                                                <th class="text-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left w-1/5">
                                                                    {d.username}
                                                                </th>
                                                                <td class="text-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 w-1/5">
                                                                    {d.profile.lastName +" "+ d.profile.firstName}
                                                                </td>
                                                                <td class="text-center border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 w-1/5">
                                                                    {d.email}
                                                                </td>
                                                                <td class="border-t-0 text-center px-6 align-middle  border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 w-1/5" style = {{textAlign : "-webkit-center"}}>
                                                                    <span class="text-2xl cursor-pointer" onClick={() =>this.changeDeleted(d)}><FaToggleOn className = {d.deleted ? "fa fa-toggle-off text-gray-700": "fa fa-toggle-on text-green-700"}/></span>
                                                                </td>

                                                                <td
                                                                class="border-t-0 px-6 align-middle flex justify-between border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 w-full">
                                                                    {/* <app-detail-user class="mx-1" [userInfo]="user" tooltip="Xem chi tiết" placement="top"
                                                                                    show-delay="100" hide-delay="100"></app-detail-user> */}
                                                                    {/* <app-update-user [userInfo]="user" (usersOutput)="fetchUsersAfterCRUD($event)"
                                                                                    tooltip="Cập nhật thông tin" placement="top" show-delay="100"
                                                                                    hide-delay="100"></app-update-user> */}
                                                                    {/* <!--                  <app-delete-user class="mx-1" [userInfo]="user"-->
                                                                    <!--                                   (usersOutput)="fetchUsersAfterCRUD($event)" tooltip="Xoá người dùng" placement="top"-->
                                                                    <!--                                   show-delay="100" hide-delay="100"></app-delete-user>--> */}
                                                                    {/* <Link to={`/admin/users/`+d.id}
                                                                        class="mx-1 bg-white shadow-md hover:bg-blue-500 hover:text-gray-200 transition duration-200 ease-in-out text-xs font-bold uppercase rounded outline-none focus:outline-none px-2 py-1"
                                                                        type="button"><span><i class="fa fa-eye" aria-hidden="true"></i></span>
                                                                    </Link> */}
                                                                    <button
                                                                        class="mx-1 bg-white shadow-md hover:bg-blue-500 hover:text-gray-200 transition duration-200 ease-in-out text-xs font-bold uppercase rounded outline-none focus:outline-none px-2 py-1"
                                                                        type="button" onClick={() => this.view(d)}><span><i class="fa fa-eye" aria-hidden="true"></i></span>
                                                                    </button>
                                                                    <button
                                                                        class=" mx-1 bg-white shadow-md hover:bg-blue-500 hover:text-gray-200 transition duration-200 ease-in-out text-xs font-bold uppercase rounded outline-none focus:outline-none px-2 py-1"
                                                                        type="button" onClick={() => this.update(d)}><span><i class="fa fa-edit"></i></span>
                                                                    </button>
                                                                    <button
                                                                        class="bg-white shadow-md hover:bg-red-500 hover:text-red-200 transition duration-200 ease-in-out text-xs font-bold uppercase rounded outline-none focus:outline-none px-2 py-1"
                                                                        type="button" onClick={() => this.delete(d)}><span><i class="fa fa-trash"></i></span>
                                                                    </button>
                                                                </td>
                                                            </tr>
                                                        )
                                                    })
                                                }
                                            </tbody>
                                        </table>
                                    </div>
                                    <div
                                        class="px-4 py-3 bg-white border-t flex flex-row justify-between xs:flex-row items-center xs:justify-between">
                                        <span class="text-xs xs:text-sm text-gray-700 px-4">
                                        Hiển thị {this.state.pagination.isLastPage ? this.state.pagination.totalCount - this.state.pagination.pageCount + 1 : this.state.pagination.pageNumber * this.state.pagination.pageCount + 1}
                                        đến {this.state.pagination.isLastPage ? this.state.pagination.totalCount : (this.state.pagination.pageNumber + 1) * this.state.pagination.pageCount} trong số {this.state.pagination.totalCount} kết quả
                                        </span>
                                        <div class="inline-flex mt-2 px-4 xs:mt-0">
                                            <button
                                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l focus:outline-none"
                                                onClick={this.goPreviousPage}>
                                                <span><i class="fa fa-arrow-left"></i></span><span class="hidden md:inline ml-1 ">Trang trước</span>
                                            </button>
                                            <button
                                                class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r focus:outline-none"
                                                onClick={this.goNextPage}>
                                                <span class="hidden md:inline mr-1">Trang kế</span><span><i class="fa fa-arrow-right"></i></span>
                                            </button>
                                        </div>
                                    </div>
                                    {
                                        this.state.users.length === 0 && <div
                                            class="px-4 py-3 bg-white border-t flex flex-row justify-between xs:flex-row items-center xs:justify-between">
                                            <p class="mx-auto text-gray-700 text-sm">Nội dung không có để hiển thị</p>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>
                        <FooterComponent />
                    </div>
                    {
                        console.log(this.state.click)
                    }
                    {this.state.viewDetail && <DetailUserComponent data = {this.state.data} click = {true}/>}
                    {this.state.updateUser && <UpdateUserComponent data = {this.state.data} click = {true}/>}
                    {this.state.addUser && <AddUserComponent click = {true}/>}
                </div>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ManagerUserComponent);