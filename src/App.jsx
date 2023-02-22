import { Route, Routes, useLocation } from 'react-router'

import { Home, Product } from './pages/Index'
import { Navbar, Footer } from './components/Index'


function App() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes location={location} key={location.pathname} >
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Routes>
      <Footer />
    </>

  )
}

export default App
