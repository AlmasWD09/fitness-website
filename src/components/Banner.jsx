import { GoArrowUpRight } from "react-icons/go";

const Banner = () => {
  return (
    <section className="">
      <div
        className="w-full h-[256px] lg:h-[550px] bg-no-repeat bg-cover bg-center"
        style={{
          backgroundImage: "url(https://i.ibb.co.com/9VBbGDG/ban.jpg)"
        }}
      >
        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-[256px] lg:h-[550px] bg-black bg-opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 grid justify-center items-center h-[256px] lg:h-[550px] text-white p-8">
          <div>
            <h1 className="text-[24px] lg:text-[64px] font-noto mb-5">Universal Workouts<br />
              Anytime, Anywhere.</h1>
            <button className="bg-primary/90 hover:bg-primary mx-auto text-center rounded text-white py-2 px-3 lg:py-3 lg:px-8 flex items-center gap-3">Join our class <GoArrowUpRight /></button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner