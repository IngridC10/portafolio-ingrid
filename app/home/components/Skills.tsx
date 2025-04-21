"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";
import Html from "../../../public/images/home/html.png";
import Js from "../../../public/images/home/js.png";
import Css from "../../../public/images/home/css.png";
import Tailwind from "../../../public/images/home/tailwind.png";
import Jira from "../../../public/images/home/jira.png";
import Trello from "../../../public/images/home/trello.png";
import Puntos from "../../../public/images/home/puntos.png";

const skills = [
  { src: Html, alt: "HTML", label: "HTML 5", height: 400, width: 155 },
  { src: Js, alt: "JavaScript", label: "JavaScript", height: 400, width: 155 },
  { src: Css, alt: "CSS", label: "Css", height: 400, width: 155 },
  {
    src: Tailwind,
    alt: "Tailwind",
    label: "Tailwind",
    height: 400,
    width: 155,
  },
  { src: Jira, alt: "Jira", label: "Jira", height: 200, width: 120 },
  { src: Trello, alt: "Trello", label: "Trello", height: 400, width: 155 },
];

const Skills = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <section
      className="relative  h-[1785px]    xl:h-[720px] scroll-mt-36 flex flex-col justify-center items-center bg-cream px-4 "
      id="skills"
    >
      <div className="absolute left-10 top-1/2 transform -translate-y-1/2  hidden xl:block ">
        <Image src={Puntos} alt="decoration-left" height={400} width={80} />
      </div>

      <div className="absolute right-10 top-1/2 transform -translate-y-1/2 hidden xl:block">
        <Image src={Puntos} alt="decoration-right" height={400} width={80} />
      </div>

      <h1
        className="text-2xl xl:text-3xl  text-black font-bold mb-12"
        data-aos="fade-up"
      >
        Habilidades
      </h1>

      <div className="flex flex-col gap-10">
        {[0, 1].map((row) => (
          <div
            key={row}
            className=" flex flex-col    xl:flex-row     gap-6 justify-center"
          >
            {skills.slice(row * 3, row * 3 + 3).map((skill) => (
              <div
                key={skill.alt}
                className="w-[240px] h-[250px] flex flex-col items-center justify-center rounded-3xl background-container cursor-pointer transition duration-300 hover:shadow-xl hover:border-4 hover:border-pink-300"
                data-aos="fade-up"
              >
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  height={skill.height}
                  width={skill.width}
                  className="transition-transform duration-300 hover:scale-115 object-contain h-[135px] w-[155px] "
                />

                <p className="text-sm font-bold text-white mt-4">
                  {skill.label}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
