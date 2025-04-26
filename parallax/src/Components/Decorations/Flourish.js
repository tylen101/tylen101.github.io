import React, { useRef, useMemo, useState, useCallback } from 'react';
import { useSpring, animated, useSprings } from '@react-spring/web';
import { useMouse } from '@uidotdev/usehooks';

const Flourish = ({
  x,
  y,
  size,
  color,
  mouseX,
  mouseY,
  speed,
  driftOffset,
}) => {
  const [{ posX, posY }, api] = useSpring(() => ({
    posX: x,
    posY: y,
  }));

  React.useEffect(() => {
    let animationFrame;
    const animate = () => {
      const time = Date.now() * 0.001; // time in seconds
      const driftX = Math.sin(time + driftOffset) * 10;
      const driftY = Math.cos(time + driftOffset) * 10;

      api.start({
        posX: x + (mouseX / window.innerWidth - 0.5) * speed + driftX,
        posY: y + (mouseY / window.innerHeight - 0.5) * speed + driftY,
        config: { tension: 120, friction: 40 },
      });

      animationFrame = requestAnimationFrame(animate);
    };
    animate();

    return () => cancelAnimationFrame(animationFrame);
  }, [mouseX, mouseY, x, y, speed, api, driftOffset]);

  return (
    <animated.div
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        transform: posX.to((px) => `translate3d(${px}px, ${posY.get()}px, 0)`),
        pointerEvents: 'none',
        opacity: 0.7,
        filter: 'blur(1px)',
      }}
    />
  );
};

const Particle = ({ style, color, size }) => {
  return (
    <animated.div
      style={{
        ...style,
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: '50%',
        background: color,
        pointerEvents: 'none',
        opacity: style.opacity,
        filter: 'blur(2px)',
      }}
    />
  );
};

const FlourishParallax = ({ numFlourishes = 20 }) => {
  const containerRef = useRef(null);
  const mouse = useMouse(containerRef);
  const [particles, setParticles] = useState([]);

  const flourishes = useMemo(() => {
    return Array.from({ length: numFlourishes }).map(() => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: 10 + Math.random() * 20,
      color: `hsl(${Math.random() * 360}, 70%, 70%)`,
      speed: 50 + Math.random() * 100,
      driftOffset: Math.random() * Math.PI * 2,
    }));
  }, [numFlourishes]);

  const handleClick = useCallback((e) => {
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const newParticles = Array.from({ length: 15 }).map(() => ({
      id: Math.random(),
      x,
      y,
      dx: (Math.random() - 0.5) * 200,
      dy: (Math.random() - 0.5) * 200,
      color: `hsl(${Math.random() * 360}, 70%, 70%)`,
      size: 5 + Math.random() * 10,
    }));

    setParticles((current) => [...current, ...newParticles]);
  }, []);

  const springs = useSprings(
    particles.length,
    particles.map((p) => ({
      from: { x: p.x, y: p.y, opacity: 1 },
      to: async (next) => {
        await next({ x: p.x + p.dx, y: p.y + p.dy, opacity: 0 });
      },
      config: { duration: 1000 },
      onRest: () => {
        setParticles((current) => current.filter((pt) => pt.id !== p.id));
      },
    }))
  );

  return (
    <div
      ref={containerRef}
      style={{
        position: 'relative',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #0a0a0a, #0f0f1f)',
        cursor: 'crosshair',
      }}
      onClick={handleClick}
    >
      {flourishes.map((flourish, index) => (
        <Flourish
          key={index}
          {...flourish}
          mouseX={mouse.x || window.innerWidth / 2}
          mouseY={mouse.y || window.innerHeight / 2}
        />
      ))}

      {springs.map((style, i) => (
        <Particle
          key={particles[i]?.id || i}
          style={style}
          color={particles[i]?.color}
          size={particles[i]?.size}
        />
      ))}
    </div>
  );
};

export default FlourishParallax;
