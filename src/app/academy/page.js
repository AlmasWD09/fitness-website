"use client"
import { useState, } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const Academy = () => {
  const [showAll, setShowAll] = useState(false);

  const fitnessClasses = [
    {
      id: 1,
      image: "https://i.ibb.co.com/ncymCFb/Rectangle-5101-1.png",
      title: "Elegant Ceramic Vase",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/3d3pN1s/Frame-1000003659.png",
      title: "Wireless Noise-Canceling Headphones",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/R3wjfjc/Rectangle-5101.png",
      title: "Eco-Friendly Bamboo Cutting Board",
    },
    {
      id: 4,
      image: "https://i.ibb.co.com/ncymCFb/Rectangle-5101-1.png",
      title: "Stainless Steel Kitchen Knife Set",
    },
    {
      id: 5,
      image: "https://i.ibb.co.com/hRCDx9h/Rectangle-484.png",
      title: "Smart Fitness Tracker",
    },

  ];

  // video play data
  const videoData = [
    { id: 1, src: "https://youtu.be/sBBUbLgLGwU?si=P-5erqM4P2zDwGi8", type: "video/mp4" },

  ];


  const displayedClasses = showAll ? fitnessClasses : fitnessClasses.slice(0, 3);
  const handleViewAllClick = () => {
    setShowAll(true);
  };

  return (
    <>
      <section className="container px-4 mx-auto mt-10 border-2 border-red-500">
        <div className="flex justify-between p-4">
          {/* Video play */}
          <div className="w-[50%] ">
            <div>
              {videoData.map((video) => (
                <div key={video.id} style={{ marginBottom: "20px" }}>
                  <video width="600" controls>
                    <source src={video.src} type={video.type} />
                  </video>
                </div>
              ))}
            </div>
          </div>
          {/* Course content */}
          <div className="w-[50%] ">
            <div className="mt-8 space-y-8 lg:mt-12">
              <div className="p-4 bg-gray-100 rounded-lg dark:bg-gray-800">
                <button className="flex items-center justify-between w-full">
                  <h1 className="font-semibold text-gray-700 dark:text-white">
                    How can I pay for my appointment?
                  </h1>
                  <span className="text-gray-4800 text-3xl">
                    <IoIosArrowDown />
                  </span>
                </button>

                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis,
                </p>
                <p className="mt-2 text-sm text-gray-500 dark:text-gray-300">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas eaque nobis,
                </p>
              </div>

              <div className="p-8 bg-gray-100 rounded-lg dark:bg-gray-800">
                <button className="flex items-center justify-between w-full">
                  <h1 className="font-semibold text-gray-700 dark:text-white">
                    Is the cost of the appointment covered by private health insurance?
                  </h1>
                  <span className="text-white bg-blue-500 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                    </svg>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* More class */}
        {/* <div>
          <div className="flex justify-between">
            <h2 className="text-[32px] font-medium font-noto text-gray-400">
              More Class Like This
            </h2>
            {!showAll && ( // Only show "View All" if not all items are displayed
              <button
                className="text-primary text-[32px] font-medium font-noto underline"
                onClick={handleViewAllClick}
              >
                View All
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {displayedClasses.map((fitness, idx) => (
              <div key={idx}>
                <Image className="h-60 object-cover" src={fitness.image} alt={fitness.title} height={500} width={500} />
                <div className="flex justify-between">
                  <h3>{fitness.title}</h3>
                  <button className="bg-black text-white px-4 py-2">Details</button>
                </div>
              </div>
            ))}
          </div>
        </div> */}
      </section>
    </>
  );
};

export default Academy;
