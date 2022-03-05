import React from "react";

class CardComponent extends React.Component{
    render(){
        return (
            <div class="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div class="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                    <div class="flex-auto p-4">
                    <div class="flex flex-wrap">
                        <div class="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 class="text-gray-500 uppercase font-bold text-xs">
                            Bài thi tạo mới
                        </h5>
                        <span class="font-semibold text-xl text-gray-800">
                                    2,356
                                    </span>
                        </div>
                        <div class="relative w-auto pl-4 flex-initial">
                        <div class="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500">
                            <i class="fa fa-address-book"></i>
                        </div>
                        </div>
                    </div>
                    <p class="text-sm text-gray-500 mt-4">
                                <span class="text-red-500 mr-2">
                                    <i class="fa fa-arrow-down p-1 rounded-full bg-red-200"></i> 3.48%
                                </span>
                        <span class="whitespace-no-wrap">
                                    so tuần trước
                                </span>
                    </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default CardComponent;