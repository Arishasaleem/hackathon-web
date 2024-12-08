import Link from "next/link";
import { IoSearch } from "react-icons/io5";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { MdMenu } from "react-icons/md"; // Hamburger Menu

const Header = () => {
  return (
    <header className=" max-w-[1440px] h-[132px] flex flex-col items-center bg-white px-10 lg:w-full mx-auto">
      {/* Top bar: Search, Logo, Cart/Profile */}
      <div className="lg:flex hidden border-b-[0.5px] border-[#0000004f] h-1/2 w-full mx-auto justify-between 
       items-center">
        <div className="lg:flex sm:gap-[1rem] ">
          <IoSearch className="text-xl " />
        </div>
        <h1 className="text-[#22202E] text-2xl font-semibold sm:text-left">Avion</h1>
        <div className="flex text-xl gap-3 sm:gap-x-1 ">
          <MdOutlineShoppingCart />
          <CgProfile />
        </div>
        
      </div>
       {/* Mobile Navbar - Only h1, Search Icon, and Hamburger */}
      <div className="lg:hidden flex w-full justify-between items-center h-1/2">
        <h1 className="text-[#22202E] text-2xl font-semibold">Avion</h1>
        <IoSearch className="text-xl" />
        <MdMenu className="text-2xl" />
      </div>

      {/* Desktop Navigation Bar */}
      <div className="lg:flex hidden sm:hidden w-full justify-between items-center h-1/2 text-[#726E8D]">
        <nav className="flex gap-6 justify-center">
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Plant pots
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Ceramics
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Tables
          </Link>
          <Link href="/allproduct" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Chairs
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Crockery
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Tableware
          </Link>
          <Link href="/" className="hover:text-[#5a526c] border-b-2 border-transparent hover:border-[#5a526c] pb-1">
            Cutlery
          </Link>
        </nav>
      </div>

      
     
    </header>
  );
};

export default Header;