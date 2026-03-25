import img2 from "../assets/info/img4.svg"
import { desarrolloPersonalContent } from "./backups/desarrolloPersonalContent.js"

export default function DesarrolloPersonal() {
  return (
    <div className="max-w-5xl mx-auto px-6 py-8">
      <div className="bg-white/70 backdrop-blur-md rounded-3xl border border-[#49b6b6]/30 p-8">
        {/* Imagen */}
        <img
          src={img2}
          alt="Desarrollo Personal"
          className="w-3/4 max-w-md h-auto mx-auto mb-6 rounded-3xl"
        />

        {/* Título */}
        <h1 className="text-center text-3xl font-semibold text-[#0f2a3a] mb-6">
          Volver a vos
        </h1>

        {/* Contenido completo (sin desplegable) */}
        <div className="text-[#0f2a3a]/80 leading-relaxed text-justify whitespace-pre-wrap mb-6">
          {desarrolloPersonalContent}
        </div>

        {/* Botón de Agendar por WhatsApp */}
        <div className="flex justify-center">
          <a
            href="https://chat.whatsapp.com/CKGbBg6pltQ0mROmzq2yLP?mode=gi_t"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-2 rounded-full text-base bg-[#25D366] text-white font-medium hover:bg-[#1fa857] transition"
          >
            📱 Agendar por WhatsApp
          </a>
        </div>
      </div>
    </div>
  )
}
