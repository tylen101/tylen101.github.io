// import logo from './logo.svg';
import './App.css';
import { Routes, Route, Router } from 'react-router';
import Home from './Pages/Home/Home';

function App() {
  // // Floating particles
  // const canvas = document.getElementById('particles');
  // const ctx = canvas.getContext('2d');
  // let particles = [];

  // function resize() {
  //   canvas.width = window.innerWidth;
  //   canvas.height = window.innerHeight;
  // }

  // window.addEventListener('resize', resize);
  // resize();

  // class Particle {
  //   constructor() {
  //     this.x = Math.random() * canvas.width;
  //     this.y = Math.random() * canvas.height;
  //     this.radius = Math.random() * 2 + 1;
  //     this.speedX = Math.random() * 0.6 - 0.3;
  //     this.speedY = Math.random() * 0.6 - 0.3;
  //     this.alpha = Math.random() * 0.5 + 0.3;
  //   }

  //   update() {
  //     this.x += this.speedX;
  //     this.y += this.speedY;

  //     if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
  //     if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
  //   }

  //   draw() {
  //     ctx.beginPath();
  //     ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
  //     ctx.fillStyle = `rgba(0, 120, 220, ${this.alpha})`;
  //     ctx.fill();
  //   }
  // }

  // function initParticles() {
  //   particles = [];
  //   for (let i = 0; i < 80; i++) {
  //     particles.push(new Particle());
  //   }
  // }

  // function animateParticles() {
  //   ctx.clearRect(0, 0, canvas.width, canvas.height);
  //   particles.forEach((p) => {
  //     p.update();
  //     p.draw();
  //   });
  //   requestAnimationFrame(animateParticles);
  // }

  // initParticles();
  // animateParticles();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* <Route path="step-2" element={<StepTwo />} /> */}
      {/* <Route path="step-3" element={<StepThree />} /> */}
    </Routes>
  );
}

export default App;
