import React from "react";
import NavSideBarComponent from "../nav-sidebar/NavSideBarComponent";
import NavbarComponent from "../navbar/NavbarComponent";
import CreateCourceComponent from "./create-cource/CreateCourceComponent";

class ManageCourceComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            viewCreate: false
        }
    }

    componentDidMount(){
        this.setState({
            viewCreate: false
        })
    }

    add = () =>{
        this.setState({
            viewCreate: true
        })
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
                                    Danh sách môn học
                                </h3>
                                </div>
                                <div class="flex flex-wrap flex-col w-full">
                                <div class="flex flex-wrap flex-row">

                                    <div class="relative w-full px-4 max-w-full flex-flow flex-basis">
                                    <button
                                        class="bg-white shadow-md hover:bg-blue-500 hover:text-blue-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mx-1 mb-1"
                                        type="button" onClick={this.add}><span><i class="fa fa-book mr-1"></i>Add new</span>
                                        </button>
                                    </div>
                                </div>
                                </div>
                            </div>
                            </div>
                            <div class="block w-full">
                            <table
                                class="items-center w-full bg-transparent border-collapse whitespace-no-wrap user-list block lg:table overflow-x-auto overflow-y-auto">
                                <thead>
                                <tr>
                                <th
                                    class="row-checkbox px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    #
                                </th>
                                <th
                                    class="row-username px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    Mã môn học
                                </th>

                                <th
                                    class="row-name px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    Tên môn
                                </th>
                                <th
                                    class="row-name px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                </th>

                                <th
                                    class="row-action px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                </th>
                                </tr>
                                </thead>

                                <tbody>
                                <tr class="border hover:bg-gray-300 align-middle">
                                    <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-md text-gray-500 whitespace-no-wrap p-4">
                                    ABC
                                    </td>
                                    <th
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm font-semibold whitespace-no-wrap p-4 text-left"

                                    >
                                    <a class="hover:text-blue-700 hover:bg-blue-300 px-2 py-1 bg-blue-200 text-blue-600 rounded" tooltip="Xem nội dung"
                                        placement="right" show-delay="100" hide-delay="100">ABC</a>
                                    </th>

                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    <a class="hover:text-green-700 hover:bg-green-300 px-2 py-1 bg-green-200 text-green-600 rounded"
                                        tooltip="Xem nội dung"
                                        placement="right" show-delay="100" hide-delay="100">ABC</a>
                                    </td>
                                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                    <div><img class="w-16 h-16 border rounded-sm shadow-md"></img></div>
                                    </td>


                                    <td
                                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                        <button
                                            class="bg-white shadow-md hover:bg-blue-500 hover:text-gray-200 transition duration-200 ease-in-out text-xs font-bold uppercase rounded outline-none focus:outline-none px-2 py-1"
                                            type="button"><span><i class="fa fa-edit"></i></span>
                                        </button>

                                    </td>

                                </tr>


                                </tbody>


                            </table>
                            </div>

                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                {this.state.viewCreate && <CreateCourceComponent click = {true}/>}
            </div>
        )
    }
}

export default ManageCourceComponent;