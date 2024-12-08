import React from 'react'
import Image from 'next/image'

const Services = () => {
  return (
    <div className='p-10'>

      
       <h1 className="text-start py-10 mt-14 text-3xl p-10">Our popular products</h1>
       <div className="flex gap-8 p-10">
            <Image src="/Product Card (4).png" alt="not found" 
            width={630} height={462}/>
            <Image src="/Product Card (5).png" alt="not found" 
            width={305} height={462}/>
            <Image src="/Product Card (6).png" alt="not found" 
            width={305} height={462}/>
        </div>

     {/* Button */}
    <div className="flex justify-center mt-4">
    <button className="bg-[#F9F9F9] px-6 py-3 text-lg rounded hover:bg-gray-200">
        View Collection
     </button>
      </div>
    </div>
  )
}

export default Services
