import React from "react";
import CardImage from "./CardImage";

const DeckGrid = ({ decks }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 p-4">
      {decks.map((deck, idx) => (
        <div key={idx} className="border border-zinc-700 bg-zinc-800 rounded-lg p-4 shadow-lg text-white">
          <h3 className="text-lg font-bold mb-2">{deck.title}</h3>
          <p className="text-sm italic mb-3">{deck.strategy || "Use this deck to apply pressure and counter-push."}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {deck.cards.map((card) => (
              <CardImage key={card} name={card} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DeckGrid;
