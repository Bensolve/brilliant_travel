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
    <nav className="navbar flexBetween max-container
    padding-container relative z-30 py-5
    ">
      <Link href="/">
        <Image src="/logo.svg" alt="logo" width={154} height={109} />
      </Link>

     <div className="lg:hidden">

      {isMenuOpen ? (
        <Image
          src="close.svg"
          alt="close"
          width={22}
          height={22}
          className="inline-block cursor-pointer "
          onClick={closeMenu}
        />
      ) : (

      <Image
        src="menu.svg"
        alt="menu"
        width={22}
        height={22}
        className="inline-block cursor-pointer "
        onClick={toggleMenu}
      />
    
      )}
      </div>
      {isMenuOpen && (
        <ul className="flex flex-col md:hidden border-b pl-3">
          {NAV_LINKS.map((link) => (
            <Link href={link.href} key={link.key} 
            className="flex cursor-pointer items-center gap-1
             rounded-sm px-2 py-1 mt-2 capitalize
              decoration-indigo-500 decoration-2 underline-offset-1
               transition     duration-300 ease-in-out"
            >
              {link.label}
            </Link>
          ))}
        </ul>
      )}

<div className="hidden h-full gap-12 lg:flex ">
        {NAV_LINKS.map((link) => (
          <Link href={link.href} key={link.key} className="regular-16 text-gray-50 flexCenter cursor-pointer pb-1.5 transition-all hover:font-bold ">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  )
}

export default Navbar