import React, { useRef } from 'react';

interface Card {
  id: number;
  content: React.ReactNode;
}

interface StackedCardsProps {
  cards: Card[];
  stickyPosition?: number; // Default will be 150px
}

const StackedCards: React.FC<StackedCardsProps> = ({ cards, stickyPosition = 150 }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div ref={containerRef} className="stacked-cards">
      {cards.map((card, index) => (
        <div
          key={card.id}
          className={`card ${index === cards.length - 1 ? 'last-card' : ''}`}
          style={{
            top: `${stickyPosition}px`,
            zIndex: cards.length + index,
          }}
        >
          {card.content}
        </div>
      ))}
      {/* Extra spacing for full overlap */}
      <div className="scroll-space" />
    </div>
  );
};

export default StackedCards;
