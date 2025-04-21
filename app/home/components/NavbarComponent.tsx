"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/images/home/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
const NavbarComponent = () => {
  const [activeState, setActiveState] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { id: "home", href: "/", label: "Home" },
    { id: "about-me", href: "#about-me", label: "Sobre mí" },
    { id: "skills", href: "#skills", label: "Habilidades" },
    { id: "education", href: "#education", label: "Formación" },
    { id: "projects", href: "#projects", label: "Proyectos" },
  ];

  const handleToggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleSelectItem = (id: string) => {
    setActiveState(id);
    setIsMenuOpen(false);
  };

  const handleLogoClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="bg-cream h-[120px] w-full fixed z-50 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/">
          <Image
            src={Logo}
            alt="logo"
            height={155}
            width={155}
            className="w-[100px] xl:w-[155px] "
          />
        </Link>

        <ul className="hidden xl:flex primary-color gap-6 text-lg">
          {navItems.map((item) => (
            <li key={item.id}>
              <a
                href={item.href}
                onClick={() => setActiveState(item.id)}
                className={`transition-all ${
                  activeState === item.id
                    ? "font-bold underline secundary-color"
                    : "hover:font-bold hover:secundary-color"
                }`}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        <div
          className="block xl:hidden text-3xl primary-color "
          onClick={handleToggleMenu}
        >
          <FaBars />
        </div>
      </div>

      {isMenuOpen && (
        <div className="fixed top-0 left-0 w-full h-screen bg-cream z-50 menuSlideDown">
          <div className="flex items-center justify-between w-full px-6 py-4">
            <Link href="/" onClick={handleLogoClick}>
              <Image src={Logo} alt="logo" height={120} width={120} />
            </Link>

            <button
              className="text-3xl primary-color "
              onClick={handleToggleMenu}
            >
              <FaTimes />
            </button>
          </div>

          <ul className="flex flex-col items-center justify-start h-full gap-18 text-xl primary-color">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={item.href}
                  onClick={() => handleSelectItem(item.id)}
                  className={`transition-all primary-color   ${
                    activeState === item.id
                      ? "font-bold underline secundary-color"
                      : "hover:font-bold hover:secundary-color"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavbarComponent;
