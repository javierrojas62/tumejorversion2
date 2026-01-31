import logo from "../assets/logo.svg"

export default function HeroCard() {
  return (
    <section className="min-h-[40vh] flex items-center justify-center">
      <div className="w-full bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-10 text-center border border-white/20">
        
        {/* Logo */}
        <img
          src={logo}
          alt="Tu Mejor Versión"
          className="w-24 h-24 mx-auto mb-6 rounded-3xl"
        />

        {/* Título */}
        <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
          Tu Mejor Versión
        </h1>

        {/* Subtítulo */}
        {/* <p className="text-white/80 text-lg">
          Información clara para mejorar cada día
        </p> */}
      </div>
    </section>
  )
}
