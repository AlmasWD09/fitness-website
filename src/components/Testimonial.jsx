"use client"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';

// Import required modules
import { FreeMode, Navigation } from 'swiper/modules';
import { RiDoubleQuotesL } from "react-icons/ri";
import Image from 'next/image';


const Testimonial = () => {
    return (
        <section className="container mx-auto px-4 lg:px-40 mt-20 mb-20">
            <h1 className="text-[24px] lg:text-[48px] text-primaryGray font-semibold font-noto text-center mb-10">
                What clients saying
            </h1>

            <Swiper
                loop={true}
                freeMode={true}
                spaceBetween={30}
                navigation={true} // Enable navigation
                modules={[FreeMode, Navigation]}
                className="mySwiper"
                breakpoints={{
                    // when window width is >= 320px
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 10,
                    },
                    // when window width is >= 768px
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 20,
                    },
                    // when window width is >= 1024px
                    1024: {
                        slidesPerView: 1,
                        spaceBetween: 1,
                    },
                }}
            >
                {/* swiper cart one */}
                <SwiperSlide>
                    <div className="bg-primaryGray/5 p-6 rounded">
                        <p className="flex text-center text-primaryGray ">
                            <RiDoubleQuotesL className='text-8xl pb-16 ' />
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more.
                        </p>
                        <div className="flex flex-col items-center justify-center">
                            <Image className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="review1" width={100} height={100} />

                            <div className="mt-4 text-center">
                                <h1 className="font-semibold text-primaryGray">Mia Brown</h1>
                                <span className="text-sm text-primaryGray">Marketer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* swiper cart two */}
                <SwiperSlide>
                    <div className="bg-primaryGray/5 p-6 rounded">
                        <p className="flex text-center text-primaryGray ">
                            <RiDoubleQuotesL className='text-8xl pb-16 ' />
                            It is a well-known truth that readers tend to be sidetracked by the content's readability when examining a layout. The advantage of Lorem Ipsum is that it appears more uniform.
                        </p>
                        <div className="flex flex-col items-center justify-center">
                            <Image className="object-cover rounded-full w-14 h-14" src="https://i.ibb.co.com/pzB9Ysr/almas.png" alt="review2" width={100} height={100} />

                            <div className="mt-4 text-center">
                                <h1 className="font-semibold text-primaryGray">Joan Doa</h1>
                                <span className="text-sm text-primaryGray">Web Developer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>

                {/* swiper cart three */}
                <SwiperSlide>
                    <div className="bg-primaryGray/5 p-6 rounded">
                        <p className="flex text-center text-primaryGray ">
                            <RiDoubleQuotesL className='text-8xl pb-16 ' />
                            It is a widely accepted notion that a viewer may get distracted by readable text while focusing on a design. The purpose of using Lorem Ipsum is to give it a cleaner look.
                        </p>

                        <div className="flex flex-col items-center justify-center">
                            <Image className="object-cover rounded-full w-14 h-14" src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="review3" width={100} height={100} />

                            <div className="mt-4 text-center">
                                <h1 className="font-semibold text-primaryGray">Mitchel</h1>
                                <span className="text-sm text-primaryGray">Designer</span>
                            </div>
                        </div>
                    </div>
                </SwiperSlide>
            </Swiper>

            {/* Custom Styling for Navigation Buttons */}
            <style jsx global>{`
         .swiper-button-next,
        .swiper-button-prev {
          background-color: #ffff;
          border-radius: 9999px;
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        .swiper-button-next::after,
        .swiper-button-prev::after {
          color: black; /* Default color */
          transition: color 0.3s ease; /* Smooth color transition */
        }
        
        /* Small devices */
        .swiper-button-next,
        .swiper-button-prev {
          width: 40px;
          height: 40px;
        }
        
        .swiper-button-next::after,
        .swiper-button-prev::after {
          font-size: 20px;
        }
        
        /* Medium devices (min-width: 768px) */
        @media (min-width: 768px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 50px;
            height: 50px;
          }
        
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 24px;
          }
        }
        
        /* Large devices (min-width: 1024px) */
        @media (min-width: 1024px) {
          .swiper-button-next,
          .swiper-button-prev {
            width: 50px;
            height: 50px;
          }
        
          .swiper-button-next::after,
          .swiper-button-prev::after {
            font-size: 26px;
          }
        }
        
        /* Hover styles for all devices */
        .swiper-button-next:hover,
        .swiper-button-prev:hover {
          background-color: #b47000;
        }
        
        .swiper-button-next:hover::after,
        .swiper-button-prev:hover::after {
          color: white; /* Change icon color to white on hover */
        }
        `}</style>
        </section>
    )
}

export default Testimonial