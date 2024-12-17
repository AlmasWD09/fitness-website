import Image from "next/image"


const About = () => {
    return (
      <section className="container mx-auto px-4 mt-8 lg:mt-20">
              <div className="flex flex-col lg:flex-row justify-center items-center gap-20 lg:gap-0">

                {/* left side image */}
                  <div className="lg:w-[541px] relative order-2 lg:order-1">
                    {/* medium device */}
                    <div className="hidden md:block">
                      <div className="relative">
                      <div className="lg:ml-0 md:ml-20 w-80 md:w-96 lg:w-full">
                        <Image src="https://i.ibb.co.com/y6bFXcV/Whats-App-Image-2024-12-17-at-10-08-24-2dc11c4f.jpg" alt="about" width={400} height={100}/>
                      </div>

                      <Image src="https://i.ibb.co.com/jbJhJdK/Whats-App-Image-2024-12-17-at-10-08-22-41a4062a.jpg" alt="about" width={200} height={200}  className="absolute rounded-md right-6 md:right-40 lg:right-28 -bottom-24 md:-bottom-28 lg:-bottom-32 " />
                      </div>
                     <div className="absolute top-20 ml-4 md:top-[400px] md:ml-[216px] lg:top-[430px] lg:ml-12 block justify-center">

                     <div className="bg-[#B47000] md:mt-0 mt-[250px]  rounded-md flex flex-col justify-center items-center  w-[152px] h-[152px] text-white">
                          <h3 className="text-5xl font-semibold">16+</h3>
                          <p>Successful</p>
                          <p>Year</p>
                      </div>
                     </div>
                  </div>

                   {/* small device */}
                   <div className="md:hidden">
                     <Image src="https://i.ibb.co.com/kQ7CY2k/Group-290669.png" alt="about" width={400} height={100}/>
                     </div>
                  </div>

                  {/* right side content */}
                  <div className="lg:w-[639px] lg:mt-56 flex items-center order-1 lg:order-2">
                      <div>
                      <button className="bg-primary text-white px-8 py-3 rounded-md">About Us</button>
                      <h3 className="lg:text-5xl text-3xl font-noto text-[#3F2700] font-semibold my-6">Why You Choose Us </h3>
                      <p className="text-[#555555] leading-9">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using `Content here, content here.</p>
                      <div>
                      </div>
                      <div className="grid mt-6 grid-cols-3 gap-8 text-center">
                          {/* Column 1 */}
                          <div className="border-r border-gray-300">
                              <h3 className="lg:text-4xl text-2xl font-bold text-primary pb-3">1000+</h3>
                              <h3 className="text-[#555555]">Complete Class</h3>
                          </div>
                          
                          {/* Column 2 */}
                          <div className="border-r pr-2 lg:pr-0 border-gray-300">
                              <h3 className="lg:text-4xl text-2xl font-bold text-primary pb-3">24 hour</h3>
                              <h3 className="text-[#555555]">Unlimited Access</h3>
                          </div>
  
                          {/* Column 3 */}
                          <div>
                              <h3 className="lg:text-4xl text-2xl font-bold text-primary pb-3">500+</h3>
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
