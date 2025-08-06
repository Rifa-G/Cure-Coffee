import { useNavigate } from 'react-router-dom'
import './HeroSection.css'

const HeroSection = () => {
  const navigate = useNavigate()

  const handleShopClick = () => {
    navigate('/shop')
  }

  const handleReachOutClick = () => {
    navigate('/contact')
  }

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-text">
          <div className="hero-title-container">
            <h1 className="hero-title">
              Coffee As It Should Be
            </h1>
          </div>
          <div className="hero-buttons">
            <button onClick={handleShopClick} className="shop-button">
              SHOP NOW
            </button>
            <button onClick={handleReachOutClick} className="reach-out-button">
              REACH OUT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 