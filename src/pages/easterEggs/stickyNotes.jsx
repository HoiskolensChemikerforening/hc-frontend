import React from 'react';
import styled from 'styled-components';

const StickyNotes = ({ texts }) => {

    const getRandomPosition = () => {
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        return { x, y };
      };

    const getRandomColor = () => {
        const colors = [
          'lavender',
          'lavenderblush',
          'lightcyan',
          'lightpink',
          'mistyrose',
          'mintcream',
          'pink',
          'thistle',
          'lightpurple',
          'lightgreen',
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      };

    const notes = texts.map((text, index) => ({
        id: index,
        text,
        position: getRandomPosition(),
        color: getRandomColor(),
      }));

  return (
    <>
      {notes.map((note) => (
        <StickyNote
          key={note.id}
          style={{ top: `${note.position.y}px`, left: `${note.position.x}px` }}
          color={note.color}
        >
          {note.text}
        </StickyNote>
      ))}
    </>
  );
};

export default StickyNotes;

const StickyNote = styled.div`
  width: 150px;
  height: 100px;
  padding: 10px;
  background-color: ${(props) => props.color || 'yellow'};
  position: absolute;
  border: 2px solid #333;
  border-radius: 5px;
`;