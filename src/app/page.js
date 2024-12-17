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
    <div>
      <Banner />
      <MembershipOptions />
      <Shop />
      <About />
      <Faq />
      {/* <FreeClass />
      <Testimonial /> */}
    </div>
    </>
  );
}
