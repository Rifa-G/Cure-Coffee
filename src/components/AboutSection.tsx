import './AboutSection.css'

const AboutSection = () => {
  return (
    <section id="about-section" className="about-section">
      <div className="container">
        <div className="about-header">
          <h2 className="about-title">Keep It Simple</h2>
        </div>
        
        <div className="about-content">
          <div className="about-message">
            <p className="about-paragraph">
              For my entire life, I have loved coffee and have always sought out the 
              best beans brewed in the most creative ways. With a natural sweet tooth, 
              I often gravitate towards lattes and other speciality drinks. The only 
              problem is, whether I go to the grocery store or my favorite coffee shop, 
              the same thing happens: I either can't find anything that tastes good. Or if I do, 
              it is terrible for me.
            </p>
            
            <p className="about-paragraph">
              So I created Cure Coffee. Cure No. 1 is a salted maple oat latte. There 
              are only five ingredients: coffee, organic maple syrup, sea salt, vanilla 
              extract and oat milk. With only 95 calories and 4 grams of sugar, Cure 
              No. 1 is the perfect combination of sweet and savory. Cure is coffee as 
              it should be: world-class taste without the sugar crash. I can't wait 
              for you to try!
            </p>
          </div>
          
          <div className="about-signature">
            <img 
              src="/assets/james.svg" 
              alt="James Signature" 
              className="signature-image"
            />
            <p className="founder-title">CURE Founder</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 