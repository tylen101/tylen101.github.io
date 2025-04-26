import './Home.css';

import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function Home() {
  return (
    <Parallax pages={4}>
      {/* Hero Section */}
      <ParallaxLayer offset={0} speed={0.5}>
        <section className="hero">
          <div className="hero-content">
            <h1>Innovate. Create. Deliver.</h1>
            <p>Empowering businesses through smart software solutions.</p>
          </div>
          <img
            src="/images/hero-image.webp"
            alt="Hero"
            className="hero-image"
          />
        </section>
      </ParallaxLayer>

      {/* About Section */}
      <ParallaxLayer offset={1} speed={0.5}>
        <section className="about">
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              We are a passionate team of developers crafting software that
              drives success. Our mission is to build elegant, powerful
              solutions that scale with your business.
            </p>
          </div>
          <img
            src="/images/about-us.webp"
            alt="About Us"
            className="about-image"
          />
        </section>
      </ParallaxLayer>

      {/* Services Section */}
      <ParallaxLayer offset={2} speed={0.5}>
        <section className="services">
          <h2>Our Services</h2>
          <div className="services-list">
            <div className="service-card">
              <img src="/images/custom-dev.svg" alt="Custom Dev" />
              <h3>Custom Software Development</h3>
            </div>
            <div className="service-card">
              <img src="/images/web-mobile.svg" alt="Web Mobile" />
              <h3>Web & Mobile Apps</h3>
            </div>
            <div className="service-card">
              <img src="/images/cloud.svg" alt="Cloud" />
              <h3>Cloud Integration</h3>
            </div>
            <div className="service-card">
              <img src="/images/consulting.svg" alt="Consulting" />
              <h3>Consulting & Strategy</h3>
            </div>
          </div>
        </section>
      </ParallaxLayer>

      {/* Footer Section */}
      <ParallaxLayer offset={3} speed={0.5}>
        <footer className="footer">
          <p>© 2025 Parallax. All rights reserved.</p>
        </footer>
      </ParallaxLayer>
    </Parallax>
  );
}

export default Home;
