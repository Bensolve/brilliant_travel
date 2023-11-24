"use client";
import Image from "next/image"
import { NAV_LINKS } from "@/constants"
import Link from "next/link"
import { useState } from "react";


const Navbar = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div>

   
    <nav className="navbar flex  justify-between max-container
    padding-container relative z-30 py-5
    ">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={154} height={109} />
      </Link>

      <ul className="hidden h-full gap-12 lg:flex ">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ">
            {link.label}
          </Link>
        ))}
      </ul>

      

      {isMenuOpen ? (
        <Image
          src="close.svg"
          alt="close"
          width={22}
          height={22}
          className="inline-block cursor-pointer lg:hidden"
          onClick={closeMenu}
        />
      ) : (

      <Image
        src="menu.svg"
        alt="menu"
        width={22}
        height={22}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />

      )}
     

    </nav>
    <nav>
    {isMenuOpen && (
        <ul className="flex flex-col lg:hidden items-center border-b pl-3 ">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} className="flex cursor-pointer items-center gap-10 rounded-sm px-2 py-1 mt-2 capitalize decoration-indigo-500 decoration-2 underline-offset-1 transition     duration-300 ease-in-out"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      )}
    </nav>
    </div>
  )
}

export default Navbar 
