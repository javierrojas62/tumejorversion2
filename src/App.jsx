import { useEffect } from "react"
import { HashRouter, Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
import Page1 from "./pages/UnoaUno"
import Page2 from "./pages/DesarrolloPersonal"
import Page3 from "./pages/Editorial"
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
    <HashRouter>
      <div className="min-h-screen bg-[#9fd8d6]">
        <Header />
        <ScrollToTop />
        <main >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<Page1 />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </main>
      </div>
      <Footer />
    </HashRouter>

  )
}
