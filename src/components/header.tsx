"use client";

import Link from "next/link";
import Image from "next/image";
import logo from "@/images/logo.png";
import SearchIcon from "@mui/icons-material/Search";
import Person2OutlinedIcon from "@mui/icons-material/Person2Outlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import { useState } from "react";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Close the mobile menu when a link is clicked
  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="bg-white py-4 w-full h-24">
      <div className="container mx-auto flex items-center justify-between px-6 md:px-10">
        {/* Logo and Title */}
        <div className="flex items-center space-x-2">
          <Image
            src={logo}
            alt="logo"
            height={48}
            width={48}
            className="h-8 w-8 md:h-12 md:w-12"
          />
          <p className="font-bold text-2xl md:text-[34px]">Furniro</p>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex justify-center space-x-8">
          <Link href="/" className="text-black">
            HOME
          </Link>
          <Link href="/shop" className="text-black">
            SHOP
          </Link>
          <Link href="/blog" className="text-black">
            BLOG
          </Link>
          <Link href="/contact" className="text-black">
            CONTACT
          </Link>
        </div>

        {/* Desktop Icons */}
        <div className="hidden md:flex space-x-4">
          <Person2OutlinedIcon />
          <SearchIcon />
          <FavoriteBorderOutlinedIcon />
          <ShoppingCartOutlinedIcon />
        </div>

        {/* Mobile Menu Button (Hamburger) */}
        <div className="md:hidden flex items-center space-x-4">
          {/* Hamburger Icon */}
          <button
            className="text-gray-600 md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu (Slide-in from top) */}
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-50 z-50 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-y-0" : "-translate-y-full"
        }`}
        onClick={() => setIsMobileMenuOpen(false)}
      >
        <div
          className="bg-white w-full h-full flex flex-col items-center space-y-4 pt-12"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button (Cross Icon) */}
          <button
            onClick={() => setIsMobileMenuOpen(false)}
            className="absolute top-4 right-4 text-black text-3xl"
          >
            &times;
          </button>

          <Link href="/" className="text-black text-lg py-2" onClick={closeMobileMenu}>
            HOME
          </Link>
          <Link href="/shop" className="text-black text-lg py-2" onClick={closeMobileMenu}>
            SHOP
          </Link>
          <Link href="/blog" className="text-black text-lg py-2" onClick={closeMobileMenu}>
            BLOG
          </Link>
          <Link href="/contact" className="text-black text-lg py-2" onClick={closeMobileMenu}>
            CONTACT
          </Link>

          {/* Mobile Icons */}
          <div className="space-x-4 flex flex-row items-center pt-6">
            <Person2OutlinedIcon className="text-black" />
            <SearchIcon className="text-black" />
            <FavoriteBorderOutlinedIcon className="text-black" />
            <ShoppingCartOutlinedIcon className="text-black" />
          </div>
        </div>
      </div>
    </nav>
  );
}
