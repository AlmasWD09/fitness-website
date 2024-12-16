    {/* More class */}
    <div>
    <div className="flex justify-between">
      <h2 className="text-[32px] font-medium font-noto text-gray-400">
        More Class Like This
      </h2>
      {!showAll && ( // Only show "View All" if not all items are displayed
        <button
          className="text-primary text-[32px] font-medium font-noto underline"
          onClick={handleViewAllClick}
        >
          View All
        </button>
      )}
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
      {displayedClasses.map((fitness, idx) => (
        <div key={idx}>
          <Image className="h-60 object-cover" src={fitness.image} alt={fitness.title} height={500} width={500} />
          <div className="flex justify-between">
            <h3>{fitness.title}</h3>
            <button className="bg-black text-white px-4 py-2">Details</button>
          </div>
        </div>
      ))}
    </div>
  </div>