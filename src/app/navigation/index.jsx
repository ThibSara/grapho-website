"use client";
import Link from "next/link";
import React, { useState } from "react";
import NavLink from "./NavLink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";
import { usePathname } from "next/navigation";

const navLinks = [
  {
    title: "La graphothérapie",
    path: "/",
  },
  {
    title: "Tout savoir sur les séances",
    path: "/seances",
  },
  {
    title: "Un peu plus sur moi",
    path: "/aPropos",
  },
  {
    title: "Prendre RDV",
    path: "/prendreRDV",
  },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathName = usePathname();

  return (
    <nav className="fixed mx-auto bg-white text-black top-0 left-0 right-0 z-10">
      <div className="flex items-center justify-between px-4 py-2 lg:py-4">
        {/* Logo Section */}
        <div className="flex items-center">
          <Link
            href="/"
            className="text-4xl md:text-4xl text-secondary font-semibold"
          >
            Grapho 78
          </Link>
          <div className="mobile-menu block md:hidden ml-4">
            {!navbarOpen ? (
              <button
                onClick={() => setNavbarOpen(true)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <Bars3Icon className="h-5 w-5" />
              </button>
            ) : (
              <button
                onClick={() => setNavbarOpen(false)}
                className="flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white"
              >
                <XMarkIcon className="h-5 w-5" />
              </button>
            )}
          </div>
        </div>
        {/* Spacer for centering links */}
        <div className="flex-grow hidden md:flex md:justify-center">
          <ul className="flex space-x-8">
            {navLinks.map((link, index) => (
              <li key={index}>
                <NavLink
                  href={link.path}
                  title={link.title}
                  active={pathName === link.path}
                />
              </li>
            ))}
          </ul>
        </div>
        {/* Right-side Spacer */}
        <div className="hidden md:block w-16"></div>
      </div>
      {navbarOpen && <MenuOverlay links={navLinks} />}
    </nav>
  );
};

export default Navbar;
