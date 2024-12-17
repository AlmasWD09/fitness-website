import Image from "next/image"
import { RiShoppingCartLine } from "react-icons/ri"


const Shop = () => {
    return (
        <section className="mb-10 px-4 lg:px-0 lg:max-w-[1320px] mx-auto">
            <div className="flex justify-between">
                <h3 className="lg:text-5xl text-3xl mb-12 font-semibold text-[#3F2700]">Shop</h3>
                <button className="text-[#B47000] font-medium font-serif underline">View all</button>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 gap-5">
                <div className="lg:w-[312px] border p-5 ">
                    <div className="flex justify-end">
                        <button className="text-[#905A00]"><RiShoppingCartLine /></button>
                    </div>
                    <div className="flex lg:py-16 justify-center">
                        <Image src="https://i.ibb.co.com/RHRPfHS/Whats-App-Image-2024-12-17-at-10-08-22-b2f3597f.jpg" alt="shop" width={100} height={100} />

                    </div>
                    <div className="text-[#555555] mb-3">
                        <p>The Ball</p>
                        <h3 className="text-2xl mt-3 font-medium">$34.00 CND</h3>
                    </div>
                </div>
                <div className="lg:w-[312px] border p-5 ">
                    <div className="flex justify-end">
                        <button className="text-[#905A00]"><RiShoppingCartLine /></button>
                    </div>
                    <div className="flex lg:py-16 justify-center">
                        <Image src="https://i.ibb.co.com/WKKQSLW/Whats-App-Image-2024-12-17-at-10-08-23-5ecec3e4.jpg" alt="shop" width={100} height={100} />
                    </div>
                    <div className="text-[#555555] mb-3">
                        <p>The Ball</p>
                        <h3 className="text-2xl mt-3 font-medium">$34.00 CND</h3>
                    </div>
                </div>
                <div className="lg:w-[312px] border p-5 ">
                    <div className="flex justify-end">
                        <button className="text-[#905A00]"><RiShoppingCartLine /></button>
                    </div>
                    <div className="flex lg:py-16 justify-center">
                        <Image src="https://i.ibb.co.com/Wy2ZL7q/Whats-App-Image-2024-12-17-at-10-08-23-a1bc66c1.jpg" alt="shop" width={100} height={100} />
                    </div>
                    <div className="text-[#555555] mb-3">
                        <p>The Ball</p>
                        <h3 className="text-2xl mt-3 font-medium">$34.00 CND</h3>
                    </div>
                </div>
                <div className="lg:w-[312px] border p-5 ">
                    <div className="flex justify-end">
                        <button className="text-[#905A00]"><RiShoppingCartLine /></button>
                    </div>
                    <div className="flex lg:py-16 justify-center">
                        <Image src="https://i.ibb.co.com/cQ0fc94/Whats-App-Image-2024-12-17-at-10-08-24-bfe4283f.jpg" alt="shop" width={100} height={100} />
                    </div>
                    <div className="text-[#555555] mb-3">
                        <p>The Ball</p>
                        <h3 className="text-2xl mt-3 font-medium">$34.00 CND</h3>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Shop