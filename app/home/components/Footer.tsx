import React from "react";
import Image from "next/image";
import Whatsapp from "../../../public/images/home/whatsapp.png";

const Footer = () => {
  return (
    <>
      <footer className="w-full flex justify-center items-center h-[100px] bg-cream relative">
        <h1 className="text-black text-sm">
          Copyright © | Coded with 💗 by Ingrid Calzada
        </h1>
      </footer>

      <a
        href="https://wa.me/51957290391"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 z-50 animate-bounce"
      >
        <Image
          src={Whatsapp}
          alt="WhatsApp"
          width={80}
          height={50}
          className="hover:scale-110 transition-transform duration-300"
        />
      </a>
    </>
  );
};

export default Footer;
