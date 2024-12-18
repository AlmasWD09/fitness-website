"use client"
import { useEffect, useState, } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaCalendarDays } from "react-icons/fa6";
import Comment from "../../components/Comment";
import Chart from "../../components/Chart";


// Accordion data
const accordionData = [
  {
    id: 1,
    title: "Series No 01 : Hatha yoga, Ashtanga...",
    contentArray: [
      {
        id: 101,
        title: "45-min advance vinyasa yoga",
        content: "This section introduces you to the foundational principles of Hatha yoga, including breathing techniques, basic poses, and their benefits. You'll learn how to align your body and mind through guided exercises designed for beginners.",
        video_url: "https://www.youtube.com/embed/E4BpA2jCB2g?si=phpmPBR7qRN3jTX_",
        tipic: "Yoga",
        date: "03/12/2024",
        video_time: "04 3h 40m",
      },
      {
        id: 102,
        title: "Mastering Ashtanga yoga steps",
        content: "Explore the step-by-step progression of Ashtanga yoga with detailed instructions for each posture. This section focuses on developing strength, flexibility, and endurance, ensuring a comprehensive understanding of the practice.",
        video_url: "https://www.youtube.com/embed/kf6yyxMck8Y?si=IBOLucSUZGIybhXB",
        tipic: "Ashtanga Steps",
        date: "04/12/2024",
        video_time: "02 1h 40m",
      },
      {
        id: 103,
        title: "Video demonstration of techniques",
        content: "Watch a practical demonstration of key yoga techniques to enhance your practice. This video offers visual guidance, making it easier to follow along and perfect your form.",
        video_url: "/video01.mp4",
        tipic: "Yoga Techniques Demo",
        date: "05/12/2024",
        video_time: "04 1h 55m",
      }
    ]
  },
  {
    id: 2,
    title: "Series No 02 : Hatha yoga, Ashtanga...",
    contentArray: [
      {
        id: 201,
        title: "Advanced Hatha yoga postures",
        content: "Dive deeper into Hatha yoga with advanced postures and their benefits for flexibility and strength. This section includes variations of classic poses to challenge your abilities and enhance your practice.",
        video_url: "https://www.youtube.com/embed/9o0UPuDBM8M?si=NlsZE-4jf6zmqF2t",
        tipic: "Advanced Hatha",
        date: "06/12/2024",
        video_time: "04 1h 40m",
      },
      {
        id: 202,
        title: "Ashtanga flow explained",
        content: "Understand the flow of Ashtanga yoga and how to seamlessly transition between poses. This part emphasizes synchronization of breath with movement, promoting a meditative and energizing experience.",
        video_url: "https://www.youtube.com/embed/gkTxBPuvrjU?si=XT99PwEB5ebcnMj0",
        tipic: "Ashtanga Flow",
        date: "07/12/2024",
        video_time: "04 3h 40m",
      }
    ]
  },
  {
    id: 3,
    title: "Series No 03 : Hatha yoga, Ashtanga...",
    contentArray: [
      {
        id: 301,
        title: "Meditation with Hatha yoga",
        content: "Learn how to combine meditation techniques with Hatha yoga for mental clarity and relaxation. This section guides you through mindfulness exercises that complement yoga postures to achieve a holistic sense of well-being.",
        video_url: "https://www.youtube.com/embed/Tz9d7By2ytQ?si=u-IHN4uIUoMOq-E7",
        tipic: "Meditation Techniques",
        date: "08/12/2024",
        video_time: "04 3h 40m",
      },
      {
        id: 302,
        title: "Breath control in Ashtanga",
        content: "Discover the importance of breath control in Ashtanga yoga and practice guided exercises. This part focuses on pranayama techniques that enhance energy flow and improve concentration.",
        video_url: "https://www.youtube.com/embed/BdhqubW1GJE?si=fIN3dBQwvzA5MEBW",
        tipic: "Breath Control",
        date: "09/12/2024",
        video_time: "08 2h 30m",
      }
    ]
  },
  {
    id: 4,
    title: "Series No 04 : Hatha yoga, Ashtanga...",
    contentArray: [
      {
        id: 401,
        title: "Building strength with Hatha yoga",
        content: "Focus on strength-building postures in Hatha yoga and their impact on overall fitness. This section includes a detailed breakdown of poses that target core, upper body, and lower body strength.",
        video_url: "https://www.youtube.com/embed/ehXOS9mMrcU?si=gFpGsXBSwqsw2krB",
        tipic: "Strength Building",
        date: "10/12/2024",
        video_time: "04 3h 40m",
      },
      {
        id: 402,
        title: "Dynamic sequences in Ashtanga",
        content: "Practice dynamic sequences in Ashtanga yoga to improve coordination and balance. This section offers a structured approach to mastering challenging transitions with ease and confidence.",
        video_url: "https://www.youtube.com/embed/xRXhpMsLaXo?si=N1Q8z_2NpN3TR3m6",
        tipic: "Dynamic Sequences",
        date: "11/12/2024",
        video_time: "04 3h 40m",
      }
    ]
  },
  {
    id: 5,
    title: "Series No 05 : Hatha yoga, Ashtanga...",
    contentArray: [
      {
        id: 501,
        title: "Restorative Hatha yoga",
        content: "Explore restorative poses in Hatha yoga that promote deep relaxation and healing. This section emphasizes gentle stretches and supportive postures to rejuvenate your body and mind.",
        video_url: "https://www.youtube.com/embed/E4BpA2jCB2g?si=p7b4eg6EeSPgstmT",
        tipic: "Restorative Yoga",
        date: "12/12/2024",
        video_time: "04 3h 30m",
      },
      {
        id: 502,
        title: "Ashtanga yoga for beginners",
        content: "A beginner-friendly guide to starting Ashtanga yoga with simple and effective poses. This section provides clear instructions and tips for building a consistent and enjoyable practice.",
        video_url: "https://www.youtube.com/embed/Hb4qlwOMQKU?si=pSWJ492mJNAyb-80",
        tipic: "Beginner Ashtanga",
        date: "13/12/2024",
        video_time: "04 3h 40m",
      }
    ]
  },

  {
    id: 6,
    title: "Series No 06 : Hatha yoga, Ashtanga...",
    contentArray: [
      {
        id: 601,
        title: "Advanced Hatha yoga postures",
        content: "Dive deeper into Hatha yoga with advanced postures and their benefits for flexibility and strength. This section includes variations of classic poses to challenge your abilities and enhance your practice.",
        video_url: "https://www.youtube.com/embed/uUKAYkQZXko?si=iznQa5PndwJypiyN",
        tipic: "Advanced Hatha",
        date: "05/12/2024",
        video_time: "04 3h 40m",
      },
      {
        id: 602,
        title: "Ashtanga flow explained",
        content: "Understand the flow of Ashtanga yoga and how to seamlessly transition between poses. This part emphasizes synchronization of breath with movement, promoting a meditative and energizing experience.",
        video_url: "https://www.youtube.com/embed/xhxmMnhLGq0?si=ZDxq1HguBTN7Rflo",
        tipic: "Ashtanga Flow",
        date: "03/12/2024",
        video_time: "09 1h 40m",
      }
    ]
  },
  {
    id: 7,
    title: "Series No 07 : Hatha yoga, Ashtanga...",
    contentArray: [
      {
        id: 701,
        title: "Meditation with Hatha yoga",
        content: "Learn how to combine meditation techniques with Hatha yoga for mental clarity and relaxation. This section guides you through mindfulness exercises that complement yoga postures to achieve a holistic sense of well-being.",
        video_url: "https://www.youtube.com/embed/X--97_D8H8k?si=s3Yf48OHm2mG4cDK",
        tipic: "Meditation Techniques",
        date: "02/12/2024",
        video_time: "04 3h 40m",
      },
      {
        id: 702,
        title: "Breath control in Ashtanga",
        content: "Discover the importance of breath control in Ashtanga yoga and practice guided exercises. This part focuses on pranayama techniques that enhance energy flow and improve concentration.",
        video_url: "https://www.youtube.com/embed/0OfLE2lBS4I?si=f4geIezN8dfu1CX7",
        tipic: "Breath Control",
        date: "06/12/2024",
        video_time: "04 2h 20m",
      }
    ]
  },
];

const Academy = () => {
  const [showAll, setShowAll] = useState(false);
  const [openItem, setOpenItem] = useState(null);
  const [openItemDetails, setOpenItemDetails] = useState(accordionData[0].contentArray[0])

  // Handle click to toggle accordion items
  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
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

  const displayedClasses = showAll ? fitnessClasses : fitnessClasses.slice(0, 3);
  const handleViewAllClick = () => {
    setShowAll(true);
  };



  const handleClickAllDetails = (id, nestedID) => {
    const findData = accordionData.find((accrodian) => {
      return accrodian.id === id
    })
    const findNestedData = findData.contentArray.find((accordionNested) => {
      return accordionNested.id === nestedID
    })
    setOpenItemDetails(findNestedData)
  }

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews"));
    if (storedReviews) {
      setReviews(storedReviews);
    }
  }, []);

  return (
    <>
      <section className="container px-4 mx-auto pt-20 md:pt-28 ">
        {/* navigation bar here... */}
        <div>
          <div className="flex items-center">
            <span className=""><Link href="/"><FaHome /></Link></span>
            <span className="mx-2">/</span>
            <h3 className="text-gray-500 font-noto">Demand Library</h3>
          </div>
          <h1 className="text-2xl font-semibold  text-gray-500 font-noto">Academy to Studio</h1>
        </div>

        {/* search field */}
        <div className="flex justify-end items-center bg-primary p-2 my-5">
          <div className="relative flex items-center w-full max-w-md">
            <input
              type="text"
              placeholder="Search here..."
              className="w-full bg-gray-200 pl-8 pr-10 py-2 text-primary placeholder-pribg-primary border border-pribg-primary rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <div className="absolute left-2 top-1/2 transform -translate-y-1/2">
              {/* <!-- Search Icon --> */}
              <FiSearch className="w-5 h-5 text-primary" />
            </div>
            <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
              {/* <!-- Calendar Icon --> */}
              <FaCalendarDays className="w-5 h-5 text-primary" />
            </div>
          </div>
        </div>


        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/*================================= left side Video ===================== */}
          <div className="lg:col-span-2">
            <iframe width="100%" height="400" src={openItemDetails.video_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            {/* **** video for icon and title or content **** */}
            <div className="px-2">
              <div className="flex flex-col lg:flex-row items-center lg:gap-20 py-4">
                <div className="flex justify-between gap-20">
                  <p><span className="font-bold text-primaryGray">Topic: </span>{openItemDetails.tipic}</p>
                  <p><span className="font-bold text-primaryGray">Date: </span>{openItemDetails.date}</p>
                </div>
                <div className="flex justify-between gap-20">
                  <p className="flex items-center "><Image src="https://i.ibb.co.com/khtDFYX/image-5.png" alt="pdf" width={20} height={20} /> PDF File</p>
                  <p className="flex items-center "><Image src="https://i.ibb.co.com/1QcczJk/image-6.png" alt="doc" width={20} height={20} />DOC File</p>
                </div>
              </div>
              <h2 className="text-[24px] text-primaryGray font-semibold pb-4">{openItemDetails.title}</h2>
              <p className="text-[14px] text-primaryGray">{openItemDetails.content}</p>
            </div>

            {/* comment component here.. */}
            <Comment />
          </div>


          {/*================================= right side Course content===================== */}
          <div className="lg:min-h-screen h-[500px] rounded-md overflow-y-auto custom-scrollbar">

            {/* cahat component */}
            <div className="border mb-4 p-6">
              <h2 className="font-noto font-bold text-primaryGray">Your Progress</h2>
              <Chart />
            </div>

            <div className="">
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


                  {/* module here... */}
                  {openItem === item.id && (

                    item?.contentArray?.map((nestedItem, idx) => {
                      return (
                        <div key={idx} onClick={() => handleClickAllDetails(item.id, nestedItem.id)} className="cursor-pointer hover:bg-primaryGray/20 p-4 bg-white text-gray-600 border-b">
                          <p className="flex  gap-2"><FaCircleCheck className="text-2xl" />{nestedItem.title}</p>
                          <p className="flex items-center gap-2 ml-7">Total Video: {nestedItem.video_time}</p>
                        </div>
                      )
                    })

                  )}

                </div>
              ))}
            </div>
          </div>
        </div>


        {/* More class */}
        <div className="py-8 md:py-16">
          <div className="flex justify-between">
            <h2 className="md:text-[32px] font-medium font-noto text-gray-400">
              More Class Like This
            </h2>
            {!showAll && (
              <button
                className="text-primary md:text-[32px] font-medium font-noto underline"
                onClick={handleViewAllClick}
              >
                View All
              </button>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
            {displayedClasses.map((fitness, idx) => (
              <div key={idx} className="shadow-md pb-2">
                <Image className="h-60 object-cover" src={fitness.image} alt={fitness.title} height={500} width={500} />
                <div className="flex justify-between">
                  <h3>{fitness.title}</h3>
                  <button className="bg-[#2F2F2F] text-white/80 px-4 md:px-7 py-1">Details</button>
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