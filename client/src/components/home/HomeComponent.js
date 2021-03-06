import React from "react";
import logo from '../../img/logo.png'
import Swift_Fundamental from '../../img/field/Swift_Fundamental.jpg'
import Critical_Thinking from '../../img/field/Critical_Thinking.jpg'
import Professional_Speaking from '../../img/field/Professional_Speaking.jpg'
import Working_Process from '../../img/field/Working_Process.jpg'
import Selenium from '../../img/field/Selenium.jpg'
import chart from '../../img/charts/chart.png'
import contact from '../../img/contact.svg'
import hero_pattern_lg from '../../img/hero-pattern-lg.png'
import angled_background from '../../img/angled-background.svg'
import logo_home from '../../img/logo_home.png'
class HomeComponent extends React.Component{
    constructor(props){
        super(props);

        this.clickLogin = this.clickLogin.bind(this);
    }

    clickLogin(){
        this.props.history.push("/login")
    }

    render(){
        return (
            <div className="font-sans antialiased text-gray-900 bg-gray-900" style ={{background: "#042147"}}>
                <div className="relative min-h-screen overflow-hidden bg-gray-900 lg:bg-gray-300">
                    <div className="hidden lg:block absolute scroll-bg" style = {{height: '400%', width: '400%', top: '-25%', left: '-100%', backgroundSize: '800px auto', backgroundImage : `url(${hero_pattern_lg})`}}>
                    </div>
                    <div class="bg-welcome relative min-h-screen lg:min-w-3xl xl:min-w-4xl lg:flex lg:items-center lg:justify-center lg:w-3/5 lg:py-10 lg:pl-8 lg:pr-8 bg-no-repeat"
                    style = {{backgroundSize: '100% auto', backgroundPosition: '-5px -5px', backgroundImage : `url(${angled_background})`}}>
                        <div>
                            <div class="px-6 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-none lg:pt-0 lg:pb-6">
                                <div class="flex items-center justify-between">
                                    <div>
                                        <img style = {{width : "200px", height: "160px"}} src={logo_home} alt="Tailwind UI"/>
                                    </div>
                                    <div>
                                        <a
                                            class="text-sm font-semibold text-white focus:outline-none focus:underline cursor-pointer"
                                            onClick = {this.clickLogin}>
                                            {/* {{!isLoggedIn ? '????ng nh???p &rarr;' : 'V??o ngay &rarr;'}} */}
                                            ????ng nh???p &rarr;
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div class="px-6 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-none">
                                <p class="text-sm font-semibold text-gray-300 uppercase tracking-wider">Hi, friends</p>
                                <h1
                                    class="mt-3 text-3xl leading-9 font-semibold font-display text-white sm:mt-6 sm:text-4xl sm:leading-10 xl:text-5xl xl:leading-snug">
                                    Ch??o m???ng ?????n v???i trang web
                                    <br class="hidden sm:inline"/>
                                    <span class="text-teal-400">ki???m tra l???p tr??nh online.</span>
                                </h1>
                                <div class="mt-6 sm:flex sm:mt-8 xl:mt-12">
                                    <a
                                    class="mt-4 sm:ml-4 sm:mt-0 w-full sm:w-auto inline-flex items-center justify-center px-6 py-3 border border-transparent text-base leading-6 font-semibold rounded-md text-white bg-gray-800 shadow-sm hover:bg-gray-700 focus:outline-none focus:bg-gray-700 transition ease-in-out duration-150 xl:text-lg xl:py-4">
                                    Kh??m ph?? ngay &rarr;
                                    </a>
                                </div>
                            </div>
                            <div class="mt-8 sm:mt-12 relative h-64 overflow-hidden bg-gray-300 lg:hidden">
                                <div class="absolute scroll-bg" style = {{height: '800%', width: '400%', top: '-100%', left: '-100%', backgroundSize: '400px auto', backgroundImage : `url(${hero_pattern_lg})`}}>
                                </div>
                            </div>
                            <div class="px-6 py-8 sm:pt-12 md:max-w-3xl md:mx-auto lg:mx-0 lg:max-w-full lg:py-0 lg:pt-24">
                                <p class="text-sm font-semibold text-gray-300 uppercase tracking-wider">Thi???t k??? v?? ph??t tri???n b???i
                                </p>
                                <div class="mt-4 sm:flex flex:row">
                                    <a href="https://twitter.com/httam298" class="flex items-center no-underline mr-6">
                                    <div class="flex-shrink-0">
                                        <img class="h-12 w-12 rounded-full border-2 border-white"
                                            src="https://avatars1.githubusercontent.com/u/46307504?s=460&u=a75c4f0968df34649bdb9745dbab83acd628d702&v=4"
                                            alt="????y l?? ???nh ?????i di???n c???a Hu???nh Thanh T??m"/>
                                    </div>
                                    <div class="ml-3">
                                        <p class="font-semibold text-white leading-tight">Ph???m Trung Ki??n</p>
                                        <p class="text-sm text-gray-500 leading-tight">Student</p>
                                    </div>
                                    </a>
                                    <div class="flex justify-start items-center mt-3 sm:mt-4">
                                        <div
                                            class="mr-2 text-white text-xs cursor-pointer rounded-full w-6 h-6 flex items-center justify-center bg-gray-800 hover:bg-blue-500 text-gray-500 hover:text-white transition duration-200 ease-in-out">
                                            <a href="https://twitter.com/httam298"><i class="fa fa-twitter"></i></a>
                                        </div>
                                        <div
                                            class="mr-2 text-white text-xs cursor-pointer rounded-full w-6 h-6 flex items-center justify-center bg-gray-800 hover:bg-blue-800 text-gray-500 hover:text-white transition duration-200 ease-in-out">
                                            <a href="https://www.facebook.com/tth298"><i class="fa fa-facebook"></i></a>
                                        </div>
                                        <div
                                            class="text-white text-xs cursor-pointer rounded-full w-6 h-6 flex items-center justify-center bg-gray-800 hover:bg-gray-800 text-gray-500 hover:text-white transition duration-200 ease-in-out">
                                            <a href="https://github.com/tamht298"><i class="fa fa-github"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="w-full bg-white">
                    <div class="px-6 py-5 ">
                    <div class="flex lg:flex-row flex-col-reverse justify-center md:max-w-2xl lg:max-w-6xl">
                        <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pb-24 lg:w-9/12 mt-6 lg:mt-0 lg:px-5 lg:py-12">

                        <div
                            class="content mx-auto w-72 h-72 lg:w-48 lg:h-48 hover:shadow-2xl shadow-md relative bg-white rounded-md">
                            <div
                            class="content-overlay absolute rounded-md h-full w-full opacity-0 transition-all duration-500 ease-in-out">
                            </div>
                            <img src={Swift_Fundamental} class="content-image w-full h-full p-5 lg:py-8 "
                                alt=""/>
                            <div
                            class="content-details w-full absolute fadeIn-down opacity-0 m-auto flex items-center justify-center">
                            <h3 class="text-white lg:text-xl lg:px-2 text-center text-4xl">L???p tr??nh</h3>
                            </div>

                        </div>
                        <div
                            class="content mx-auto w-72 h-72 lg:w-48 lg:h-48 hover:shadow-2xl shadow-md relative bg-white rounded-md">
                            <div
                            class="content-overlay absolute rounded-md h-full w-full opacity-0 transition-all duration-500 ease-in-out">
                            </div>
                            <img src={Critical_Thinking} class="content-image w-full h-full p-5 lg:py-8 "
                                alt=""/>
                            <div
                            class="content-details w-full absolute fadeIn-down opacity-0 m-auto flex items-center justify-center">
                            <h3 class="text-white lg:text-xl lg:px-2 text-center text-4xl">K??? n??ng m???m</h3>
                            </div>

                        </div>
                        <div
                            class="content mx-auto w-72 h-72 lg:w-48 lg:h-48 hover:shadow-2xl shadow-md relative bg-white rounded-md">
                            <div
                            class="content-overlay absolute rounded-md h-full w-full opacity-0 transition-all duration-500 ease-in-out">
                            </div>
                            <img src={Professional_Speaking}
                                class="content-image w-full h-full p-5 lg:py-8 "
                                alt=""/>
                            <div
                            class="content-details w-full absolute fadeIn-down opacity-0 m-auto flex items-center justify-center">
                            <h3 class="text-white lg:text-xl lg:px-2 text-center text-4xl">Ti???ng anh</h3>
                            </div>

                        </div>
                        <div
                            class="content mx-auto w-72 h-72 lg:w-48 lg:h-48 hover:shadow-2xl shadow-md relative bg-white rounded-md">
                            <div
                            class="content-overlay absolute rounded-md h-full w-full opacity-0 transition-all duration-500 ease-in-out">
                            </div>
                            <img src={Selenium} class="content-image w-full h-full p-5 lg:py-8 "
                                alt=""/>
                            <div
                            class="content-details w-full absolute fadeIn-down opacity-0 m-auto flex items-center justify-center">
                            <h3 class="text-white lg:text-xl lg:px-2 text-center text-4xl">Testing</h3>
                            </div>

                        </div>
                        <div
                            class="content mx-auto w-72 h-72 lg:w-48 lg:h-48 hover:shadow-2xl shadow-md relative bg-white rounded-md">
                            <div
                            class="content-overlay absolute rounded-md h-full w-full opacity-0 transition-all duration-500 ease-in-out">
                            </div>
                            <img src={Working_Process} class="content-image w-full h-full p-5 lg:py-8 "
                                alt=""/>
                            <div
                            class="content-details w-full absolute fadeIn-down opacity-0 m-auto flex items-center justify-center">
                            <h3 class="text-white lg:text-xl lg:px-2 text-center text-4xl">K??? n??ng l??m vi???c nh??m</h3>
                            </div>

                        </div>


                        <div>
                            <div
                            class="mx-auto lg:w-48 lg:h-48 hover:shadow-2xl shadow-md p-4 pl-8 leading-9 flex items-center justify-center hover-trigger-fields bg-white md:h-full object-center text-4xl lg:text-sm font-semibold text-blue-700 hover:bg-gray-200 hover:text-blue-800 rounded-md flex justify-center items-center">
                            v?? nhi???u<br/> ch??? ????? kh??c...

                            </div>
                        </div>


                        </div>
                        <div class="lg:w-1/2 flex flex-col lg:px-8 lg:pt-12 pb-1">
                        <h2 class="text-gray-800 text-3xl font-bold mb-6">H??? tr??? nhi???u ch??? ?????, l??nh v???c</h2>
                        <p class="text-xl">B??n c???nh vi???c ????o t???o c??c k??? n??ng chuy??n m??n v??? l???p tr??nh nh?? l???p tr??nh Web v???i c??c ng??n
                            ng???, n???n t???ng Java, .Net, Nodejs, Php, Ruby on rails, l???p tr??nh ?????ng v???i Android, Swift, testing,... c??n c??
                            c??c ph???n ????o t???o v??? k?? n??ng m???m, ti???ng anh v?? k??? n??ng l??m vi???c nh??m.</p>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="bg-gray-900">
                    <div class="bg-gray-800 px-6 flex flex-col lg:flex-row justify-around py-12">
                    <div class="w-full lg:w-1/2">
                        <div
                        class="p-2 mb-6 inline-flex border-2 border-gray-700 hover:bg-gray-600 transition duration-500 ease-out rounded-md">
                        <h3 class="text-white text-3xl font-semibold leading-loose">Bi???u ????? tr???c quan</h3>
                        </div>
                        <div class="text-gray-300 mb-4">
                        <p class="text-xl">
                            X??y d???ng c??c bi???u ????? gi??p ????nh gi?? t???ng quan ng?????i h???c sau m???i b??i ki???m tra.
                        </p>
                        </div>

                    </div>
                    <div class="p-5 bg-white w-full lg:w-1/3 lg:mx-4 rounded-md">
                        <img src={chart} class="lg:mb-3" alt=""/>
                        <div class="text-gray-600 text-center text-2xl lg:text-base mt-5">
                        Bi???u ????? ????nh gi?? n??ng l???c ng?????i h???c
                        </div>
                    </div>


                    </div>
                </div>
                <div class="form-contact bg-white py-24 w-full">
                    <div class="flex flex-col md:flex-row justify-between px-6">
                    <div class="w-full flex justify-center md:w-1/2">
                        <img src={contact} class="w-2/3"/>
                    </div>
                    <div class="w-full md:w-1/2 lg:mt-10">
                        <div class="m-5 text-2xl font-bold">
                        <p>Li??n h??? ngay</p>
                        </div>
                        <div class="max-w-2xl rounded-md shadow-2xl px-3 py-2 border border-gray-500">
                        <form>
                            <div class="sm:flex md:flex-col md:p-2 lg:flex-row lg:px-6">
                            <div
                                class="sm:mx-1 lg:mx-0  sm:mr-2 lg:mr-3 md:mx-2w-full max-w-sm sm:w-1/2 md:w-full lg:w-full pb-3 relative">
                                <label for="contact-name" class="text-gray-500 text-sm md:text-xs font-semibold select-none">Ti??u
                                ?????</label>
                                <input formControlName="subject"
                                    class="appearance-none border rounded-md w-full py-2 px-3 mt-1 text-gray-600 font-semibold bg-gray-200 leading-tight outline-none focus:border-green-500"
                                    id="contact-name" type="text" placeholder="Nh???p ti??u ?????" autocomplete="off"/>
                                <p class="text-red-500 text-xs italic">
                                Ti??u ????? kh??ng ???????c b??? tr???ng</p>
                            </div>
                            <div class="md:mx-2 lg:mx-0 w-full sm:max-w-sm sm:w-1/2 md:w-full pb-3 relative">
                                <label for="contact-email" class="text-gray-500 text-sm md:text-xs font-semibold select-none">?????a ch???
                                email</label>
                                <input formControlName="email" required
                                    class="appearance-none border rounded-md w-full py-2 px-3 mt-1 text-gray-600 font-semibold bg-gray-200 leading-tight outline-none focus:border-green-500"
                                    id="contact-email" type="email" placeholder="Nh???p email c???a b???n" autocomplete="off"/>
                                <p class="text-red-500 text-xs italic">
                                Email kh??ng ???????c b??? tr???ng</p>
                                <p class="text-red-500 text-xs italic"
                                >Email kh??ng h???p l???</p>
                            </div>


                            </div>

                            <div class="sm:mx-1 md:mx-4 md:pr-4 lg:mx-6 lg:px-0 pb-3">
                            <label for="contact-content" class="text-gray-500 text-sm md:text-xs font-semibold select-none">N???i
                                dung</label>
                            <textarea formControlName="contentBody"
                                        class="appearance-none resize-none border rounded-md w-full py-2 px-3 mt-1 text-gray-600 font-semibold bg-gray-200 leading-tight outline-none focus:border-green-500"
                                        id="contact-content" type="textarea" rows="5" placeholder="M?? t??? ?? ki???n, v???n ????? c???a b???n"
                                        autocomplete="off"></textarea>
                            <p class="text-red-500 text-xs italic">
                                N???i dung kh??ng ???????c b??? tr???ng</p>
                            </div>
                            <div class="mt-4 mb-4">
                            <button
                                class=" focus:outline-none text-white rounded-md px-1 px-6 py-2 ml-3 lg:ml-8 mb-3 shadow-xl transition duration-500 ease-in-out"
                                type="submit"><i
                                class="fa fa-paper-plane"></i> G???i ph???n h???i
                            </button>
                            </div>

                        </form>
                        </div>
                    </div>
                    </div>
                </div>
                <div class="flex text-gray-200 w-full justify-between items-end px-8 py-4">
                    <div class="w-1/3">
                    <div class="uppercase my-3">LI??N H???</div>
                    <ul>
                        <li class="my-2"> T??a nh?? SaigonTech, L?? 14, ???????ng s??? 5, C??ng vi??n Ph???n m???m Quang Trung, Q. 12, Tp. HCM, Vi???t
                        Nam
                        </li>
                        <li class="my-2"> Phone: 0903 76 71 88
                        </li>
                        <li class="my-2"> Website: www.iscquangtrung.edu.vn
                        </li>
                        <li class="my-2"> Email: iscquangtrung@saigontech.edu.vn
                        </li>
                    </ul>

                    </div>
                    <div class="text-center py-3">- Made with <span class="text-pink-700"><i class="fa fa-heart"></i></span> by
                    <a class="text-blue-700" href="https://github.com/tamht298" target="_blank">Pham Trung Kien</a></div>
                </div>
            </div>
        )
    }
}

export default HomeComponent;