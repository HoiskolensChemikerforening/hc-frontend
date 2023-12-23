import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  height: 100vh;
  width: 100%;
  overflow: hidden;
`;

const RainContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`;

const EmojiElement = styled.span`
  position: absolute;
  font-size: 26px;
`;

const EmojiRain = () => {
  const rainRef = useRef(null);

  useEffect(() => {
    const emoji = ['🌽', '🍇', '🍌', '🍒', '🍕', '🍷', '🍭', '💖', '💩', '🐷', '🐸', '🐳', '🎃', '🎾', '🌈', '🍦', '💁', '🔥', '😁', '😱', '🌴', '👏', '💃'];
    const circles = [];

    const addCircle = (delay, range, color) => {
      setTimeout(() => {
        const c = new Circle(range[0] + Math.random() * range[1], 80 + Math.random() * 4, color, {
          x: -0.15 + Math.random() * 0.3,
          y: 1 + Math.random() * 1
        }, range);
        circles.push(c);
      }, delay);
    };

    class Circle {
      constructor(x, y, c, v, range) {
        this.x = x;
        this.y = y;
        this.color = c;
        this.v = v;
        this.range = range;
        this.element = document.createElement('span');
        this.element.style.opacity = 0;
        this.element.style.position = 'absolute';
        this.element.style.fontSize = '26px';
        this.element.style.color = `hsl(${Math.random() * 360 | 0},80%,50%)`;
        this.element.innerHTML = c;
        rainRef.current.appendChild(this.element);

        this.update = () => {
          if (this.y > 800) {
            this.y = 80 + Math.random() * 4;
            this.x = this.range[0] + Math.random() * this.range[1];
          }
          this.y += this.v.y;
          this.x += this.v.x;
          this.element.style.opacity = 1;
          this.element.style.transform = `translate3d(${this.x}px, ${this.y}px, 0px)`;
          this.element.style.webkitTransform = `translate3d(${this.x}px, ${this.y}px, 0px)`;
          this.element.style.mozTransform = `translate3d(${this.x}px, ${this.y}px, 0px)`;
        };
      }
    }

    for (let i = 0; i < 15; i++) {
      addCircle(
        i * 150,
        [10 + 0, 300],
        emoji[Math.floor(Math.random() * emoji.length)]
      );
      // Add more positions if needed as per your original code
    }

    const animate = () => {
      for (const circle of circles) {
        circle.update();
      }
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      circles.forEach(circle => {
        rainRef.current.removeChild(circle.element);
      });
    };
  }, []);

  return (
    <Container>
      <RainContainer ref={rainRef} />
    </Container>
  );
};

export default EmojiRain;