export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="mt-6 bg-[#9fd8d6]/80 backdrop-blur-md border-t border-[#49b6b6]/40">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col items-center gap-6">

        {/* Redes */}
        <div className="flex gap-6 text-[#0f2a3a]">
          <a href="https://www.tiktok.com/@ivyjanetnogueras?_t=ZM-8yd5eLW4ppV&_r=1" aria-label="TikTok" className="hover:text-[#f45b69] transition" target="_blank" rel="noopener noreferrer">
            <TikTok />
          </a>
          <a href="https://www.instagram.com/janetivynogueras?igsh=MXE4NzZseGlqaW1yaw==" aria-label="Instagram" className="hover:text-[#f45b69] transition" target="_blank" rel="noopener noreferrer">
            <Instagram />
          </a>
          <a href="https://www.facebook.com/share/158Jt4vR72P/?mibextid=wwXIfr" aria-label="Facebook" className="hover:text-[#f45b69] transition" target="_blank" rel="noopener noreferrer">
            <Facebook />
          </a>
          <a href="https://wa.me/5492645065072" aria-label="WhatsApp" className="hover:text-[#f45b69] transition" target="_blank" rel="noopener noreferrer">
            <WhatsApp />
          </a>
          <a href="mailto:tumejorversionbyivy@gmail.com" aria-label="Email" className="hover:text-[#f45b69] transition">
            <Mail />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-sm text-[#0f2a3a]/70 text-center">
          © {year} Tu Mejor Versión. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  )
}

/* ICONOS */

function TikTok() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M16.5 3a5.5 5.5 0 0 0 4.5 2.5V9a8.3 8.3 0 0 1-4.5-1.4v6.4a6.5 6.5 0 1 1-6.5-6.5c.3 0 .6 0 .9.1v3.4a3 3 0 1 0 2.6 3V3h3z" />
    </svg>
  )
}

function Instagram() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5a5 5 0 1 0 0 10 5 5 0 0 0 0-10zm6-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
    </svg>
  )
}

function Facebook() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M22 12a10 10 0 1 0-11.5 9.9v-7h-2v-3h2V9.5c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V11h2.3l-.4 3h-1.9v7A10 10 0 0 0 22 12z" />
    </svg>
  )
}

function WhatsApp() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.5A10 10 0 1 0 12 2zm5 13.4c-.2.6-1.2 1.1-1.6 1.2-.4.1-.9.1-1.5-.1-.4-.1-.9-.3-1.6-.6-2.8-1.2-4.6-4.1-4.7-4.3-.1-.2-1.1-1.5-1.1-2.9 0-1.4.7-2 1-2.3.3-.3.7-.4.9-.4h.7c.2 0 .4 0 .6.5.2.5.8 1.9.9 2 .1.1.1.3 0 .5-.1.2-.2.3-.3.4-.1.1-.3.3-.4.4-.1.1-.3.3-.1.6.2.3.8 1.4 1.7 2.2 1.2 1.1 2.2 1.4 2.5 1.6.3.1.5.1.7-.1.2-.2.8-.9 1-1.2.2-.3.4-.2.6-.1.2.1 1.5.7 1.8.9.3.1.5.2.6.3.1.1.1.6-.1 1.2z" />
    </svg>
  )
}

function Mail() {
  return (
    <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4-8 5-8-5V6l8 5 8-5v2z" />
    </svg>
  )
}
