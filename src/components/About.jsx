import Image from "next/image"


const About = () => {
    return (
      <section className="px-4 lg:h-[525px] mb-10 lg:px-0 lg:max-w-[1320px] mx-auto">
              <div className="lg:flex gap-20">
                  <div className="lg:w-[541px]">
                      <div className="relative">
                      <div className="lg:ml-0 md:ml-20">
                        <Image src="https://i.ibb.co.com/y6bFXcV/Whats-App-Image-2024-12-17-at-10-08-24-2dc11c4f.jpg" alt="about" width={400} height={100}/>
                      </div>
                      <Image src="https://i.ibb.co.com/jbJhJdK/Whats-App-Image-2024-12-17-at-10-08-22-41a4062a.jpg" alt="about" width={100} height={100}  className="absolute md:-bottom-56 -bottom-60  md:right-10 lg:-right-5" />
                      </div>
                     <div className="md:p-10 lg:ml-0 md:ml-20 md:block flex justify-center">
                     <div className="bg-[#B47000] md:mt-0 mt-[260px]  rounded-lg flex flex-col justify-center items-center w-[152px] h-[152px] text-white">
                          <h3 className="text-5xl font-semibold">16+</h3>
                          <p>Successful</p>
                          <p>Year</p>
                      </div>
                     </div>
                  </div>
                  <div className="lg:w-[639px] mt-16 lg:mt-0 flex items-center">
                      <div>
                      <button className="bg-[#B47000] text-white px-8 py-3 rounded-lg">About Us</button>
                      <h3 className="lg:text-5xl text-3xl font-serif font-semibold my-6">Why You Choose Us </h3>
                      <p className="text-[#555555] leading-9">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using `Content here, content here.</p>
                      <div>
                      </div>
                      <div className="grid mt-6 grid-cols-3 gap-8 text-center">
                          {/* Column 1 */}
                          <div className="border-r border-gray-300">
                              <h3 className="lg:text-4xl text-2xl font-bold text-[#B47000] pb-3">1000+</h3>
                              <h3 className="text-[#555555]">Complete Class</h3>
                          </div>
                          
                          {/* Column 2 */}
                          <div className="border-r pr-2 lg:pr-0 border-gray-300">
                              <h3 className="lg:text-4xl text-2xl font-bold text-[#B47000] pb-3">24 hour</h3>
                              <h3 className="text-[#555555]">Unlimited Access</h3>
                          </div>
  
                          {/* Column 3 */}
                          <div>
                              <h3 className="lg:text-4xl text-2xl font-bold text-[#B47000] pb-3">500+</h3>
                              <h3 className="text-[#555555]">Students</h3>
                          </div>
                          </div>
                      </div>
  
                  </div>
              </div>
    </section>
    )
  }
  
  export default About
