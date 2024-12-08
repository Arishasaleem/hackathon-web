import Image from "next/image";

const Herosection = () => {
  return (
    <div className="w-full h-[704px] bg-[#ffffff]">
      <div className="w-full h-full mt-10 mx-auto bg-[#2A254b] flex flex-col md:flex-row items-center px-8 relative">
        {/* Right Side: Image */}
        <div className="absolute right-0 top-0 z-0 hidden md:block">
          <Image
            src="/Right Image.png"
            alt="hero"
            height={584}
            width={520}
            className="object-contain"
          />
        </div>

        {/* Left Side: Text and Button */}
        <div className="text-center md:text-left mt-20 md:mt-0 mb-9 w-full md:w-[50%] z-10">
          {/* Heading */}
          <h2 className="font-[Clash Display] font-normal leading-10 text-2xl sm:text-3xl md:text-4xl text-[#ffffff] mb-6">
            The furniture brand for the <br /> future with timeless designs
          </h2>

          {/* Description */}
          <div className="font-[satoshi] font-normal text-sm sm:text-base md:text-lg leading-7 text-[#ffffff] mt-6 md:mt-10 mx-6 md:mx-0">
            A new era in eco-friendly furniture with Avelon, the French luxury
            retail brand with nice fonts, tasteful colors, and a beautiful way
            to display things digitally using modern web technologies.
          </div>

          {/* Button */}
          <button className="w-[170px] h-[56px] bg-gray-500 flex items-center justify-center text-sm md:text-base font-medium text-[#fafafa] mb-6 mt-6 mx-auto md:mx-0">
            View Collection
          </button>
        </div>

        {/* Mobile Image */}
        <div className="md:hidden w-full mt-10">
          <Image
            src="/Right Image.png"
            alt="hero"
            height={300}
            width={300}
            className="object-contain mx-auto"
          />
        </div>
      </div>
    </div>
  );
};

export default Herosection;
