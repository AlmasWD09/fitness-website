import { MdCall, MdEmail } from "react-icons/md";
import { BiLogoTelegram } from "react-icons/bi";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  return (
    <section className="relative lg:h-[565px] bg-[#905A00]">
            <div>
                <div className="my-10 flex items-center  lg:h-[565px] px-4 lg:px-0 lg:max-w-[1320px] mx-auto">
                    <div className="lg:flex h-[288px]">
                        <div className="w-full -mx-6 lg:w-2/5">
                            <div className="px-6">
                                <a href="#">
                                    {/* <img className="" src={logo} alt=""/> */}
                                </a>

                                <p className="lg:max-w-[350px] leading-6 mt-2 text-white dark:text-gray-400">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal.</p>

                               
                            </div>
                        </div>

                        <div className="mt-6 lg:mt-0 lg:flex-1">
                            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                                <div className="text-white">
                                    <h3 className=" uppercase dark:text-white">Information</h3>
                                    <a href="#" className="block mt-2 text-sm  dark:text-gray-400 hover:underline">Contact Us</a>
                                    <a href="#" className="block mt-2 text-sm  dark:text-gray-400 hover:underline">Privacy Policy</a>
                                    <a href="#" className="block mt-2 text-sm  dark:text-gray-400 hover:underline">Terms & Condition</a>
                                </div>

                                <div className="text-white col-span-2">
                                    <h3 className=" uppercase dark:text-white">Help & Support</h3>
                                    <div className="flex items-start gap-1">
                                        <h3 className="flex items-center gap-2"><MdEmail/> Email:</h3>
                                        <div>
                                        <p>youremail@gmail.com</p>
                                        <p>letstalk@gmail.com</p>
                                        </div>
                                    </div>
                                    <div className="flex items-start gap-1">
                                        <h3 className="flex items-center gap-2"><MdCall/> Phone:</h3>
                                        <div>
                                        <p>( +1 ) (888) 750-6866</p>
                                        <p>( +1 ) (888) 785-3986</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="text-white">
                                    <h3 className=" uppercase dark:text-white">Newsletter Sign up</h3>
                                    <a className="block mt-2 text-sm my-6  dark:text-gray-400">Get Alert Directly Into Your Inbox
                                    After Each Post.</a>
                                    <div className="relative  w-[296px]">
                                        <input
                                            className="bg-white h-[48px] pl-4 font-medium rounded-full w-full pr-12 outline-none "
                                            placeholder="Enter your email"
                                            type="text"
                                        />
                                        <button
                                            className="absolute text-xl rounded-full right-1 top-1/2 transform -translate-y-1/2 bg-[#E8D3B0] text-[#3F2700] p-3 "
                                        >
                                           <BiLogoTelegram />
                                        </button>
                                        </div>

                                </div>

                                
                            </div>
                        </div>
                    </div>

                   
                </div>
                <div className="w-full absolute bottom-0 h-[50px] bg-[#07060A]">
                    <div className="px-4 h-[50px] flex items-center justify-between lg:px-0 lg:max-w-[1320px] mx-auto">
                        <div className="flex gap-2 text-white border-r lg:pr-[450px]">
                        <p className="border-r pr-3">2024Spaktech. Agency</p>
                        <p>All Right Reserved</p>
                        </div>
                        <div className="flex items-center gap-5 text-white">
                            <p><CiFacebook /></p>
                            <p><FaInstagram /></p>
                            <p><RiTwitterXFill /></p>
                        </div>
                    </div>
                </div>
            </div>
  </section>
  )
}

export default Footer