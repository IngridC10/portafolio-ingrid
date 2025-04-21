"use client";
import React, { useEffect, useRef, useState } from "react";
import techgirl from "../../../public/images/home/techgirl.png";
import Image from "next/image";

const AboutMe = () => {
  const imageRef = useRef<HTMLImageElement>(null);
  const [isVisibleState, setIsVisibleState] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisibleState(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about-me"
      className="h-full  min-h-screen md:min-h-[75vh] lg:min-h-[60vh] xl:min-h-screen p-6  xl:p-0 bg-yellow scroll-mt-36 flex justify-center items-center px-4"
    >
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-center  text-black font-bold  text-2xl xl:text-3xl  mb-0  lg:mb-10">
          Sobre mí
        </h1>

        <div className="flex flex-col xl:flex-row w-full items-center justify-center  gap-0 xl:gap-8">
          <div className="w-full xl:w-1/2 flex justify-center">
            <Image
              ref={imageRef}
              src={techgirl}
              alt="techgirl"
              height={400}
              width={155}
              className={`w-[240px] sm:w-[360px] md:w-[420px] lg:w-[350px] xl:w-[480px] transition-transform duration-500 hover:rotate-3 hover:scale-105 ${
                isVisibleState ? "animate-fadeInRotate" : "opacity-0"
              }`}
            />
          </div>

          <div className="w-full xl:w-1/2 flex justify-center xl:justify-end px-2">
            <div className="max-w-[600px]">
              <p className="text-black text-base xl:text-xl text-justify leading-relaxed xl:leading-10">
                Soy estudiante de la carrera de Negocios Internacionales y, al
                mismo tiempo, me estoy formando de manera autodidacta en el área
                de <strong>Desarrollo Web,</strong> con un enfoque especial en
                la programación Frontend. Mi principal objetivo es ingresar al
                mundo laboral del desarrollo web, adquirir experiencia práctica,
                y fortalecer mi perfil profesional para crecer dentro del sector
                tecnológico.
                <br />
                <br />
                <span className="hidden xl:inline">
                  Me considero una persona responsable, empática y entusiasta,
                  con habilidades sólidas en trabajo en equipo y comunicación
                  asertiva. Estoy comprometida con el aprendizaje contínuo y la
                  mejora constante, siempre buscando oportunidades que me
                  permitan aportar valor a los proyectos en los que participo.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
