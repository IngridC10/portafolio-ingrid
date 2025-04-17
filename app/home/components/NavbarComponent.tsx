"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import Logo from "../../../public/images/home/logo.png";
const NavbarComponent = () => {
  const [activeState, setActiveState] = useState("home");

  const navItems = [
    { id: "home", href: "/", label: "Home" },
    { id: "about-me", href: "#about-me", label: "Sobre mí" },
    { id: "skills", href: "#skills", label: "Habilidades" },
    { id: "education", href: "#education", label: "Formación" },
    { id: "projects", href: "#projects", label: "Proyectos" },
  ];

  return (
    <nav className="bg-cream h-[120px] w-full fixed z-50 flex items-center">
      <div className="container mx-auto flex justify-between items-center px-6">
        <Link href="/">
          <Image src={Logo} alt="logo" height={155} width={155} />
        </Link>
        <ul className="text-primary-color flex gap-6 text-lg">
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
      </div>
    </nav>
  );
};

export default NavbarComponent;
