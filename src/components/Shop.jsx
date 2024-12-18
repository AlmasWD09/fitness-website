"use client"
import Image from "next/image"
import { useState } from "react";
import { RiShoppingCartLine } from "react-icons/ri"
import { useCart } from "../contexts/CartContext";



const Shop = () => {
    const [showAll, setShowAll] = useState(false);
    const { addToCart } = useCart();
    
    const products = [
        {
            id: 1,
            image: "https://i.ibb.co.com/RHRPfHS/Whats-App-Image-2024-12-17-at-10-08-22-b2f3597f.jpg",
            title: "The Ball",
            price: "34.00 CND",
            quentity: "02",
        },
        {
            id: 2,
            image: "https://i.ibb.co.com/WKKQSLW/Whats-App-Image-2024-12-17-at-10-08-23-5ecec3e4.jpg",
            title: "Ab Wheel",
            price: "50.00 CND",
            quentity: "03",
        },
        {
            id: 3,
            image: "https://i.ibb.co.com/Wy2ZL7q/Whats-App-Image-2024-12-17-at-10-08-23-a1bc66c1.jpg",
            title: "The Ball",
            price: "64.00 CND",
            quentity: "05",
        },
        {
            id: 4,
            image: "https://i.ibb.co.com/cQ0fc94/Whats-App-Image-2024-12-17-at-10-08-24-bfe4283f.jpg",
            title: "Ab Wheel",
            price: "34.00 CND",
            quentity: "01",
        },
        {
            id: 5,
            image: "https://i.ibb.co.com/WKKQSLW/Whats-App-Image-2024-12-17-at-10-08-23-5ecec3e4.jpg",
            title: "The Ball",
            price: "34.00 CND",
            quentity: "04",
        },
        {
            id: 6,
            image: "https://i.ibb.co.com/RHRPfHS/Whats-App-Image-2024-12-17-at-10-08-22-b2f3597f.jpg",
            title: "The Ball",
            price: "34.00 CND",
            quentity: "06",
        },
    ];

    const displayedProducts = showAll ? products : products.slice(0, 4);
    const handleViewAllClick = () => {
        setShowAll(true);
    };


    return (
        <section className="container mx-auto px-4 mt-8 md:mt-20">
            <div>
                <div className="flex justify-between">
                    <h2 className="text-[48px] font-medium font-noto text-[#3F2700]">
                        Shop
                    </h2>
                    {!showAll && (
                        <button
                            className="text-primary text-[24px] font-medium font-noto underline"
                            onClick={handleViewAllClick}
                        >
                            View All
                        </button>
                    )}
                </div>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-8 mt-6">
                    {displayedProducts.map((product, idx) => (
                        <div key={idx} className="lg:w-[300px] border p-5 ">
                            <div className="flex justify-end">
                                <button onClick={() => addToCart(product)} className="text-primary hover:bg-primaryGray/10 p-4 rounded-full">
                                    <RiShoppingCartLine className="text-2xl" />
                                </button>
                            </div>
                            <div className="flex lg:py-16 justify-center">
                                <Image src={product.image} alt="shop" width={100} height={100} />
                            </div>
                            <div className="text-primaryGray mb-3">
                                <p>{product.title}</p>
                                <h3 className="text-2xl mt-3 font-medium">{product.price}</h3>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default Shop