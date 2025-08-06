import React from "react";

const DeckGrid = ({ decks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-4">
      {decks.map((deck, idx) => (
        <div key={idx} className="border rounded-lg p-4 shadow">
          <h3 className="font-semibold mb-2">{deck.title}</h3>
          <div className="flex flex-wrap gap-2">
            {deck.cards.map((card) => (
              <span
                key={card}
                className="inline-block bg-gray-100 px-2 py-1 rounded text-sm"
              >
                {card}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeckGrid;
