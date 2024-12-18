"use client"
import Link from "next/link";
import { FaHome } from "react-icons/fa";
import CartItem from "../../components/CartItem";
import { useCart } from "../../contexts/CartContext";


const Cart = () => {
    const {cartItems} = useCart()
 
  return (
    <>
     <div className="container mx-auto px-4 pt-32 pb-20">
      <div>
        <div className="flex items-center">
        <span className=""><Link href="/"><FaHome /></Link></span>
        <span className="mx-2">/</span>
        <h3 className="text-gray-500 font-noto">Cart</h3>
        </div>
      <h1 className="text-2xl font-semibold mb-6 text-gray-500 font-noto">Cart History</h1>
      </div>
      <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
     {
      cartItems.length === 0 ? <div className="text-white text-center bg-primary max-w-[300px] mx-auto py-8 space-y-4">
        <h1 className="text-3xl text-center font-bold  uppercase">Data not found</h1>
        <p className="text-2xl">Please Product Add</p>
      </div>
      :
      <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
      {cartItems.map((item,idx) => (
        <CartItem key={idx} item={item} />
      ))}
    </div>
     }
    </div>
    </div>
    </>
  )
}

export default Cart