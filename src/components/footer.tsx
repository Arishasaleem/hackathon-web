import Link from "next/link";

const Footer = () => {
    return (
      <div className="flex flex-wrap sm:flex-nowrap gap-10 sm:gap-40 p-6 bg-[#2A254b] text-white px-28">
        
        {/* Column 1: Menu & Categories */}
        <div className="flex flex-col gap-3">


          <button>Menu</button>
          <button>New arrivals</button>
          <button>Best sellers</button>
          <button>Recently viewed</button>
          <button>Popular this week</button>
          <button>
  <Link href="/allproduct">
    All products
  </Link>
</button>

            
        </div>
  
        {/* Column 2: Categories */}
        <div className="flex  flex-col gap-3" >


       
       
       
        <button>
       <Link href="/Cart">
    Caterogries
      </Link>
          </button>

          <button>Furniture</button>
          <button>Homeware</button>
          <button>Plant pots</button>
          <button>Chairs</button>
          <button>Crockery</button>
          
        </div>
      
  
        {/* Column 3: Our company */}
        <div className="flex  flex-col gap-3">
          <button>Our company</button>
          <button>About us</button>
          <button>Vacancies</button>
          <button>Contact us</button>
          <button>Privacy</button>
          <button>Return policy</button>
        </div>
  
        {/* Email Subscription Section */}
        <div className="flex flex-col gap-3 sm:gap-4 mt-6 opacity-100">
        <h2 className="text-xl">Join our mailing list</h2>
       <div className="lg:hidden ">
       <input type="email" />
       </div>
       
       <div className="sm:block hidden">
  <svg width="627" height="56" viewBox="0 0 627 56" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="509" height="56" fill="white" fill-opacity="0.15"/>
    <path d="M32.368 37.376C32.72 37.456 33.072 37.488 33.536 37.488C34.64 37.488 35.392 36.992 35.84 35.776L39.392 26.256H38.256L35.808 33.008L33.312 26.256H32.144L35.28 34.464L34.944 35.376C34.56 36.416 33.888 36.464 33.216 36.464H32.368V37.376ZM39.8736 30.128C39.8736 32.48 41.5376 34.192 43.8096 34.192C46.0816 34.192 47.7456 32.48 47.7456 30.128C47.7456 27.76 46.0816 26.048 43.8096 26.048C41.5376 26.048 39.8736 27.76 39.8736 30.128ZM40.9936 30.112C40.9936 28.32 42.1456 27.04 43.8096 27.04C45.4576 27.04 46.6256 28.32 46.6256 30.112C46.6256 31.936 45.4576 33.2 43.8096 33.2C42.1456 33.2
     40.9936 31.936 40.9936 30.112ZM54.7639 26.256V30.368C54.7639 32.208 53.8839 33.2 52.3959 33.2C51.1639 
     33.2 50.3479 32.544 50.3479 30.704V26.24H49.2279V31.056C49.2279 32.944 50.2199 34.192 52.0439 34.192C53.2599 34.192
      54.3319 33.584 54.7639 32.688L54.9079 34H55.8679V26.256H54.7639ZM62.2156 26.16C61.9436 26.096 61.7356 26.08 61.4956 26.08C60.4076 26.08 59.5916 26.624 59.2876 27.456L59.2076 26.256H58.1676V34H59.2716V29.584C59
      .2716 28.112 60.1836 27.152 61.6076 27.152H62.2156V26.16ZM66.7835 30.48C66.7835 31.776 67.7275 32.576 69.2475 32.576C70.4635 32.576 71.4555 32.032 71.9035 31.12C71.9995 32.08 72.6555 32.576 73.7595 32.576C75.3755 32.576 76.5275 30.96 76.5275 28.704C76.5275 24.992 73.7755 22.336 69.9515 22.336C66.2235 22.336 63.3595 25.2 63.3595 28.928C63.3595 32.704 66.2075 35.568 69.9515 35.568C71.4875 35.568 72.8795 35.072 74.0315 34.16L73.5835 33.504C72.5595 34.336 71.2955 34.768 69.9515 34.768C66.7035 34.768 64.2235 32.24 64.2235 28.928C64.2235 25.664 66.7195 23.136 69.9515 23.136C73.2795 23.136 75.6635 25.456 75.6635 28.704C75.6635 30.56 74.9275 31.824 73.8395 31.824C73.1835 31.824 72.8475 31.488 72.8475 30.864V27.808C72.8475 26.08 71.7755 25.104 69.9675 
      25.104C68.1915 25.104 67.0235 26.048 67.0235 27.456H67.9835C67.9835 26.512 68.7035 25.952 69.919"/>
    
         </svg>
      
           
      
          </div>
        </div>
      </div>
    );
  };
  
  export default Footer;
 
