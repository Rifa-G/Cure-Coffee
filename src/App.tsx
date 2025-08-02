import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import HeroSection from './components/HeroSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'
import ShopPage from './pages/ShopPage'

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={
            <>
              <HeroSection />
              <AboutSection />
            </>
          } />
          <Route path="/shop" element={<ShopPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App 