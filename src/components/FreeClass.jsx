

const FreeClass = () => {
  return (
    <section className="container mx-auto px-4 mb-10">
      <div className="flex justify-center items-center">
        <div className="w-full md:w-[50%] flex items-center">
          <div>
            <h3 className="lg:text-4xl font-serif text-2xl font-bold text-[#3F2700]">Free class</h3>
            <p className="lg:my-6 my-3">This class is a demo class, you get all the exercises, guidelines and tips related to fitness in our fitness course. So don`t delay and join our community now.</p>
            <button className="bg-[#B47000] text-white px-6  lg:px-8 py-3">Join Our Community</button>
          </div>
        </div>
        <div className="w-full md:w-[50%]">
          <div className="rounded-md">
            <iframe className="rounded-md" width="80%" height="300" src="https://www.youtube.com/embed/FBs0l6cxl1o?si=StyUg6AlcQwJZtKq" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FreeClass