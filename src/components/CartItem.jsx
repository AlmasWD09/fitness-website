import Image from "next/image";
import React from "react";
import Button from "./shared/Button";

const CartItem = ({ item }) => {
    const date = new Date(item.addedAt);
    const formattedDate = `${date.getDate().toString().padStart(2, '0')}/${(date.getMonth() + 1).toString().padStart(2, '0')}/${date.getFullYear()}`;
    return (
        <section className="container px-4 mx-auto">
            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="overflow-hidden border border-gray-200 dark:border-gray-700 md:rounded-lg">
                            <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">

                                <tbody className="bg-white divide-y divide-gray-200 dark:divide-gray-700 dark:bg-gray-900">
                                    <tr>
                                        <td className=" text-sm font-medium text-gray-700 whitespace-nowrap">
                                            <div className="w-28 h-28 inline-flex items-center px-3 gap-4 py-1 ">
                                                <Image
                                                    src={item.image}
                                                    alt={item.title}
                                                    width={100}
                                                    height={100}
                                                    layout="responsive"
                                                    className="rounded-lg"
                                                />
                                                <div className="md::space-y-2">
                                                    <h2 className="text-primaryGray  lg:text-[24px]">{item.title}</h2>
                                                    <p className="py-1 lg:text-[24px] text-primaryGray ">{item.price}</p>
                                                </div>
                                            </div>
                                        </td>

                                        {/* convert date */}
                                        <td className=" px-4 py-4 lg:text-[24px] text-primaryGray dark:text-gray-300 whitespace-nowrap md:pl-20 lg:pl-40">{formattedDate}</td>

                                        <td className="px-4 py-4 text-sm whitespace-nowrap">
                                            <div className="flex justify-end items-center gap-x-2 lg:gap-x-28 ">
                                                <p className="px-3 py-1 text-[20px] lg:text-[32px] text-primaryGray ">{item.quentity}</p>
                                                <p className="py-1 md:text-[20px] lg:text-[32px] font-semibold text-[#2F2F2F]">{item.price}</p>
                                                <Button text={'Confirm Order'} />
                                            </div>
                                        </td>

                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CartItem;
