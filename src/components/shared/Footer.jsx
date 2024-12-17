import { MdCall, MdEmail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram} from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { BiLogoTelegram } from "react-icons/bi";
import Image from "next/image";

const Footer = () => {
    return (
        <footer className="bg-[#905a00] font-noto text-white ">
            <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:justify-between gap-10 md:gap-0 pt-16 pb-20">
                {/* Left Section */}
                <div className="mb-6 lg:mb-0 lg:w-[30%] ">
                    <Image src="https://i.ibb.co.com/6W21TPV/image-4.png" alt="nav logo" width={100} height={100} />
                    <p className="leading-relaxed max-w-[350px]">
                        It is a long established fact that a reader will be distracted by the
                        readable content of a page when looking at its layout. The point of
                        using Lorem Ipsum is that it has a more-or-less normal.
                    </p>
                </div>

                {/* Information Section */}
                <div className="mb-6 lg:mb-0">
                    <h3 className="font-semibold text-xl mb-4">Information</h3>
                    <ul className="space-y-2">
                        <li>Contact Us</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Condition</li>
                    </ul>
                </div>

                {/* Help & Support Section */}
                <div className="mb-6 lg:mb-0">
                    <h3 className="font-semibold text-xl mb-4">Help & Support</h3>
                    <div className="flex items-start gap-1">
                        <h3 className="flex items-center gap-2"><MdEmail /> Email:</h3>
                        <div>
                            <p>youremail@gmail.com</p>
                            <p>letstalk@gmail.com</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-1">
                        <h3 className="flex items-center gap-2"><MdCall /> Phone:</h3>
                        <div>
                            <p>( +1 ) (888) 750-6866</p>
                            <p>( +1 ) (888) 785-3986</p>
                        </div>
                    </div>
                </div>

                {/* Newsletter Sign Up Section */}
                <div className="lg:w-[30%]">
                    <h3 className="font-semibold text-xl mb-4">Newsletter Sign Up</h3>
                    <p className="mb-4">Get alert directly into your inbox after each post.</p>
                    <div className="relative w-full md:w-[50%] lg:w-full">
                        <input
                            type="email"
                            placeholder="Enter Your Mail"
                            className="w-full  px-4 py-2 rounded-full text-black outline-none"
                        />
                        <button className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-300 p-2 rounded-full hover:bg-gray-400 transition duration-300">
                            <BiLogoTelegram className="text-primary"/>
                        </button>
                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="w-full  bg-[#07060A]">
                <div className="p-4 flex flex-col lg:flex-row  items-center justify-between lg:px-0 lg:max-w-[1320px] mx-auto">
                    <div className="flex gap-2 text-white md:border-r md:pr-[450px] pb-4">
                        <p className="md:border-r pr-3">2024Spaktech. Agency</p>
                        <p>All Right Reserved</p>
                    </div>
                    <div className="flex items-center gap-5 text-white">
                        <p><CiFacebook /></p>
                        <p><FaInstagram /></p>
                        <p><RiTwitterXFill /></p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer