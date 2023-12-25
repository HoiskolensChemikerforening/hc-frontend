import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button as BaseButton } from "../../components/Button";
import { P } from "../../components/Text";

const Flashcard = ({ frontCards, backCards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [nextCardTimeout, setNextCardTimeout] = useState(null);
  const [disabledButton, setDisabledButton] = useState(false);

  useEffect(() => {
    // Clear the timeout when the component unmounts or the current card index changes
    return () => clearTimeout(nextCardTimeout);
  }, [currentCardIndex]);

  const handleNextCard = (e) => {
    if (currentCardIndex === frontCards.length - 1) {
      setIsFlipped(true); // Keep it flipped
      setDisabledButton(true);
    } else {
      setIsFlipped(true); // Flip the card
      // Set a timeout to flip to the next card after 2 seconds
      const timeoutId = setTimeout(() => {
        setCurrentCardIndex((prevIndex) => Math.min(prevIndex + 1, frontCards.length - 1));
        setIsFlipped(false); // Unflip the card when moving to the next card
      }, 2000);
      // Save the timeout ID
      setNextCardTimeout(timeoutId);
    }
  };

  const handlePrevCard = (e) => {
    e.stopPropagation(); // Stop the click event from propagating to the card
    setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <FlashcardContainer>
      <FlashcardBox isFlipped={isFlipped} disabled={disabledButton}>
        <CardContent>
            {isFlipped ? (
                // Content to show on the back of the card when flipped, text will be splitted by '\n'
                backCards[currentCardIndex].split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                ))
                ) : (
                // Content to show on the front of the card, text will be splitted by '\n'
                frontCards[currentCardIndex].split('\n').map((line, index) => (
                    <div key={index}>{line}</div>
                ))
                )}
        </CardContent>
        <Navigation>
          <StyledButton secondary type="button" onClick={(e) => handlePrevCard(e)} disabled={currentCardIndex === 0}>
            Forrige
          </StyledButton>
          <CardCounter>
            {currentCardIndex + 1} of {frontCards.length}
          </CardCounter>
          {disabledButton ? (
          <StyledButton secondary type="button" disabled={currentCardIndex === frontCards.length - 1}>
            Neste
          </StyledButton>
          ) : (
            <StyledButton secondary type="button" onClick={(e) => handleNextCard(e)}>
            Neste
          </StyledButton>
          )}
        </Navigation>
      </FlashcardBox>
    </FlashcardContainer>
  );
};

export default Flashcard;

const FlashcardContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 10px;
`;

const FlashcardBox = styled.div`
  width: 500px;
  padding: 20px;
  border: 2px solid #333;
  border-radius: 10px;
  background-color: #FDF7C3;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transform-style: preserve-3d; /* Enable 3D transforms */
  transition: transform 1s; /* Add a transition for smooth flip effect */
  transform: ${({ isFlipped }) => (isFlipped ? 'rotateY(360deg)' : 'rotateY(0deg)')}; /* Apply the flip effect */
`;

const CardContent = styled(P)`
  text-align: center;
  font-size: 16px;
`;

const Navigation = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 20px;
`;

const StyledButton = styled(BaseButton)`
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

const CardCounter = styled.div`
font-size: 14px;
color: #777;
`;
