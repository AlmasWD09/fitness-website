"use client"
import { useEffect, useState, } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { RiVideoFill } from "react-icons/ri";
import { FaCircleCheck } from "react-icons/fa6";
import Image from "next/image";

// Accordion data
const accordionData = [
  {
    id: 1,
    title: "Series No 01 : Hatha yoga, Ashtanga...",
    contentArray: [
      {
        id: 101,
        title: "title 01",
        content: "content 01",
        video_url: "https://www.youtube.com/embed/XWniFyd9r4I?si=o2ALFJQg6-GvrX89"
      },
      {
        id: 102,
        title: "title 02",
        content: "content 02",
        video_url: "https://www.youtube.com/embed/kf6yyxMck8Y?si=IBOLucSUZGIybhXB"
      },
      {
        id: 103,
        title: "title 02",
        content: "content 02",
        video_url: "/video01.mp4"
      }
    ]
  },
  {
    id: 2,
    title: "Series No 02 : Hatha yoga, Ashtanga...",
    contentArray: [
      {
        id: 201,
        title: "title 01",
        content: "content 01",
        video_url: "link 01"
      },
      {
        id: 202,
        title: "title 02",
        content: "content 02",
        video_url: "link 02"
      }
    ]
  },
  {
    id: 3,
    title: "Series No 03 : Hatha yoga, Ashtanga...",
    contentArray: [
      {
        id: 301,
        title: "title 01",
        content: "content 01",
        video_url: "link 01"
      },
      {
        id: 202,
        title: "title 02",
        content: "content 02",
        video_url: "link 02"
      }
    ]
  },
  {
    id: 4,
    title: "Series No 04 : Hatha yoga, Ashtanga...",
    contentArray: [
      {
        id: 401,
        title: "title 01",
        content: "content 01",
        video_url: "link 01"
      },
      {
        id: 202,
        title: "title 02",
        content: "content 02",
        video_url: "link 02"
      }
    ]
  },
  {
    id: 5,
    title: "Series No 05 : Hatha yoga, Ashtanga...",
    contentArray: [
      {
        id: 501,
        title: "title 01",
        content: "content 01",
        video_url: "link 01"
      },
      {
        id: 202,
        title: "title 02",
        content: "content 02",
        video_url: "link 02"
      }
    ]
  },

];

const reviewsData = [
  "sssssssssssssssssssfffffffffffff",
  "sssssssssssssssssssfffffffffffff",
]
const Academy = () => {
  const [showAll, setShowAll] = useState(false);
  const [openItem, setOpenItem] = useState(1); // Tracks which accordion item is open
  const [openItemDetails, setOpenItemDetails] = useState(accordionData[0].contentArray[0])
  const [reviews, setReviews] = useState(() => {
    // const storedReviews = JSON.parse(localStorage.getItem("reviews")) || [
    //   "sssssssssssssssssssfffffffffffff",
    //   "sssssssssssssssssssfffffffffffff",
    // ];
    // return storedReviews;
  });


  // Handle click to toggle accordion items
  const toggleItem = (id) => {
    console.log(id, 'line 77')
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
    const updatedReviews = [...reviews, newReview];
    setReviews(updatedReviews);
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
      <section className="container px-4 mx-auto mt-10 border-2 border-red-500">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Video play */}
          <div className="lg:col-span-2">
            <iframe width="100%" height="400" src={openItemDetails.video_url} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>


          {/* Course content */}
          <div className=" bg-sky-300 rounded-md h-[400px] overflow-y-auto">
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


                  {/* module here... */}
                  {openItem === item.id && (

                    item?.contentArray?.map((nestedItem, idx) => {
                      console.log(nestedItem, 'line 168')
                      return (
                        <div onClick={() => handleClickAllDetails(item.id, nestedItem.id)} key={nestedItem.id} className="cursor-pointer hover:bg-slate-600 p-4 bg-white text-gray-600 border-b">
                          <p className="flex  gap-2"><FaCircleCheck className="text-2xl" />{nestedItem.title}</p>
                          <p className="flex items-center gap-2 ml-7"><RiVideoFill className="text-xl" />{nestedItem.content}</p>
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