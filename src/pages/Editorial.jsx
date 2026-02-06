import img1 from "../assets/editorial/img1.svg"
import img2 from "../assets/editorial/img2.svg"
import img3 from "../assets/editorial/img3.svg"
import tallerImg1 from "../assets/tallerEscritora/img1.svg"
import tallerImg2 from "../assets/tallerEscritora/img2.svg"
import { useState } from "react"

const publicaciones = [
  {
    img: img1,
    title: "Lecturas inspiradoras",
    content: `
📖 En construcción.
    `,
  },
  {
    img: img2,
    title: "Taller",
    content: `
📚 Talleres.
    `,
  },
  {
    img: img3,
    title: "Publica tu libro",
    content: `
✍️ En construcción.
    `,
  },
]

export default function Page1() {
  const [open, setOpen] = useState(null)

  return (
    <div className="max-w-5xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-[#0f2a3a] mb-12 mt-8">
        Nuestra Editorial
      </h1>

      <section className="space-y-8 mb-8">
        {publicaciones.map((pub, index) => {
          const isOpen = open === index

          return (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-3xl border border-[#49b6b6]/30 p-8 flex flex-col items-center"
            >
              {/* Imagen */}
              <img
                src={pub.img}
                alt={pub.title}
                className="w-full max-h-[600px] object-contain mb-6 rounded-3xl"
              />

              {/* Título */}
              <h3 className="text-center text-2xl font-semibold text-[#0f2a3a] mb-6">
                {pub.title}
              </h3>

              {/* Texto desplegable */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out w-full
                  ${isOpen ? "max-h-[2000px] mb-6" : "max-h-0"}`}
              >
                <p className="text-[#0f2a3a]/80 leading-relaxed text-justify whitespace-pre-wrap">
                  {pub.content}
                </p>

                {/* Imágenes del Taller de Escritura: solo para la publicación 2 y cuando esté abierta */}
                {index === 1 && isOpen && (
                  <div className="flex flex-col md:flex-row gap-4 mt-6 w-full items-center md:items-stretch">
                    <img
                      src={tallerImg1}
                      alt="Taller Escritura 1"
                      className="w-full md:w-1/2 max-h-[520px] object-contain rounded-3xl"
                    />
                    <img
                      src={tallerImg2}
                      alt="Taller Escritura 2"
                      className="w-full md:w-1/2 max-h-[520px] object-contain rounded-3xl"
                    />
                  </div>
                )}
              </div>

              {/* Botón Saber más/menos */}
              <button
                onClick={() => setOpen(isOpen ? null : index)}
                className="
                  mx-auto block px-6 py-2 rounded-full
                  bg-[#f45b69] text-white font-medium
                  hover:bg-[#e14e5b] transition
                "
              >
                {isOpen ? "Saber menos" : "Saber más"}
              </button>
            </div>
          )
        })}
      </section>
    </div>
  )
}
