import { GoArrowUpRight } from "react-icons/go";
const Banner = () => {
  return (
    <section className="mt-20">
            <div
                className="w-full relative lg:h-[900px] h-[500px]  bg-no-repeat bg-cover bg-center"
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/9VBbGDG/ban.jpg)"
                }}
                >
         {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-80"></div>

        {/* Content */}
        <div className="relative z-10 grid justify-center items-center h-full text-white p-8">
            <div>
            <h1 className="lg:text-6xl font-serif text-2xl font-semibold mb-5">Universal Workouts<br/>
            Anytime, Anywhere.</h1>
            <button className="bg-[#B47000] mx-auto text-center text-white py-2 px-3 lg:py-3 lg:px-8 flex items-center gap-3">Join our class <GoArrowUpRight /></button>
            </div>
        </div>
        </div>
</section>
  )
}

export default Banner