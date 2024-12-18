"use client"

const MembershipOptions = () => {
  return (
    <section className="container mx-auto px-4 mt-8 md:mt-20">
      <h3 className="md:text-5xl text-3xl mb-12 font-semibold text-center text-[#3F2700]">Membership Options</h3>

      <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-4">
        {/* mambership cart one */}
        <div className="bg-[#F8F1E6] flex flex-col  justify-center gap-8 items-center py-4 ">
          <h4 className="text-2xl">Basic Membership</h4>
          <h3 className="text-3xl font-semibold">180 CND</h3>
          <button className="bg-[#2F2F2F] text-white px-12 py-2">Buy now</button>
        </div>

        {/* mambership cart two */}
        <div className="bg-[#F8F1E6] flex flex-col  justify-center gap-8 items-center py-4 ">
          <h4 className="text-2xl">Standard Membership</h4>
          <h3 className="text-3xl font-semibold">180 CND</h3>
          <button className="bg-[#2F2F2F] text-white px-12 py-2">Buy now</button>
        </div>

        {/* mambership cart three */}
        <div className="bg-[#F8F1E6] flex flex-col  justify-center gap-8 items-center py-4 ">
          <h4 className="text-2xl">Premium Membership</h4>
          <h3 className="text-3xl font-semibold">180 CND</h3>
          <button className="bg-[#2F2F2F] text-white px-12 py-2">Buy now</button>
        </div>
      </div>
    </section>
  )
}

export default MembershipOptions
