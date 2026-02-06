import img1 from "../assets/desarrolloPersonal/img1.svg"
import img2 from "../assets/desarrolloPersonal/img2.svg"
import img3 from "../assets/desarrolloPersonal/img3.svg"
import { useState } from "react"

const talleres = [
  {
    title: "Volver a creer en mi",
    img: img1,
    buttonText: "Inscribirse",
    isAvailable: true,
    content: `
🌱 AUTOESTIMA EN ACCIÓN
Un taller grupal para fortalecer tu valor personal y volver a creer en vos
¿Sentís que te exigís demasiado, dudás de tus decisiones o postergás lo que necesitás?

La autoestima no es algo con lo que se nace o se pierde para siempre.
Es un vínculo que se construye, se aprende y se puede fortalecer.

Autoestima en acción es un taller grupal diseñado para acompañarte a reconectar con tu valor personal, transformar el diálogo interno crítico y desarrollar una relación más amable, consciente y segura con vos misma.

Este espacio no propone frases vacías ni motivación pasajera, sino herramientas reales, reflexivas y prácticas, basadas en el cuadernillo "Autoestima en acción", la psicología, el coaching ontológico y la experiencia educativa.
🌿 ¿Qué vas a trabajar en este taller?

A lo largo del proceso vas a:

    Comprender qué es la autoestima y cómo se fue construyendo en tu historia personal.

    Identificar creencias limitantes y patrones de autosabotaje que afectan tu seguridad.

    Transformar el diálogo interno crítico en uno más compasivo y fortalecedor.

    Reconocer tus recursos personales, habilidades y fortalezas reales.

    Aprender a poner límites sin culpa y a elegirte con mayor claridad.

    Desarrollar una autoestima más estable, que no dependa exclusivamente del afuera.

🌸 ¿Para quién es este taller?

Este taller es para vos si:

    Sentís que dudás de vos misma más de lo que te gustaría.

    Te cuesta reconocer tu propio valor o sostener tus decisiones.

    Vivís con una autoexigencia constante que te agota emocionalmente.

    Querés mejorar tu relación con vos misma y ganar seguridad personal.

    Buscás un espacio cuidado, grupal y acompañado, sin juicios ni exigencias.

✨ ¿Qué lo hace diferente?

✔️ No es una charla teórica: es un proceso guiado.
✔️ Combina reflexión, ejercicios prácticos y espacios de intercambio.
✔️ Está pensado desde una mirada humana, educativa y respetuosa.
✔️ El grupo funciona como sostén, no como comparación.
✔️ Te llevás herramientas que podés aplicar en tu vida cotidiana.
🌿 Modalidad

    Taller grupal

    Encuentros guiados

    Material de trabajo incluido (Autoestima en acción)

    Espacio de reflexión, práctica y acompañamiento

🌟 Empezar a fortalecer tu autoestima cambia la forma en que vivís, decidís y te relacionás.

No se trata de convertirte en otra persona, sino de volver a habitar tu propio valor.
👉 Inscribite ahora con inscripción bonificada

Reservá tu lugar y empezá este proceso de reconexión personal.
    `,
  },
  {
    title: "Habitar mis emociones",
    img: img2,
    buttonText: "Cupos llenos",
    isAvailable: false,
  },
  {
    title: "Manejo del estrés",
    img: img3,
    buttonText: "Cupos llenos",
    isAvailable: false,
  },
]

export default function Page1() {
  const [open, setOpen] = useState(null)

  return (
    <div className="max-w-5xl mx-auto px-6">
      <h1 className="text-4xl font-bold text-[#0f2a3a] mb-12 mt-8">
        Talleres de Desarrollo Personal
      </h1>

      <section className="space-y-8 mb-8">
        {talleres.map((taller, index) => {
          const isOpen = open === index

          return (
            <div
              key={index}
              className="bg-white/70 backdrop-blur-md rounded-3xl border border-[#49b6b6]/30 p-8 flex flex-col items-center"
            >
              {/* Imagen */}
              <img
                src={taller.img}
                alt={taller.title}
                className="w-full max-h-[600px] object-contain mb-6 rounded-3xl"
              />

              {/* Título */}
              <h3 className="text-center text-2xl font-semibold text-[#0f2a3a] mb-6">
                {taller.title}
              </h3>

              {/* Texto desplegable - Solo para el primer taller */}
              {index === 0 && (
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out w-full
                    ${isOpen ? "max-h-[2000px] mb-6" : "max-h-0"}`}
                >
                  <p className="text-[#0f2a3a]/80 leading-relaxed text-justify whitespace-pre-wrap">
                    {taller.content}
                  </p>
                </div>
              )}

              {/* Botón Ver más/menos - Solo para el primer taller */}
              {index === 0 && (
                <button
                  onClick={() => setOpen(isOpen ? null : index)}
                  className="
                    mx-auto block px-6 py-2 rounded-full
                    bg-[#f45b69] text-white font-medium
                    hover:bg-[#e14e5b] transition mb-4
                  "
                >
                  {isOpen ? "Ver menos" : "Saber más"}
                </button>
              )}

              {/* Botón Inscribirse/Cupos llenos */}
              {taller.isAvailable ? (
                <a
                  href="https://wa.me/5492645065072?text=Hola, quiero inscribirme al taller"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                    px-6 py-2 rounded-full
                    bg-[#f45b69] text-white font-medium
                    hover:bg-[#e14e5b] transition
                  "
                >
                  {taller.buttonText}
                </a>
              ) : (
                <button
                  disabled
                  className="
                    px-6 py-2 rounded-full
                    bg-gray-400 text-white font-medium
                    cursor-not-allowed
                  "
                >
                  {taller.buttonText}
                </button>
              )}
            </div>
          )
        })}
      </section>
    </div>
  )
}