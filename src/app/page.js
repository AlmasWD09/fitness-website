"use client"
import About from "@/components/About";
import Banner from "@/components/Banner";
import Faq from "@/components/Faq";
import FreeClass from "@/components/FreeClass";
import MembershipOptions from "@/components/MembershipOptions";
import Shop from "@/components/Shop";
import Testimonial from "@/components/Testimonial";


export default function Home() {
  return (
    <>
    <div className="">
      <h1 className="text-6xl font-bold text-green-500">Home page</h1>
      <Banner />
      <MembershipOptions />
      <Shop />
      <About />
      <Faq />
      <FreeClass />
      <Testimonial />
    </div>
    </>
  );
}
