"use client";
import React, { useState } from "react";

const portfolioData = [
  {
    id: 1,
    title: "Finniu",
    description:
      "Finniu es una empresa peruana que administra un fondo de inversión privado, como producto de renta fija.",
    image: "/images/home/finniu.png",
    link: "https://www.finniu.com/",
    hasGallery: false,
  },
  {
    id: 2,
    title: "Portafolio",
    description:
      "Mi portafolio web personal, donde se encuentran algunos de mis proyectos más destacados, mis habilidades técnicas y un poco sobre mi formación.",
    image: "/images/home/ingrid.png",
    link: "https://portafolio-ingrid.vercel.app/",
    hasGallery: false,
  },
  {
    id: 3,
    title: "RCT Corp",
    description:
      "Es una empresa especializada en el alquiler de vehículos y maquinaria de primera categoría. Además, ofrecen servicios exclusivos de transporte de personal con vehículos premium, garantizando confort y seguridad.",
    image: "/images/home/rct.png",
    link: "https://www.rct-corp.com/",
    hasGallery: false,
  },
  {
    id: 4,
    title: "Sálvame",
    description:
      "Son una organización sin fines de lucro dedicada a la labor social desde julio del 2021 y cuentan con tres líneas de acción: población vulnerable, medio ambiente y animales.",
    image: "/images/home/salvame.png",
    gallery: [
      "/images/home/salvame1.png",
      "/images/home/salvame2.png",
      "/images/home/salvame3.png",
      "/images/home/salvame4.png",
      "/images/home/salvame5.png",
      "/images/home/salvame6.png",
      "/images/home/salvame7.png",
      "/images/home/salvame8.png",
      "/images/home/salvame9.png",
      "/images/home/salvame10.png",
      "/images/home/salvame11.png",
      "/images/home/salvame12.png",
      "/images/home/salvame13.png",
      "/images/home/salvame14.png",
      "/images/home/salvame15.png",
      "/images/home/salvame16.png",
    ],
    hasGallery: true,
  },
  {
    id: 5,
    title: "Dashboard Finniu",
    description:
      "Puedes ver detalles de tu inversión desde la web de finniu, el historial, calendario y visualizar la inversión en soles y dólares.",
    image: "/images/home/dashboard2.png",
    gallery: [
      "/images/home/dashboard1.png",
      "/images/home/tour1.png",
      "/images/home/tour2.png",
      "/images/home/tour3.png",
      "/images/home/tour4.png",
      "/images/home/tour5.png",
      "/images/home/dashboard2.png",
      "/images/home/dashboard3.png",
      "/images/home/dashboard5.png",
    ],
    hasGallery: true,
  },

  {
    id: 6,
    title: "TuyruLabs",
    description:
      "Dedicada a desarrollar herramientas digitales personalizadas para pequeños emprendedores, con el objetivo de brindarles acceso a tecnología de alta calidad que les permita competir y crecer. .",
    image: "/images/home/tuyrulabs.png",
    link: "https://tuyrulabs.com/",
    hasGallery: false,
  },

  {
    id: 7,
    title: "Lucho Travel Services",
    description:
      "Empresa dedicada al transporte turístico de personal, full days, city tours , visitas educativas,entre otros. Cuentan con unidades modernas, con conductores profesionales y con la más importante experiencia adquirida a través del tiempo. ",
    image: "/images/home/luchotravel.png",
    link: "https://tuyrulabs.com/",
    hasGallery: false,
  },
];

export default function Portfolio() {
  const [openGalleryState, setOpenGalleryState] = useState<string[] | null>(
    null
  );

  const [currentImageIndexState, setCurrentImageIndexState] = useState(0);

  const handleOpenGallery = (images: string[]) => {
    setOpenGalleryState(images);
    setCurrentImageIndexState(0);
    document.body.style.overflow = "hidden";
  };

  const handleCloseGallery = () => {
    setOpenGalleryState(null);
    setCurrentImageIndexState(0);
    document.body.style.overflow = "";
  };

  const handlePrev = () => {
    setCurrentImageIndexState((prev) => (prev === 0 ? prev : prev - 1));
  };

  const handleNext = () => {
    setCurrentImageIndexState((prev) =>
      openGalleryState && prev < openGalleryState.length - 1 ? prev + 1 : prev
    );
  };

  const handleImageClick = () => {
    const image = document.querySelector(".gallery-image");
    if (image) {
      image.classList.toggle("zoomed");
      document.body.style.overflow = image.classList.contains("zoomed")
        ? "hidden"
        : "";
    }
  };
  return (
    <section
      id="projects"
      className="min-h-screen scroll-mt-36 flex justify-center bg-cream mx-auto py-10 px-4 sm:px-8"
    >
      <div className="container flex flex-col justify-center items-center">
        <h1 className="text-2xl xl:text-3xl font-bold text-center mb-4 xl:mb-10">
          Mis Proyectos
        </h1>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {portfolioData.map((project) => (
            <div
              key={project.id}
              className="bg-gray-100 w-[347px]  xl:w-[398px] 2xl:w-[440px] rounded-2xl shadow-md p-6 hover:shadow-xl transition flex flex-col h-full"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full max-h-[300px] object-cover rounded-xl"
                onClick={() => handleOpenGallery(project.gallery!)}
              />
              <h2 className="text-lg xl:text-xl font-semibold mt-4">
                {project.title}
              </h2>
              <p className="text-black text-base xl:text-lg text-justify mt-2 min-h-[60px]">
                {project.description}
              </p>

              <div className="mt-auto">
                {project.hasGallery ? (
                  <button
                    onClick={() => handleOpenGallery(project.gallery!)}
                    className="mt-4 px-4 py-2 background-button hover-bg text-black cursor-pointer font-bold rounded-full transition"
                  >
                    Ver galería
                  </button>
                ) : (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-block px-4 py-2 background-button hover-bg cursor-pointer text-black font-bold rounded-full transition"
                  >
                    Ver demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
        {openGalleryState && (
          <div className="fixed inset-0 backdrop-blur-2xl bg-black/30 flex items-center justify-center z-70 px-4">
            <button
              onClick={handleCloseGallery}
              className="absolute top-4 right-2 text-black text-4xl font-bold z-[9999] px-3 py-1"
            >
              ×
            </button>

            <div className="bg-yellow p-8 rounded-xl max-w-7xl max-h-[90vh] w-full relative flex flex-col items-center overflow-y-auto">
              <h3 className="text-xl xl:text-2xl text-black font-semibold mb-4">
                Galería
              </h3>

              <div className="relative w-full flex items-center justify-center">
                <button
                  onClick={handlePrev}
                  disabled={currentImageIndexState === 0}
                  className="hidden xl:flex absolute left-0 bg-pink-300 text-black rounded-full w-12 h-12 items-center justify-center text-4xl transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ‹
                </button>

                <img
                  src={openGalleryState[currentImageIndexState]}
                  alt={`Imagen ${currentImageIndexState}`}
                  className="gallery-image max-h-[70vh] max-w-full object-contain rounded-xl"
                  onClick={handleImageClick}
                />

                <button
                  onClick={handleNext}
                  disabled={
                    currentImageIndexState === openGalleryState.length - 1
                  }
                  className="hidden xl:flex absolute right-0 bg-pink-300 text-black rounded-full w-12 h-12 items-center justify-center text-4xl transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ›
                </button>
              </div>

              <div className="flex xl:hidden justify-center gap-4 mt-4">
                <button
                  onClick={handlePrev}
                  disabled={currentImageIndexState === 0}
                  className="bg-pink-300 text-black rounded-full w-12 h-12 flex items-center justify-center text-4xl transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ‹
                </button>

                <button
                  onClick={handleNext}
                  disabled={
                    currentImageIndexState === openGalleryState.length - 1
                  }
                  className="bg-pink-300 text-black rounded-full w-12 h-12 flex items-center justify-center text-4xl transition disabled:opacity-30 disabled:cursor-not-allowed"
                >
                  ›
                </button>
              </div>

              <p className="mt-4 text-sm text-black font-bold">
                {currentImageIndexState + 1} de {openGalleryState.length}
              </p>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
