
const MembershipOptions = () => {
  return (
    <section className="my-10 px-4 lg:px-0 lg:max-w-[1320px] mx-auto">
            <div>
                <h3 className="lg:text-5xl text-3xl mb-12 font-semibold text-center text-[#3F2700]">Membership Options</h3>
                <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5  md:gap-8">
                    <div className="bg-[#F8F1E6] flex flex-col  justify-center gap-8 items-center py-4 ">
                        <h4 className="text-2xl">Basic Membership</h4>
                        <h3 className="text-3xl font-semibold">180 CND</h3>
                        <button className="bg-[#2F2F2F] w-[130px] lg:w-[174px] text-white px-3 py-2">Buy now</button>
                    </div>
                    <div className="bg-[#F8F1E6] flex flex-col  justify-center gap-8 items-center py-4 ">
                        <h4 className="text-2xl">Standard Membership</h4>
                        <h3 className="text-3xl font-semibold">180 CND</h3>
                        <button className="bg-[#2F2F2F] w-[130px] lg:w-[174px] text-white px-3 py-2">Buy now</button>
                    </div>
                    <div className="bg-[#F8F1E6] flex flex-col  justify-center gap-8 items-center py-4 ">
                        <h4 className="text-2xl">Premium Membership</h4>
                        <h3 className="text-3xl font-semibold">180 CND</h3>
                        <button className="bg-[#2F2F2F] w-[130px] lg:w-[174px] text-white px-3 py-2">Buy now</button>
                    </div>
                </div>
            </div>
  </section>
  )
}

export default MembershipOptions