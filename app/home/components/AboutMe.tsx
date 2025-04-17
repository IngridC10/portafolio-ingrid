"use client";
import React, { useEffect, useRef, useState } from "react";
import techgirl from "../../../public/images/Home/techgirl.png";
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
      className="h-screen bg-yellow scroll-mt-36    flex justify-center items-center mx-auto"
    >
      <div className="container flex flex-col items-center justify-center">
        <h1 className="text-center font-bold text-[40px] mb-10">Sobre mí</h1>

        <div className="flex w-full items-center justify-center gap-8">
          <div className="w-1/2 flex justify-center">
            <Image
              ref={imageRef}
              src={techgirl}
              alt="techgirl"
              height={400}
              width={155}
              className={`w-[480px] transition-transform duration-500 hover:rotate-3 hover:scale-105 ${
                isVisibleState ? "animate-fadeInRotate" : "opacity-0"
              }`}
            />
          </div>

          <div className="w-1/2 flex justify-end">
            <div className="max-w-[600px]">
              <p className="text-black text-xl text-justify leading-10">
                Soy estudiante de la carrera de Negocios Internacionales y, al
                mismo tiempo, me estoy formando de manera autodidacta en el área
                de <strong>Desarrollo Web,</strong> con un enfoque especial en
                la programación Frontend. Mi principal objetivo es ingresar al
                mundo laboral del desarrollo web, adquirir experiencia práctica,
                y fortalecer mi perfil profesional para crecer dentro del sector
                tecnológico.
                <br /> <br />
                Me considero una persona responsable, empática y entusiasta, con
                habilidades sólidas en trabajo en equipo y comunicación
                asertiva. Estoy comprometida con el aprendizaje contínuo y la
                mejora constante, siempre buscando oportunidades que me permitan
                aportar valor a los proyectos en los que participo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
