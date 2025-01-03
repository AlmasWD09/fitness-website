"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";
import { FiSearch } from "react-icons/fi";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { useCart } from "../../contexts/CartContext";
import { useRouter } from "next/navigation";


const Navbar = () => {
  const { cartItems } = useCart();
  const [getMenu, setMenu] = useState(false);
  const router = useRouter()

  const navLinks = [
    {
      path: "/",
      title: "Home",
    },
    {
      path: "/academy",
      title: "Academy to Studio",
    },
    {
      path: "/membership",
      title: "MemberShip",
    },
    {
      path: "/about",
      title: "About Us",
    },
    {
      path: "/contact",
      title: "Contact Us",
    },
    {
      path: "/blog",
      title: "Blogs",
    },
  ];
  // navigate for home page
  const handleClick = () => {
    router.push('/')
  }
  // navigate for cart page
  const handleCart = () => {
    router.push('/cart')
  }


  return (
    <div className="bg-gray-100 font-noto fixed w-full shadow-md z-50 py-1">
      <div className=" flex items-center justify-between container mx-auto px-4 ">
        <div className="lg:hidden" onClick={() => setMenu(!getMenu)}>
          {getMenu ? (
            <IoCloseSharp className="text-xl bg-primary/30 rounded-full w-10 h-10 p-2" />
          ) : (
            <GiHamburgerMenu className="text-xl bg-primary/30 rounded-full w-10 h-10 p-2" />
          )}
        </div>

        {/* left section  */}
        <div className=" hidden lg:block">
          <Image onClick={() => handleClick()} className="cursor-pointer" src="https://i.ibb.co.com/6W21TPV/image-4.png" alt="logo" height={1000} width={200} />
        </div>
        <div className="flex items-center ml-40 gap-8 lg:hidden">
          <div onClick={() => handleCart()} className="cursor-pointer">
            <HiOutlineShoppingCart className="relative text-2xl " />
            <p className="absolute top-3 ml-4 w-4 h-4 bg-primary text-white rounded-full flex justify-center items-center text-xs"> {cartItems.length}</p>
          </div>
          <FiSearch className="text-2xl" />
          <Image className="w-14 h-1w-14" src="https://i.ibb.co.com/MRxhScd/Ellipse-223.png" alt="avater" width={100} height={100} />
        </div>

        <div className="hidden lg:flex ">
          <ul className="flex items-center gap-6">
            {navLinks.map((item) => (
              <Link key={item.path} href={item.path}>
                <div className="group relative">
                  <li className="hover:text-primary">{item.title}</li>

                  <span className="w-full h-0.5 absolute bg-primary -bottom-1 left-0 transform scale-x-0 group-hover:scale-x-100 transition-all duration-300 ease-in-out"></span>
                </div>
              </Link>
            ))}
          </ul>
        </div>
        {/* navlinks / center section end  */}

        <div className="flex items-center gap-2 lg:gap-6">
          {/* button start  */}
          <div className="group relative hidden lg:flex items-center gap-8">
            <div className="flex items-center gap-8">
              <div onClick={() => handleCart()} className="cursor-pointer">
                <HiOutlineShoppingCart className="relative text-2xl " />
                <p className="absolute -top-1 left-2 w-6 h-6 bg-primary text-white rounded-full flex justify-center items-center text-xs"> {cartItems.length}</p>
              </div>
              <FiSearch className="text-2xl" />
            </div>
            <div className="flex items-center gap-4">
              <button className="border border-primary px-6 py-2">Login</button>
              <button className="bg-primary/90 hover:bg-primary text-white px-6 py-2">Sign Up</button>
            </div>
          </div>
        </div>
      </div>



      {/* mobile responsive section  */}
      <div
        className={`h-screen overflow-y-auto w-full lg:hidden  absolute z-[9999]   transition-all bg-white ease-in-out duration-300 transform ${getMenu ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <div className="p-10 ">
          <ul className=" flex flex-col gap-6">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                onClick={() => setMenu(false)}
                href={item.path}
              >
                <li className="hover:text-primary">{item.title}</li>
              </Link>
            ))}
          </ul>
          <div className="flex flex-col gap-4 mt-4">
            <button className="border border-primary rounded px-6 py-2">Login</button>
            <button className="bg-primary/90 hover:bg-primary text-white px-6 py-2">Sign Up</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;