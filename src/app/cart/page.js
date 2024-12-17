"use client"
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import CartItem from "../../components/CartItem";


const Cart = () => {
    const cartItems = [
        {
          id: 1,
          image: "https://i.ibb.co.com/DGPQw3m/Rectangle-5089-1.png",
          name: "The Dumbbell",
          price: "150 CND",
          date: "05/12/2024",
          quantity: "02",
        },
        {
          id: 2,
          image: "https://i.ibb.co.com/r6RM8Cv/Rectangle-5089-2.png",
          name: "The Dumbbell",
          price: "150 CND",
          date: "05/12/2024",
          quantity: "08",
        },
        {
          id: 3,
          image: "https://i.ibb.co.com/fGq8HdP/Rectangle-5089-3.png",
          name: "The Dumbbell",
          price: "150 CND",
          date: "05/12/2024",
          quantity: "05",
        },
        {
          id: 4,
          image: "https://i.ibb.co.com/y85jDFr/Rectangle-5089.png",
          name: "The Dumbbell",
          price: "150 CND",
          date: "05/12/2024",
          quantity: "06",
        },
      ];
  return (
    <>
     <div className="container mx-auto p-4">
      <div>
        <div className="flex items-center">
        <span className=""><Link href="/"><FaHome /></Link></span>
        <span className="mx-2">/</span>
        <h3 className="text-gray-500 font-noto">Cart</h3>
        </div>
      <h1 className="text-2xl font-semibold mb-6 text-gray-500 font-noto">Cart History</h1>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
      <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
      {cartItems.map((item) => (
        <CartItem key={item.id} item={item} />
      ))}
    </div>
    </div>
    </div>
    </>
  )
}

export default Cart