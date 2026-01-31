import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"

import img1 from "../assets/info/img1.svg"
import img2 from "../assets/info/img2.svg"
import img3 from "../assets/info/img3.svg"

const items = [
  {
    img: img1,
    // title: "Desarrollo personal",
    content:
      `
✨ Coaching uno a uno
Un espacio personalizado para tu transformación personal

Las sesiones individuales de coaching son un proceso de acompañamiento profesional y confidencial, diseñado para que puedas comprenderte mejor, gestionar tus emociones y generar cambios reales y sostenibles en tu vida personal y profesional.

A través de un enfoque integrador, combinamos herramientas de psicología, Programación Neurolingüística (PNL) y coaching ontológico, poniendo el foco en el aprendizaje consciente, la acción y el desarrollo de nuevas posibilidades.
🔍 ¿En qué consiste este proceso?

Cada encuentro es un espacio de escucha profunda, reflexión y acción, donde trabajamos sobre:

✔ la manera en que pensás
✔ cómo te hablás y te comunicás
✔ las emociones que te habitan
✔ las decisiones que tomás
✔ los resultados que hoy estás obteniendo

El objetivo no es “arreglarte”, sino acompañarte a descubrir nuevas formas de ser, sentir y actuar, más alineadas con quien querés ser.
🧠 Herramientas que utilizamos

🔹 Psicología aplicada al desarrollo personal
🔹 PNL para transformar creencias y patrones limitantes
🔹 Coaching ontológico para ampliar conciencia, lenguaje y acción

    No es terapia.
    Es un proceso de aprendizaje, autoconocimiento y transformación personal.
    🌱 ¿Para qué puede servirte el coaching uno a uno?

    Estas sesiones pueden ayudarte a:

    ✨ fortalecer tu autoestima
    ✨ desarrollar inteligencia emocional
    ✨ gestionar el estrés y la autoexigencia
    ✨ mejorar tus vínculos y tu comunicación
    ✨ tomar decisiones con mayor claridad
    ✨ recuperar confianza, motivación y propósito
    🤝 Un acompañamiento a tu medida

    Cada proceso es único y personalizado.
    El ritmo, los objetivos y el camino se construyen juntos, respetando tu historia, tu momento vital y tus necesidades actuales.

        Vos traés el desafío.
        Yo acompaño el proceso.
        El cambio lo construís vos.
        🚀 ¿Damos el primer paso?

        Agendá tu primera sesión gratuita
        Un encuentro inicial para conocernos, conversar sobre tu situación actual y definir si este proceso es para vos.

        🔹 Sin compromiso
        🔹 100 % confidencial
        🔹 Modalidad online

            A veces, una conversación es todo lo que necesitás para empezar a cambiar.

        👉 Agendá tu primera sesión gratuita

      `,
  },
  {
    img: img2,
    // title: "Bienestar emocional",
    // content:
    //   "Texto largo, contenedor cómodo, buena lectura. El diseño acompaña el contenido y no lo interrumpe.",
  },
  {
    img: img3,
    // title: "Hábitos conscientes",
    // content:
    //   "Más texto largo. Este formato invita a bajar el ritmo, leer y reflexionar.",
  },
]

export default function ExpandableCards() {
  const [open, setOpen] = useState(null)
  const location = useLocation()

  useEffect(() => {
    if (location.hash === "#coaching-uno-a-uno") {
      setOpen(0)
      const el = document.getElementById("coaching-uno-a-uno")
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" })
    }
  }, [location])

  return (
    <section className="mt-24 space-y-16">
      {items.map((item, index) => {
        const isOpen = open === index

        return (
          <div
            key={index}
            id={index === 0 ? "coaching-uno-a-uno" : undefined}
            className="bg-white/70 backdrop-blur-md rounded-3xl border border-[#49b6b6]/30 p-8"
          >
            {/* Imagen */}
            {index === 1 ? (
              <Link to="/page2">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto mx-auto mb-6 rounded-3xl"
                />
              </Link>
            ) : index === 2 ? (
              <Link to="/page3">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-auto mx-auto mb-6 rounded-3xl"
                />
              </Link>
            ) : (
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-auto mx-auto mb-6 rounded-3xl"
              />
            )}

            {/* Título */}
            <h3 className="text-center text-2xl font-semibold text-[#0f2a3a] mb-4">
              {item.title}
            </h3>

            {/* Texto desplegable */}
            <div
              className={`overflow-hidden transition-all duration-500 ease-in-out
                ${isOpen ? "max-h-[1700px] mb-6" : "max-h-0"}`}
            >
              <p className="text-[#0f2a3a]/80 leading-relaxed text-justify whitespace-pre-wrap">
                {item.content}
              </p>

              {/* Botón WhatsApp - Solo visible cuando está abierto el primer item */}
              {index === 0 && isOpen && (
                <div className="flex justify-center">
                  <a
                    href="https://wa.me/5492645065072?text=Hola, quiero agendar una sesión de coaching"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      px-4 py-1 rounded-full text-sm
                      bg-[#25D366] text-white font-medium
                      hover:bg-[#1fa857] transition
                    "
                  >
                    📱 Agendar por WhatsApp
                  </a>
                </div>
              )}
            </div>

            {/* Botón */}
            <button
              onClick={() => setOpen(isOpen ? null : index)}
              className="
                mx-auto block px-6 py-2 rounded-full
                bg-[#f45b69] text-white font-medium
                hover:bg-[#e14e5b] transition
              "
            >
              {isOpen ? "Ver menos" : "Saber más"}
            </button>
          </div>
        )
      })}
    </section>
  )
}
