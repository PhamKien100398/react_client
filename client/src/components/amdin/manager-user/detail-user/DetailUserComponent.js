import React from "react";

class DetailUserComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            view: this.props.click
        }
    }

    close = () =>{
        this.setState({
            view: !this.state.view
        })
    }

    componentWillReceiveProps(nextProps){
        console.log(nextProps.click);
        if(nextProps.click){
            this.setState({
                view: !this.state.view
            })
        }
    }

    render(){
        return (
            <div style={{display : this.state.view ? "block" : "none"}}>
            <div
                className="fixed inset-0 overflow-auto z-50 outline-none focus:outline-none justify-center flex">
                <div class="relative w-4/5 my-5 mx-auto max-w-2xl" style={{marginTop: '2.5rem'}}>
                <div
                class="border-0 rounded-lg shadow-lg relative flex flex-col w-full overflow-y-auto my-5 bg-white outline-none focus:outline-none"
                style={{maxHeight: '90%'}}>
                {/* header */}
                <div class="flex items-start justify-between p-5 border-b border-solid border-gray-300 rounded-t">
                    <h3 class="text-2xl font-semibold">Thông tin người dùng</h3>
                    <button
                    class="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none">
                        <span class="bg-transparent text-gray-700 opacity-5 h-3 w-3 text-base block outline-none focus:outline-none">
                        <i class="fa fa-close"></i>
                        </span>
                    </button>
                </div>
                {/* <!--body--> */}
                <div class="relative p-6 ">
                    <div class="my-4 px-8 text-gray-600 text-base leading-relaxed text-left flex-row flex flex-wrap justify-center lg:justify-start items-center">
                    <div class="mx-3 mr-5 my-3 md-w-1/4">
                        {/* <img [src]="userInfo.profile?.image || '../../assets/images/avatar-default.png'" class="rounded-full w-32 h-32 border"> */}

                    </div>
                    <div class="w-2/3 flex flex-col">
                        <div class="w-full my-1 px-2 bg-gray-200 rounded px-3 py-1"><i class="fa fa-id-card mr-3" aria-hidden="true"></i>
                        <span>{this.props.data.profile.firstName +" "+this.props.data.profile.lastName}</span>
                        </div>
                        <div class="w-full my-1 px-2 bg-gray-200 rounded px-3 py-1"><i
                        class="fa fa-user-circle mr-3"></i><span>{this.props.data.profile.firstName +" "+this.props.data.profile.lastName}</span></div>
                        <div class="w-full my-1 px-2 bg-gray-200 rounded px-3 py-1"><i
                        class="fa fa-envelope mr-3"></i><span>{this.props.data.email}</span></div>
                        <div class="w-full my-1 px-2 bg-gray-200 rounded px-3 py-1"><i
                        class="fa fa-calendar mr-3"></i><span>{this.props.data.createdDate}</span></div>
                        {/* <ng-container *ngIf="!userInfo.deleted else inactive"> */}
                        <div class="w-full my-1 px-2 bg-green-200 text-green-500 rounded px-3 py-1"><i
                            class="fa fa-toggle-on mr-3"></i><span>Đang hoạt động</span></div>
                        {/* </ng-container> */}

                        {/* <ng-template #inactive> */}
                        <div class="w-full my-1 px-2 bg-red-200 text-red-500 rounded px-3 py-1"><i
                            class="fa fa-toggle-off mr-3"></i><span>Tạm khoá</span></div>
                        {/* </ng-template> */}

                    </div>
                    </div>
                </div>
                {/* <!--footer--> */}
                <div class="flex items-center justify-end p-6 border-t border-solid border-gray-300 rounded-b">
                    <button
                    class="shadow-md bg-gray-600 text-gray-100 hover:bg-gray-700 hover:text-gray-200 transition duration-200 ease-in-out text-xs font-bold uppercase px-3 py-1 rounded outline-none focus:outline-none mr-1 mb-1"
                    type="button" onClick={this.close}><span><i class="fa fa-window-close mr-1"></i>Đóng</span>
                    </button>

                </div>
                </div>
            </div>
            </div>
            <div class="fixed inset-0 z-40 bg-smoke-light"></div>
        </div>
        )
    }
}

export default DetailUserComponent;