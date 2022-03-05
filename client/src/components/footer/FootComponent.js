import React from "react";

class FooterComponent extends React.Component{
    render(){
        return (
            <footer class="bg-gray-700 w-full" style = {{position: "absolute", bottom : "0"}}>
                <div class="flex justify-center p-4">
                    <div class="fa fa-copyright text-gray-300 font-semibold">
                    Bản quyền thuộc về DevZone - 2021.
                    </div>
                </div>
            </footer>

        )
    }
}

export default FooterComponent;