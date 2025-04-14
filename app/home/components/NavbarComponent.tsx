import React from "react";
const NavbarComponent = () => {
  return (
    <header>
      <ul className="text-black flex justify-end items-end bg-cream  gap-6 p-6">
        <li>Home</li>
        <li>Sobre mi</li>
        <li>Habilidades</li>
        <li>Formación</li>
        <li>Proyectos</li>
      </ul>
    </header>
  );
};

export default NavbarComponent;
