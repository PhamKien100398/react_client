import React from "react";
import FooterComponent from "../admin-footer/FooterComponent";
class DashboardComponent extends React.Component{
    render(){
        return (
            <div>
            <div class="relative bg-blue-600 md:pt-32 pb-32 pt-12">
                <div class="px-4 md:px-10 mx-auto w-full">
                    <div>
                        <div class="flex flex-wrap">
                            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                    <div class="flex-auto p-4">
                                        <div class="flex flex-wrap">
                                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                <h5 class="text-gray-500 uppercase font-bold text-xs">
                                                    Người dùng
                                                </h5>
                                                <span class="font-semibold text-xl text-gray-800">
                                                    ABC
                                                </span>
                                            </div>
                                            <div class="relative w-auto pl-4 flex-initial">
                                                <div
                                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500">
                                                    <i class="fa fa-user"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-sm text-gray-500 mt-4">
                                            <span class="text-green-500 mr-2">
                                                <i class="fa fa-arrow-up"></i> 15%
                                            </span>
                                            <span class="text-red-500 mr-2">
                                                <i class="fa fa-arrow-down"></i> 30%
                                            </span>
                                            <span class="text-gray-500 mr-2">
                                                <i class="fa fa-minus"></i> 20%
                                            </span>
                                            <span class="whitespace-no-wrap">
                                                so tuần trước
                                            </span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                    <div class="flex-auto p-4">
                                        <div class="flex flex-wrap">
                                            <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                                <h5 class="text-gray-500 uppercase font-bold text-xs">
                                                    Đề kiểm tra
                                                </h5>
                                                <span class="font-semibold text-xl text-gray-800">
                                                    20
                                                </span>
                                            </div>
                                            <div class="relative w-auto pl-4 flex-initial">
                                                <div
                                                    class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                                                    <i class="fa fa-book"></i>
                                                </div>
                                            </div>
                                        </div>
                                        <p class="text-sm text-gray-500 mt-4">
                                            <span class="text-green-500 mr-2">
                                                <i class="fa fa-arrow-up"></i> 15%
                                            </span>
                                            <span class="text-red-500 mr-2">
                                                <i class="fa fa-arrow-down"></i> 20%
                                            </span>
                                            <span class="text-gray-500 mr-2">
                                                <i class="fa fa-minus"></i> 30%
                                            </span>
                                            <span class="whitespace-no-wrap">
                                                so tuần trước
                                            </span>
                                        </p>

                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                    <div class="flex-auto p-4">
                                    <div class="flex flex-wrap">
                                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 class="text-gray-500 uppercase font-bold text-xs">
                                            Câu hỏi
                                        </h5>
                                        <span class="font-semibold text-xl text-gray-800">
                                            12
                                            </span>
                                        </div>
                                        <div class="relative w-auto pl-4 flex-initial">
                                        <div
                                            class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                                            <i class="fa fa-question-circle"></i>
                                        </div>
                                        </div>
                                    </div>
                                    <p class="text-sm text-gray-500 mt-4">
                                        <span class="text-green-500 mr-2">
                                            <i class="fa fa-arrow-up"></i> 15%
                                        </span>
                                        <span class="text-red-500 mr-2">
                                            <i class="fa fa-arrow-down"></i> 20%
                                        </span>
                                        <span class="text-gray-500 mr-2">
                                            <i class="fa fa-minus"></i> 30%
                                        </span>
                                        <span class="whitespace-no-wrap">
                                            so tuần trước
                                        </span>
                                    </p>

                                    </div>
                                </div>
                            </div>
                            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                                    <div class="flex-auto p-4">
                                    <div class="flex flex-wrap">
                                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                                        <h5 class="text-gray-500 uppercase font-bold text-xs">
                                            Bài làm
                                        </h5>
                                        <span class="font-semibold text-xl text-gray-800">
                                            15
                                            </span>
                                        </div>
                                        <div class="relative w-auto pl-4 flex-initial">
                                        <div
                                            class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500">
                                            <i class="fa fa-address-book"></i>
                                        </div>
                                        </div>
                                    </div>
                                    <p class="text-sm text-gray-500 mt-4">
                                        <span class="text-green-500 mr-2">
                                            <i class="fa fa-arrow-up"></i> 15%
                                        </span>
                                        <span class="text-red-500 mr-2">
                                            <i class="fa fa-arrow-down"></i> 20%
                                        </span>
                                        <span class="text-gray-500 mr-2">
                                            <i class="fa fa-minus"></i> 30%
                                        </span>
                                        <span class="whitespace-no-wrap">
                                            so tuần trước
                                        </span>
                                    </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>      
                </div>
            </div>
            {/* <div class="px-4 md:px-10 mx-auto w-full -m-24">
                <div class="flex flex-wrap">
                    <app-line-chart class="w-full mb-12 xl:mb-0 px-4" ></app-line-chart>
                    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-900">
                        <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
                            <div class="flex flex-wrap items-center">
                                <div class="relative w-full max-w-full flex-grow flex-1">
                                    <h2 class="text-white text-xl font-semibold">
                                        Thống kê bài kiểm tra
                                    </h2>
                                    <h5 class="text-white text-md">
                                        7 ngày gần nhất
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 flex-auto">
                            <div class="relative" style="height:350px">
                                <canvas id="line-chart"></canvas>
                            </div>
                        </div>
                    </div>
                </div>
                <app-admin-footer></app-admin-footer>
            </div> */}
            <div class="px-4 md:px-10 mx-auto w-full -m-24">
                <div class="flex flex-wrap">
                    <div class="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-lg rounded bg-gray-900">
                        <div class="rounded-t mb-0 px-4 py-3 bg-transparent">
                            <div class="flex flex-wrap items-center">
                                <div class="relative w-full max-w-full flex-grow flex-1">
                                    <h2 class="text-white text-xl font-semibold">
                                    Thống kê bài kiểm tra
                                    </h2>
                                    <h5 class="text-white text-md">
                                    7 ngày gần nhất
                                    </h5>
                                </div>
                            </div>
                        </div>
                        <div class="p-4 flex-auto">
                            <div class="relative" style={{height:"350px"}}>

                            </div>
                        </div>
                    </div>
                </div>
                <FooterComponent/>
            </div>
          </div>
        )
    }
}

export default DashboardComponent;