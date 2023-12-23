import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const RainContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

const EmojiRain = () => {
  const rainRef = useRef(null);

  useEffect(() => {
    const emoji = ['🌽', '🍇', '🍌', '🍒', '🍕', '🍷', '🍭', '💖', '💩', '🐷', '🐸', '🐳', '🎃', '🎾', '🌈', '🍦', '💁', '🔥', '😁', '😱', '🌴', '👏', '💃'];
    const circles = [];

    const addCircle = (delay, range, color) => {
        setTimeout(() => {
          const c = new Circle(
            Math.random() * window.innerWidth, // Random x-coordinate across the entire width
            80 + Math.random() * 4,
            color,
            {
              x: -0.15 + Math.random() * 0.3,
              y: 1 + Math.random() * 1,
            },
            range
          );
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
            if (this.y > window.innerHeight) {
              this.y = 80 + Math.random() * 4;
              this.x = Math.random() * window.innerWidth;
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
      <RainContainer ref={rainRef} />
  );
};

export default EmojiRain;