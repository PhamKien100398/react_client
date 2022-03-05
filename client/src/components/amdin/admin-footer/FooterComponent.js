import React from "react";

class FooterComponent extends React.Component{
    render(){
        return(
            <footer class="block py-4">
                <div class="container mx-auto px-4">
                    <hr class="mb-4 border-b-1 border-gray-300" />
                    <div class="flex flex-wrap items-center md:justify-end justify-center">
                    <div class="w-full md:w-4/12 px-4">
                        <div class="text-sm text-gray-600 font-semibold py-1">
                        Copyright © 12/10/2021
                        <a
                            href="https://www.creative-tim.com"
                            class="text-gray-600 hover:text-gray-800 text-sm font-semibold py-1 mx-1"
                        >
                            App Quiz
                        </a>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default FooterComponent;