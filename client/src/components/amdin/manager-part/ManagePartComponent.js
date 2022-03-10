import React from "react";
import CourseService from "../../../service/admin/service/CourseService";
import PartService from "../../../service/admin/service/PartService";
import NavSideBarComponent from "../nav-sidebar/NavSideBarComponent";
import NavbarComponent from "../navbar/NavbarComponent";
import CreatePartComponent from "./create-part/CreatePartComponent";


class ManagePartComponent extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            createPart: false,
            listPart: [],
            course: {}
        }
    }

    async componentDidMount(){
        await PartService.getPartListByCourseId(this.props.match.params.id).then(async res =>{
            await CourseService.getCourse(this.props.match.params.id).then(r =>{
                this.setState({
                    createCourse: false,
                    listPart: res.data,
                    course: r.data
                })
            })
        })
    }


    add = () =>{
        this.setState({
            createPart: true
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
                        <a class="text-white cursor-pointer hover:underline"><i class="fa fa-long-arrow-left"></i><span class="mx-2">Quay về danh sách môn</span></a>
                        </div>
                    </div>
                    <div class="mx-auto w-full -m-24">

                        <div class="flex flex-wrap mt-4 justify-center">
                            <div class="w-full mb-12 xl:mb-0 px-4 max-w-5xl">
                                  <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded">
                                      <div class="rounded-t mb-0 px-4 py-3 border-0">
                                      <div class="flex flex-wrap items-center">
                                      <div class="relative w-full px-4 max-w-full flex-grow leading-8 mb-3">
                                      <h3 class="font-semibold text-2xl text-gray-800">
                                          {this.state.course.name+" - "+ this.state.course.courseCode}
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
                                        class="row-name px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                        Nội dung
                                    </th>

                                    <th
                                        class="row-action px-6 bg-gray-100 text-gray-600 align-middle border border-solid border-gray-200 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                    </th>
                                    </tr>
                                    </thead>

                                    <tbody>
                                        {
                                            this.state.listPart.map((item, index) =>{
                                                return (
                                                    <tr class="border hover:bg-gray-300 truncate">
                                                        <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                                                        <input type="text" class="w-full block border-b-2 border-blue-500 text-xl px-2 outline-none" value={item.name}/>
                                                        </td>
                                                        <td
                                                        class="border-t-0 px-6 align-middle flex justify-between border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 w-full">

                                                        <button
                                                            class="bg-white shadow-md hover:bg-blue-500 hover:text-gray-200 transition duration-200 ease-in-out text-xs font-bold uppercase rounded outline-none focus:outline-none px-2 py-1"
                                                            type="button"
                                                            tooltip="Thay đổi nội dung" placement="left" show-delay="100" hide-delay="100"
                                                        ><span><i class="fa fa-edit"></i></span>
                                                        </button>

                                                        {/* <button
                                                            class="bg-white shadow-md hover:bg-blue-500 hover:text-gray-200 transition duration-200 ease-in-out text-xs font-bold uppercase rounded outline-none focus:outline-none px-2 py-1"
                                                            type="button"
                                                            tooltip="Lưu" placement="left" show-delay="100" hide-delay="100"
                                                        ><span><i class="fa fa-save"></i></span>
                                                        </button> */}
                                                        <a
                                                            class="bg-white shadow-md hover:bg-blue-500 hover:text-gray-200 ml-1 transition duration-200 ease-in-out text-xs font-bold uppercase rounded outline-none focus:outline-none px-2 py-1"
                                                        ><span><i class="fa fa-question-circle-o"></i> DS câu hỏi</span>
                                                        </a>
                                                        </td>

                                                </tr>
                                                )
                                            })
                                        }
                                    </tbody>


                                </table>
                                </div>

                                <div class="px-4 py-3 bg-white border-t flex flex-row justify-between xs:flex-row items-center xs:justify-between">
                                           {/* <span class="text-xs xs:text-sm text-gray-700 px-4">
                                               Hiển thị {{paginationDetail?.isLastPage ? paginationDetail?.totalCount - paginationDetail.pageCount + 1 : paginationDetail?.pageNumber * paginationDetail?.pageCount + 1}}
                                             đến {{paginationDetail?.isLastPage ? paginationDetail.totalCount : (paginationDetail?.pageNumber + 1) * paginationDetail?.pageCount}}
                                             trong số {{paginationDetail?.totalCount}} kết quả
                                           </span> */}
                                            <div class="inline-flex mt-2 px-4 xs:mt-0">  
                                              <button  
                                 class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l focus:outline-none"  
 
                                              >  
                                 <span><i class="fa fa-arrow-left"></i></span><span class="hidden md:inline ml-1 ">Trang trước</span>  
                                              </button>  
                                              <button  
                                 class="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r focus:outline-none"  
                                              >  
                                 <span class="hidden md:inline mr-1">Trang kế</span><span><i class="fa fa-arrow-right"></i></span>  
                                              </button>  
                                            </div>  
                                          </div>  
                                            {this.state.listPart.length === 0 && <div class="px-4 py-3 bg-white border-t flex flex-row justify-between xs:flex-row items-center xs:justify-between">  
                                              <p class="mx-auto text-gray-700 text-sm">Nội dung không có để hiển thị</p></div>}    

                            </div>
                            </div>
                        </div>
                        {this.state.createPart && <CreatePartComponent click = {true} courseId = {this.props.match.params.id}/>}
                        </div>
                </div>
            </div>
        )
    }
}

export default ManagePartComponent;

