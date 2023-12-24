import React, { useState } from 'react';
import styled from 'styled-components';
import { Button as BaseButton } from "../../components/Button";
import { P } from "../../components/Text";

const Flashcard = ({ cards }) => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);

  const handleNextCard = () => {
    setCurrentCardIndex((prevIndex) => Math.min(prevIndex + 1, cards.length - 1));
  };

  const handlePrevCard = () => {
    setCurrentCardIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  return (
    <FlashcardContainer>
      <FlashcardBox>
      <CardContent>
          {/* Split text by '\n' and map each part to a separate div */}
          {cards[currentCardIndex].split('\n').map((line, index) => (
            <div key={index}>{line}</div>
          ))}
        </CardContent>
        <Navigation>
          <StyledButton secondary type="button" onClick={handlePrevCard} disabled={currentCardIndex === 0}>
            Forrige
          </StyledButton>
          <CardCounter>
            {currentCardIndex + 1} of {cards.length}
          </CardCounter>
          <StyledButton secondary type="button" onClick={handleNextCard} disabled={currentCardIndex === cards.length - 1}>
            Neste
          </StyledButton>
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
