"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

const PAGES = [
  { name: "Home", href: "/" },
  { name: "Leren zwemmen", href: "/zwemles" },
  { name: "Prive les", href: "/prive-les" },
  { name: "Zwemclub", href: "/zwemclub" },
  { name: "Rooster + tarieven", href: "/rooster-tarieven" },
  { name: "Route", href: "/route" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#009BB3] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-10">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/">
            <Image
              unoptimized
              src="logo-waterjuffer.jpg"
              alt="Logo"
              width={50}
              height={50}
            />
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden nav:flex space-x-6">
            {PAGES.map((page) => (
              <Link
                className={`hover:text-gray-200 ${
                  pathname === page.href ? "underline underline-offset-4" : ""
                }`}
                key={page.name}
                href={page.href}
              >
                {page.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <div className="nav:hidden ">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="focus:outline-none cursor-pointer"
            >
              {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="nav:hidden bg-[#008BA0] pt-2 pb-4 space-y-2 max-w-7xl mx-auto px-10">
          {PAGES.map((page) => (
            <Link
              className={`block hover:text-gray-200 ${
                pathname === page.href ? "underline underline-offset-4" : ""
              }`}
              key={page.name}
              href={page.href}
            >
              {page.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
