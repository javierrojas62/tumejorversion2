import { useEffect } from "react"
import { HashRouter, Routes, Route, useLocation } from "react-router-dom"
import Header from "./components/Header"
import Home from "./pages/Home"
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
      <div className="min-h-screen bg-[#9fd8d6] flex flex-col">
        <Header />
        <ScrollToTop />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page2" element={<Page2 />} />
            <Route path="/page3" element={<Page3 />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>

  )
}
