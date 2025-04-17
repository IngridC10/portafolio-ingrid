"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Vallejo from "../../../public/images/home/vallejo.png";
import Udemy from "../../../public/images/home/udemy.png";
import Coursera from "../../../public/images/home/coursera.webp";

const skills = [
  {
    src: Vallejo,
    alt: "Vallejo",
    height: 400,
    width: 155,
    label: "Universidad César Vallejo",
    detail: "2017-Terminado",
  },
  {
    src: Coursera,
    alt: "Coursera",
    height: 400,
    width: 155,
    label: "User Experience (UX)",
    detail: "2023",
  },
  {
    src: Udemy,
    alt: "Udemy",
    height: 400,
    width: 155,
    label: "Desarrollo Web Profesional",
    detail: "2023-2025",
  },
];

const Education = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section
      id="education"
      className="relative h-[520px] scroll-mt-36  flex flex-col justify-center items-center bg-yellow px-4 py-16"
    >
      <div className="flex flex-col mt-6 ">
        <h1 className="text-3xl text-black font-bold text-center ">
          Formación
        </h1>
        {[0, 1].map((row) => (
          <div key={row} className="flex gap-6 justify-center">
            {skills.slice(row * 3, row * 3 + 3).map((skill) => (
              <div
                key={skill.alt}
                className="w-[260px] mt-14 h-[280px] flex flex-col items-center justify-center rounded-3xl bg-white cursor-pointer transition duration-300 hover:shadow-xl hover:border-4 hover:border-pink-300"
                data-aos="fade-up"
              >
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  height={skill.height}
                  width={skill.width}
                  className="transition-transform duration-300 hover:scale-115 object-contain h-[155px] w-[155px]"
                />

                <div className="w-[280px] h-[30px] flex flex-col justify-center items-center">
                  <p className="text-sm font-bold text-black">{skill.label}</p>
                  <p className="text-sm  text-black font-bold">
                    {skill.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;
