import React from "react";
import './Skeleton.scss'

class SkeletonComponent extends React.Component{
    render(){
        return (
            <div class="w-full rounded-lg shadow-lg">
                <div class="flex flex-col relative w-full bg-white overflow-hidden card translate-3d-none-after relative w-full bg-white overflow-hidden card translate-3d-none-after rounded border border-gray-300">
                    <div class="relative group text-primary-500" style="padding-top: 70%">
                    <div class="absolute top-0 left-0 h-full w-full"><span class="skeleton-box group-hover:scale-110 transition-transform transform-center block h-56"></span></div></div>
                    <div class="flex flex-col flex-grow">
                    <div class="pl-4 pr-4 pt-5 mb-4 text-left relative flex-grow">
                        <div
                        class="text-lg font-bold text-gray-darkest flex flex-col">
                        <div class="flex justify-between mb-5">
                            <span class="skeleton-box h-5 w-1/3 inline-block"></span>
                            <span class="skeleton-box h-5 w-1/2 inline-block"></span>
                        </div>
                        <div class="flex justify-between items-center">
                            <div class="w-3/5 flex items-center">
                            <span class="skeleton-box h-8 w-8 rounded-full inline-block mr-3"></span>
                            <span class="skeleton-box h-5 w-16 inline-block"></span>
                            </div>

                            <span class="skeleton-box h-5 w-1/5 inline-block"></span>
                        </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
    }
}

export default SkeletonComponent;