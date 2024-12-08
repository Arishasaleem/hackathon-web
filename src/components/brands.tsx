import React from 'react'; 
import Image from 'next/image';

// Card component to handle repetitive structure
const Brand = () => {
  return (
    <div>
      {/* Features Section */}
      <div className="w-full h-auto pb-16">
        <h1 className="text-center text-xl">What makes our brand different</h1>
        <div className="flex flex-wrap justify-center md:justify-evenly px-4 py-10 gap-8">
          {[
            {
              Image: "/Delivery.png",
              width: 305,
              height: 462,
              title: "Next day as standard",
              desc: "Order before 3pm and get your order the next day as standard",
            },
            {
              Image: "/Checkmark--outline.png",
              width: 305,
              height: 462,
              title: "Made by true artisans",
              desc: "Handmade crafted goods made with real passion and craftsmanship",
            },
            {
              Image: "/Purchase.png",
              width: 305,
              height: 462,
              title: "Unbeatable prices",
              desc: "For our materials and quality you wont find better prices anywhere",
            },
            {
              Image: "/Sprout.png",
              width: 305,
              height: 462,
              title: "Recycled packaging",
              desc: "We use 100% recycled materials to ensure our footprint is more manageable",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="w-72 h-auto rounded-sm px-6 py-8 text-center"
            >
              <Image 
                src={item.Image} 
                alt={item.title} 
                width={item.width} 
                height={item.height} 
                className="mx-auto" 
              />
              <h1 className="text-custom-purple text-lg mt-4">{item.title}</h1>
              <p className="text-custom-purple mt-4">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Brand;
