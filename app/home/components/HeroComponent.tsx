import React from "react";
import Image from "next/image";
import Girl from "../../../public/images/home/girl.png";

const HeroComponent = () => {
  return (
    <section className="   min-h-screen md:min-h-[80vh] lg:min-h-[70vh] xl:min-h-screen  flex justify-center items-center bg-cream mx-auto pt-[120px] p-6">
      <div className="container flex flex-col-reverse xl:flex-row  items-center  ">
        <div className="w-1/2 flex justify-center items-center">
          <div className=" w-[230px] xl:w-[540px] ">
            <h2 className="text-black text-xl  lg:text-3xl">Hola! Soy</h2>
            <h1 className=" text-2xl xl:text-6xl text-black font-bold">
              Ingrid Calzada
            </h1>

            <h1 className="typing-animation mt-4">DESARROLLADORA FRONT-END</h1>
            <p className="hidden xl:block text-black text-xl leading-10 text-justify">
              Apasionada por la tecnología, desarrollo interfaces web
              interactivas con React. Mi proactividad y aprendizaje constante me
              permiten crear soluciones frontend innovadoras y actualizadas.
            </p>
            <div className=" flex  flex-col  xl:flex-row gap-2.5  lg:items-center xl:items-start ">
              <a
                href="https://mail.google.com/mail/u/0/?fs=1&tf=cm&source=mailto&to=calzada.ingrid@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[230px] h-[50px] text-lg  lg:text-xl font-bold background-button  hover-color  cursor-pointer rounded-3xl mt-4 flex items-center justify-center"
              >
                CONTACTO
              </a>
              <a
                href="/CV CALZADA INGRID.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[230px] h-[50px] text-lg  lg:text-xl font-bold background-button cursor-pointer hover-color  rounded-3xl mt-4 flex items-center justify-center"
              >
                DESCARGAR CV
              </a>
            </div>
          </div>
        </div>

        <div className="w-1/2 flex  justify-end  md:justify-center  xl:justify-end  items-center">
          <Image
            src={Girl}
            alt="girl"
            height={400}
            width={155}
            className="  w-[250px]  xl:w-[420px]"
          />
        </div>
      </div>
    </section>
  );
};

export default HeroComponent;
