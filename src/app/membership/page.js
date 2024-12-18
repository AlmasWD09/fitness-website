"use client"
import { FaCircleCheck } from "react-icons/fa6";

const Membership = () => {
  const memberships = [
    {
      "name": "Basic Membership",
      "price": "48 CND",
      "duration": "Monthly",
      "features": [
        "On-demand Access to workout library",
        "3 New Classes Every Week",
        "Join a Global Community",
        "Fitness Fusion Hub",
        "The Vitality Oasis Gym",
        "Active Lifestyle Emporium"
      ],
      "button_text": "Buy Now"
    },
    {
      "name": "Standard Membership",
      "price": "70 CND",
      "duration": "4 Month",
      "features": [
        "Empowerment Fitness Sanctuary",
        "Elite Performance Emporium",
        "Strength and Stamina Studios",
        "Fitness Fusion Hub",
        "The Vitality Oasis Gym",
        "Active Lifestyle Emporium"
      ],
      "button_text": "Buy Now"
    },
    {
      "name": "Premium Membership",
      "price": "120 CND",
      "duration": "1 Year",
      "features": [
        "Empowerment Fitness Sanctuary",
        "Elite Performance Emporium",
        "Strength and Stamina Studios",
        "Fitness Fusion Hub",
        "The Vitality Oasis Gym",
        "Active Lifestyle Emporium"
      ],
      "button_text": "Buy Now"
    }
  ]

  return (
    <div className="container mx-auto  px-4 pt-16 md:pt-24">
      <h2 className="font-noto text-4xl text-primaryGray py-4">Free Class</h2>
      <div className="rounded-md">
        <iframe className="rounded-md" width="100%" height="600" src="https://www.youtube.com/embed/FBs0l6cxl1o?si=StyUg6AlcQwJZtKq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </div>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 mt-28">
        {
          memberships?.map((item, idx) => {
            return (
              <div key={idx} className="bg-white border p-6 rounded-lg shadow-md flex flex-col justify-between">
                <div>
                  <div className='text-center'>
                    <h3 className="text-lg font-semibold text-gray-700 mb-2">{item.name}</h3>
                    <div className="flex justify-center mb-4">
                      <h1 className="text-3xl font-bold text-yellow-600">{item.price}</h1>
                      <p className="text-gray-500 mt-4">{item.duration}</p>
                    </div>
                  </div>
                  <ul className=" text-gray-600 mb-4 space-y-3">
                    {item.features.map((feature, idx) => (
                      <li key={idx} className="flex max-w-[253px] mx-auto ">
                        <span className="mr-2 mt-1"><FaCircleCheck /></span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className='w-full flex justify-center'>
                  <button className='bg-[#2F2F2F] text-white hover:text-primary font-semibold font-noto lg:mx-5 px-24 py-2'>Buy Now</button>
                </div>
              </div>
            )
          })
        }

      </div>

      {/* content */}
      <div className="my-16 text-wrap">
        <p><span className="font-bold font-noto">Note:</span>  stablished fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy</p>
      </div>
    </div>
  )
}

export default Membership