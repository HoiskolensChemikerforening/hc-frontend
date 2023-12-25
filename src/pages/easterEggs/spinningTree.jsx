import React from 'react';
import styled, { keyframes } from 'styled-components';

const emojis = ['🎄', '🌟', '❄️', '🎁', '🔔', '🦌', '🎅'];

// This does not work and I could not get it to spin like a tree in a spiral:(

const spin = keyframes`
  0% {
    transform: rotateY(0deg);
  }
  100% {
    transform: rotateY(360deg);
  }
`;

const SpinningTreeContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  perspective: 800px;
`;

const Tree = styled.div`
  font-size: 2em;
  position: relative;
  text-align: center;
  transform-style: preserve-3d;
  animation: ${spin} 20s linear infinite;
  width: 12em; /* Adjust the size of the tree */
  height: 12em; /* Adjust the size of the tree */
`;

const Layer = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-origin: 50% 100%;
`;

const CircleBase = styled.div`
  display: flex;
  flex-wrap: wrap;
  position: absolute;
  width: 100%;
  height: 100%;
  transform: translateY(50%);
`;

const CircleItem = styled.span`
  font-size: 2em;
`;

export const SpinningTree = () => {
  return (
    <SpinningTreeContainer>
      <Tree>
        {emojis.map((emoji, index) => (
          <Layer
            key={index}
            style={{
              transform: `rotateY(${(index / emojis.length) * 360}deg) translateZ(${(emojis.length - index) * 4}px)`,
            }}
          >
            {Array(index + 1)
              .fill()
              .map((_, i) => (
                <CircleBase
                  key={i}
                  style={{
                    transform: `rotate(${(360 / (index + 1)) * i}deg) translateZ(2em)`,
                  }}
                >
                  <CircleItem>{emoji}</CircleItem>
                </CircleBase>
              ))}
          </Layer>
        ))}
      </Tree>
    </SpinningTreeContainer>
  );
};
