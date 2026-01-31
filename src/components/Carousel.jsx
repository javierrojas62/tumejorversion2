import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

import slide1 from "../assets/carousel/slide1.svg"
import slide2 from "../assets/carousel/slide2.svg"
import slide3 from "../assets/carousel/slide3.svg"
import slide4 from "../assets/carousel/slide4.svg"

const slides = [
  { img: slide1, to: "/page1" },
  { img: slide2, to: "/page2" },
  { img: slide3, to: "/page3" },
  { img: slide4, to: "/page4" },
]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, 10000)

    return () => clearInterval(interval)
  }, [])

  const prev = () =>
    setCurrent((current - 1 + slides.length) % slides.length)

  const next = () =>
    setCurrent((current + 1) % slides.length)

  return (
    <section className="relative">
      <div
      className="overflow-hidden rounded-3xl cursor-pointer"
      onClick={() => navigate(slides[current].to)}
    >
      <img
        src={slides[current].img}
        alt=""
        className="w-full h-[280px] md:h-[360px] object-contain bg-white/60 backdrop-blur-md rounded-3xl"
      />
    </div>

      {/* Flechas */}
      <button
        onClick={prev}
        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur
                   rounded-full w-10 h-10 flex items-center justify-center
                   text-[#0f2a3a] hover:bg-white transition"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur
                   rounded-full w-10 h-10 flex items-center justify-center
                   text-[#0f2a3a] hover:bg-white transition"
      >
        ›
      </button>
    </section>
  )
}
