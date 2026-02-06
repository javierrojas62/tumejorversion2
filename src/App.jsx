import { useEffect } from "react"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import DesarrolloPersonal from "./pages/DesarrolloPersonal"
import Editorial from "./pages/Editorial"
import Footer from "./components/Footer"

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-[#9fd8d6] flex flex-col">
        <Header />
        <ScrollToTop />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/desarrollo-personal"
              element={<DesarrolloPersonal />}
            />
            <Route path="/editorial" element={<Editorial />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
