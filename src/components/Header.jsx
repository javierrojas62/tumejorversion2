import { NavLink } from "react-router-dom"
import { useState } from "react"

export default function Header() {
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    isActive
      ? "block text-[#f45b69] font-semibold"
      : "block text-[#0f2a3a] hover:text-[#f45b69] transition"

  return (
    <header className="
  sticky top-0 z-50
  bg-[#8fd0ce]/95
  backdrop-blur-md
  border-b border-[#49b6b6]/50
  shadow-sm
">
      <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <NavLink
          to="/"
          className="flex items-center gap-2 text-[#0f2a3a] font-bold text-xl"
          onClick={() => setOpen(false)}
        >
        </NavLink>

        {/* Links desktop */}
        <div className="hidden md:flex gap-6">
          <NavLink to="/" className={linkClass}>Inicio</NavLink>
          <NavLink to="/#coaching-uno-a-uno" className={linkClass}>Coaching
            Uno a Uno</NavLink>
          <NavLink to="/desarrollo-personal" className={linkClass}>Talleres de
            Desarrollo Personal</NavLink>
          <NavLink to="/editorial" className={linkClass}>Nuestra
            Editorial</NavLink>
        </div>

        {/* Botón hamburguesa */}
        <button
          className="md:hidden text-2xl text-[#0f2a3a]"
          onClick={() => setOpen(!open)}
          aria-label="Abrir menú"
        >
          ☰
        </button>
      </nav>

      {/* Menú mobile */}
      {open && (
        <div className="md:hidden bg-[#9fd8d6]/95 backdrop-blur-md px-6 py-4 space-y-4 border-t border-[#49b6b6]/40">
          <a
            href="/"
            className={linkClass({ isActive: false })}
            onClick={() => setOpen(false)}
          >
            Inicio
          </a>

          <a
            href="/#coaching-uno-a-uno"
            className="block text-[#0f2a3a] hover:text-[#f45b69] transition"
            onClick={() => setOpen(false)}
          >
            Coaching Uno a Uno
          </a>

          <NavLink to="/desarrollo-personal" className={linkClass} onClick={() => setOpen(false)}>
            Desarrollo Personal
          </NavLink>
          <NavLink to="/editorial" className={linkClass} onClick={() => setOpen(false)}>
            Nuestra
            Editorial
          </NavLink>
        </div>
      )}
    </header>
  )
}
