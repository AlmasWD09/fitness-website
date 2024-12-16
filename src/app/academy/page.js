"use client"
import { useState, } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

const Academy = () => {
  const [showAll, setShowAll] = useState(false);
  const [openItem, setOpenItem] = useState(null); // Tracks which accordion item is open

  // Accordion data
  const accordionData = [
    {
      id: 1,
      title: "What is Next.js?",
      content: "Next.js is a React framework for production. It provides features like server-side rendering and static site generation.",
    },
    {
      id: 2,
      title: "What is Tailwind CSS?",
      content: "Tailwind CSS is a utility-first CSS framework for rapidly building custom user interfaces.",
    },
    {
      id: 3,
      title: "Why use Next.js?",
      content: "Next.js makes it easy to build fast, user-friendly web applications with excellent SEO capabilities.",
    },
  ];

  // Handle click to toggle accordion items
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id); // Toggle open/close
  };

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

  // video data
  const videoData = [
    { id: 1, src: "/video01.mp4" },

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
        <div className="w-[50%]">
          <div>
            {videoData.map((video) => (
              <div key={video.id} style={{ marginBottom: "20px" }}>
                <iframe
                  width="600"
                  height="400"
                  src={video.src}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={`YouTube Video ${video.id}`}
                ></iframe>
              </div>
            ))}
          </div>
        </div>


          {/* Course content */}
          <div className="w-[50%] ">
            <div className="container mx-auto mt-10 max-w-xl">
              {accordionData.map((item) => (
                <div
                  key={item.id}
                  className="border border-gray-300 rounded-lg mb-4 overflow-hidden shadow-sm"
                >
                  <button
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex justify-between items-center p-4 bg-gray-100 text-gray-800 font-medium focus:outline-none"
                  >
                    <span>{item.title}</span>
                    <span
                      className={`transition-transform duration-300 ${openItem === item.id ? "rotate-180" : ""
                        }`}
                    >
                      <IoIosArrowDown />
                    </span>
                  </button>
                  {openItem === item.id && (
                    <div className="p-4 bg-white text-gray-600">
                      {item.content}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* More class */}
        <div>
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
        </div>
      </section>
    </>
  );
};

export default Academy;