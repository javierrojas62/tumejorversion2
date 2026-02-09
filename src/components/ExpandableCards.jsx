import { useState, useEffect } from "react"
import { useLocation, Link } from "react-router-dom"

import img1 from "../assets/info/img1.svg"
import img2 from "../assets/info/img2.svg"
import img3 from "../assets/info/img3.svg"
import img4 from "../assets/info/img4.svg"

const items = [
  {
    title: "Coaching uno a uno ✨",
    img: img1,
    content: `Un espacio personalizado para tu transformación personal

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

        👉 Agendá tu primera sesión gratuita`,
  },
  {
    title: "Desarrollo Personal",
    img: img2,
content: `Un espacio para volver a vos, bajar el estrés y recuperar tu equilibrio

Si vivís cansada, exigida, estresada y con la sensación de que siempre estás para todos menos para vos, este programa es para vos.
Volver a vos es un programa grupal de manejo del estrés para mujeres trabajadoras y emprendedoras que se sienten exigidas y agotadas emocionalmente, y desean recuperar su bienestar y claridad interior.

A lo largo de un proceso consciente y acompañado, vas a aprender a escucharte, regular tus emociones y fortalecer tu autoestima, incorporando hábitos de autocuidado sostenibles en el tiempo.
🧭 ¿En qué consiste este programa?

Es un recorrido práctico y humano donde trabajamos sobre:

✔ identificar qué situaciones y pensamientos te generan estrés
✔ aprender a regular tus emociones sin exigirte de más
✔ fortalecer tu autoestima y el vínculo con vos misma
✔ poner límites claros sin culpa
✔ incorporar hábitos de autocuidado reales y sostenibles

El objetivo no es hacer más, sino vivir mejor, con mayor calma, presencia y coherencia interna.
🧠 Herramientas que utilizamos

🔹 Psicología positiva aplicada al bienestar
🔹 Coaching ontológico para ampliar conciencia y acción
🔹 Programación Neurolingüística (PNL) para transformar patrones y creencias limitantes

    No es terapia.
    Es un espacio de aprendizaje, autocuidado y reconexión personal.
    🌱 ¿Para qué puede servirte Volver a vos?

    Este programa puede ayudarte a:

    ✨ reducir el estrés y la autoexigencia
    ✨ mejorar tu bienestar emocional
    ✨ recuperar energía y motivación
    ✨ fortalecer tu autoestima
    ✨ aprender a ponerte en primer lugar sin culpa
    ✨ volver a escucharte y elegirte con mayor claridad
    🤝 Un proceso grupal, humano y acompañado

    No estás sola.
    Compartís este proceso con otras mujeres que atraviesan desafíos similares, en un espacio cuidado, respetuoso y de sostén mutuo.

        Vos traés tu historia.
        El espacio acompaña.
        El cambio comienza cuando te elegís.
        💫 ¿Te animás a volver a vos?

        Consultá por la próxima edición del programa
        Un espacio para bajar el ruido, reconectar con vos y recuperar tu equilibrio.

        🔹 Modalidad grupal
        🔹 Acompañamiento profesional
        🔹 Espacio seguro y confidencial

            A veces, volver a vos es el acto más valiente que podés hacer.

        👉 Pedí más información por WhatsApp`,
  },
  {
    title: "Editorial",
    img: img3,
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

            {/* IMÁGENES */}
            {index === 1 ? (
  <div className="flex flex-col gap-6 mb-6">
    {/* Imagen principal */}
    <Link to="/page2">
      <img
        src={img2}
        alt="Desarrollo Personal"
        className="w-full h-auto mx-auto rounded-3xl"
      />
    </Link>

    {/* Imagen secundaria (solo al abrir) */}
    {isOpen && (
      <img
        src={img4}
        alt="Imagen complementaria"
        className="
          w-4/5 md:w-3/4
          max-h-[500px]
          object-contain
          mx-auto
          rounded-2xl
          transition-all duration-500 ease-in-out
        "
      />
    )}
  </div>
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

            {/* TÍTULO */}
            <h3 className="text-center text-2xl font-semibold text-[#0f2a3a] mb-4">
              {item.title}
            </h3>

            {/* TEXTO DESPLEGABLE */}
            <div
              className={`transition-all duration-500 ease-in-out
                ${
                  isOpen
                    ? "max-h-[80vh] md:max-h-[1700px] mb-6 overflow-auto"
                    : "max-h-0 overflow-hidden"
                }`}
            >
              <p className="text-[#0f2a3a]/80 leading-relaxed text-justify whitespace-pre-wrap">
                {item.content}
              </p>

              {(index === 0 || index === 1) && isOpen && (
                <div className="flex justify-center mt-4">
                  <a
                    href="https://wa.me/5492645065072?text=Hola, quiero agendar una sesión"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-1 rounded-full text-sm bg-[#25D366] text-white font-medium hover:bg-[#1fa857] transition"
                  >
                    📱 Agendar por WhatsApp
                  </a>
                </div>
              )}
            </div>

            {/* BOTÓN */}
            <button
              onClick={() => setOpen(isOpen ? null : index)}
              className="mx-auto block px-6 py-2 rounded-full bg-[#f45b69] text-white font-medium hover:bg-[#e14e5b] transition"
            >
              {isOpen ? "Ver menos" : "Saber más"}
            </button>
          </div>
        )
      })}
    </section>
  )
}
