import React from 'react';
import Image from 'next/image';

const Product = () => {
  return (
    <div className="w-full flex flex-wrap p-10 bg-[#ffffff]">
      {/* Left Content */}
      <div className="w-full lg:w-1/2 flex flex-col justify-center px-10">
        <div className="mb-10">
          <h1 className="text-2xl leading-8 text-[#2A254B] font-[Clash Display]">
            From a studio in London to a global brand with over 400 outlets
          </h1>
          <p className="mt-4 text-sm leading-6 text-[#505977] font-[Satoshi]">
            When we started Avion, the idea was simple. Make high-quality furniture affordable and available for the mass market. Handmade, and lovingly crafted furniture and homeware is what we live, breathe and design so our Chelsea boutique became the hotbed for the London interior design community.
          </p>
        </div>
        <div className="mt-5">
          <button className="w-[150px] bg-[#f9f9f9] text-sm px-6 py-3 rounded hover:bg-gray-200">
            Get in touch
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
        <Image
          src="/Image.png"
          alt="image"
          width={720}
          height={603}
          className="object-cover rounded w-full h-auto"  // Make image responsive
        />
      </div>
    </div>
  );
};

export default Product;
