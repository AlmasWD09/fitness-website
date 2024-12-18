import React from 'react'

const extra = () => {
  return (
    <div
    className={`h-screen overflow-y-auto w-full lg:hidden  absolute z-[9999]   transition-all bg-white ease-in-out duration-300 transform ${
      getMenu ? "translate-x-0" : "-translate-x-full"
    }`}
  >
    <div className="p-10 ">
      <ul className=" flex flex-col gap-6">
        {navLinks.map((item) => (
          <Link
            onClick={() => setMenu(false)}
            key={item.path}
            href={item.path}
          >
            <li className="hover:text-primary">{item.title}</li>
          </Link>
        ))}
      </ul>
      <div className="flex flex-col gap-4 mt-4">
        <button className="border border-primary px-6 py-2">Login</button>
        <button className="bg-primary text-white px-6 py-2">Sign Up</button>
       </div>
    </div>
  </div>
  )
}

export default extra