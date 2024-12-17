

const FreeClass = () => {
  return (
    <section className="mb-10  px-4 lg:px-0 lg:max-w-[1320px] mx-auto">
            <div className="md:flex gap-10 lg:h-[428px]">
                <div className="lg:w-1/2 flex items-center">
                   <div>
                   <h3 className="lg:text-4xl font-serif text-2xl font-bold text-[#3F2700]">Free class</h3>
                    <p className="lg:my-6 my-3">This class is a demo class, you get all the exercises, guidelines and tips related to fitness in our fitness course. So don`t delay and join our community now.</p>
                    <button className="bg-[#B47000] text-white px-6  lg:px-8 py-3">Join Our Community</button>
                   </div>
                </div>
                <div className="lg:w-1/2 mt-4 lg:mt-0">
                    {/* <img className="w-full h-full rounded-lg" src={free} alt="" /> */}
                </div>
            </div>
</section>
  )
}

export default FreeClass