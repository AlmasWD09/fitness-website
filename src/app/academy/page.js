"use client"
import { useEffect, useState, } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiVideoFill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { FaCalendarDays } from "react-icons/fa6";



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
        video_url: "https://www.youtube.com/embed/XWniFyd9r4I?si=o2ALFJQg6-GvrX89",
        tipic: "Yoga",
        date: "03/12/2024"
      },
      {
        id: 102,
        title: "Mastering Ashtanga yoga steps",
        content: "Explore the step-by-step progression of Ashtanga yoga with detailed instructions for each posture. This section focuses on developing strength, flexibility, and endurance, ensuring a comprehensive understanding of the practice.",
        video_url: "https://www.youtube.com/embed/kf6yyxMck8Y?si=IBOLucSUZGIybhXB",
        tipic: "Ashtanga Steps",
        date: "04/12/2024"
      },
      {
        id: 103,
        title: "Video demonstration of techniques",
        content: "Watch a practical demonstration of key yoga techniques to enhance your practice. This video offers visual guidance, making it easier to follow along and perfect your form.",
        video_url: "/video01.mp4",
        tipic: "Yoga Techniques Demo",
        date: "05/12/2024"
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
        video_url: "link 01",
        tipic: "Advanced Hatha",
        date: "06/12/2024"
      },
      {
        id: 202,
        title: "Ashtanga flow explained",
        content: "Understand the flow of Ashtanga yoga and how to seamlessly transition between poses. This part emphasizes synchronization of breath with movement, promoting a meditative and energizing experience.",
        video_url: "link 02",
        tipic: "Ashtanga Flow",
        date: "07/12/2024"
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
        video_url: "link 01",
        tipic: "Meditation Techniques",
        date: "08/12/2024"
      },
      {
        id: 302,
        title: "Breath control in Ashtanga",
        content: "Discover the importance of breath control in Ashtanga yoga and practice guided exercises. This part focuses on pranayama techniques that enhance energy flow and improve concentration.",
        video_url: "link 02",
        tipic: "Breath Control",
        date: "09/12/2024"
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
        video_url: "link 01",
        tipic: "Strength Building",
        date: "10/12/2024"
      },
      {
        id: 402,
        title: "Dynamic sequences in Ashtanga",
        content: "Practice dynamic sequences in Ashtanga yoga to improve coordination and balance. This section offers a structured approach to mastering challenging transitions with ease and confidence.",
        video_url: "link 02",
        tipic: "Dynamic Sequences",
        date: "11/12/2024"
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
        video_url: "link 01",
        tipic: "Restorative Yoga",
        date: "12/12/2024"
      },
      {
        id: 502,
        title: "Ashtanga yoga for beginners",
        content: "A beginner-friendly guide to starting Ashtanga yoga with simple and effective poses. This section provides clear instructions and tips for building a consistent and enjoyable practice.",
        video_url: "link 02",
        tipic: "Beginner Ashtanga",
        date: "13/12/2024"
      }
    ]
  }
];






const reviewsData = [
  "sssssssssssssssssssfffffffffffff",
  "sssssssssssssssssssfffffffffffff",
]
const Academy = () => {
  const [showAll, setShowAll] = useState(false);
  const [openItem, setOpenItem] = useState(null); // Tracks which accordion item is open
  const [openItemDetails, setOpenItemDetails] = useState(accordionData[0].contentArray[0])
  const [reviews, setReviews] = useState(() => {
    // const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [
    //   "sssssssssssssssssssfffffffffffff",
    //   "sssssssssssssssssssfffffffffffff",
    // ];
    // return storedReviews;
  });

  console.log(openItemDetails, 'line 231----->')

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

  const handleSubmit = (event) => {
    event.preventDefault();

    // Get the new review from the form input
    const newReview = event.target.comment.value;

    // Update the reviews state and save it to localStorage
    // const updatedReviews = [...reviews, newReview];
    // setReviews(updatedReviews);
    // localStorage.setItem("reviews", JSON.stringify(updatedReviews));

    // Clear the form input
    event.target.reset();
  };

  useEffect(() => {
    const storedReviews = JSON.parse(localStorage.getItem("reviews"));
    if (storedReviews) {
      setReviews(storedReviews);
    }
  }, []);

  return (
    <>
      <section className="container px-4 mx-auto pt-28 border-2 border-red-500">

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
          {/* left side Video */}
          <div className="lg:col-span-2">
            <iframe width="100%" height="400" src={openItemDetails.video_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>

            {/* **** video for icon and title or content **** */}
            <div className="px-2">
              <div className="flex items-center  gap-20 py-4">
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

            {/* comment section */}
            <div className="px-6 mt-10">
              {/* Main Comment Input */}
              <div className=" bg-white  p-4 mb-4">
                <div className="flex items-center mb-2">
                  <Image src="https://i.ibb.co.com/pzB9Ysr/almas.png" alt="user-avatar" width={100} height={100} className="w-10 h-10 rounded-full mr-3"/>
                  <p className="font-semibold text-gray-800">Harun353@gmail.com</p>
                </div>
                <textarea
                cols={5}
                rows={5}
                  placeholder="Add a comment"
                  className="w-full p-2 border outline-none"
                ></textarea>
                <div className="text-right mt-2">
                  <button className="border border-primary font-semibold text-primary px-4 py-1  ">
                    Add a comment
                  </button>
                </div>
              </div>

              {/* Replies one */}
                <div className=" bg-white  p-4 mb-4">
                  <div className="flex mb-4">
                  <Image src="https://i.pravatar.cc/40" alt="user-avatar" width={100} height={100} className="w-10 h-10 rounded-full mr-3"/>
                    <div>
                      <p className="font-semibold text-gray-800">Joan543@gmail.com</p>
                      <p className="text-gray-600 text-sm mt-1">
                      Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Vivamus vitae purus non mi facilisis convallis id eget nulla. Fusce vulputate elit id odio ultricies, in cursus dui aliquet.
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <button className="text-primary text-sm font-medium border border-primary px-4">
                      Reply
                    </button>
                  </div>
                </div>
              {/* Replies two */}
                <div className=" bg-white  p-4 mb-4">
                  <div className="flex mb-4">
                  <Image src="https://images.unsplash.com/photo-1499470932971-a90681ce8530?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="user-avatar" width={100} height={100} className="w-10 h-10 rounded-full mr-3"/>
                    <div>
                      <p className="font-semibold text-gray-800">mstkhushiakter333@gmail.com</p>
                      <p className="text-gray-600 text-sm mt-1">
                      Suspendisse potenti. Donec dictum malesuada nisi, a dapibus tortor condimentum nec. Mauris euismod volutpat risus, in luctus orci scelerisque eget. Vivamus id fermentum libero. Integer cursus finibus diam eget tristique.
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                  <button className="text-primary text-sm font-medium border border-primary px-4">
                      Reply
                    </button>
                  </div>
                </div>
            </div>
          </div>


          {/* right side Course content */}
          <div className="lg:min-h-screen rounded-md overflow-y-auto">
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
                        <div key={nestedItem.id} onClick={() => handleClickAllDetails(item.id, nestedItem.id)} className="cursor-pointer hover:bg-slate-600 p-4 bg-white text-gray-600 border-b">
                          <p className="flex  gap-2"><FaCircleCheck className="text-2xl" />{nestedItem.title}</p>
                          <p className="flex items-center gap-2 ml-7"><RiVideoFill className="text-xl" />{'time'}</p>
                        </div>
                      )
                    })

                  )}

                </div>
              ))}
            </div>
          </div>
        </div>

        {/* review or comment*/}

        {/* <div>
          <form onSubmit={(event) => handleSubmit(event)}>
            <input className="border" type="text" name="comment"></input>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div>
          {
            reviews?.map((review, idx) => {
              return (
                <div key={idx}>

                  <h1>{review}</h1>
                </div>
              )
            })
          }
        </div> */}



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