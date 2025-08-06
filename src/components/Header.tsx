import { useNavigate, useLocation } from 'react-router-dom'
import './Header.css'

const Header = () => {
  const navigate = useNavigate()
  const location = useLocation()
  
  // Check if we're on the shop page
  const isShopPage = location.pathname === '/shop'

  const handleShopClick = () => {
    navigate('/shop')
  }

  const handleAboutClick = () => {
    // If we're not on the home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/')
      // Wait a moment for navigation to complete, then scroll
      setTimeout(() => {
        const aboutSection = document.getElementById('about-section')
        if (aboutSection) {
          aboutSection.scrollIntoView({ behavior: 'smooth' })
        }
      }, 100)
    } else {
      // We're already on home page, just scroll
      const aboutSection = document.getElementById('about-section')
      if (aboutSection) {
        aboutSection.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }

  const handleContactClick = () => {
    navigate('/contact')
  }

  const handleCartClick = () => {
    // Will open Shopify cart
    const cartButton = document.querySelector('[data-shopify] [data-element-type="cart"] button')
    if (cartButton) {
      (cartButton as HTMLElement).click()
    }
  }

  const handleLogoClick = () => {
    navigate('/')
  }

  return (
    <header className={`header ${isShopPage ? 'header-shop' : ''}`}>
      <div className="header-content">
        {/* Logo - Left Side */}
        <div className="header-logo" onClick={handleLogoClick}>
          <img 
            src="/assets/curecoffee_logo.svg" 
            alt="CURE COFFEE" 
            className="logo-image"
          />
        </div>

        {/* Navigation - Center */}
        <nav className="header-nav">
          <button onClick={handleShopClick} className="nav-link">
            SHOP
          </button>
          <button onClick={handleAboutClick} className="nav-link">
            ABOUT
          </button>
          <button onClick={handleContactClick} className="nav-link">
            CONTACT
          </button>
        </nav>

        {/* Cart Button - Right Side */}
        <button onClick={handleCartClick} className="cart-button">
          <img 
            src="/assets/shoppingcart.svg" 
            alt="Shopping Cart" 
            className="cart-icon"
          />
        </button>
      </div>
    </header>
  )
}

export default Header 