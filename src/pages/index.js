import React, { useState, useEffect } from "react";
import TrophySelector from "../components/TrophySelector";
import DeckGrid from "../components/DeckGrid";
import Shop from "../components/Shop";
import data from "../../meta.json";

const Home = () => {
  const [trophyRange, setTrophyRange] = useState("7000+");
  const [filteredDecks, setFilteredDecks] = useState([]);

  useEffect(() => {
    const decks = data.decks.filter((d) => d.trophy === trophyRange);
    setFilteredDecks(decks);
  }, [trophyRange]);

  return (
    <main className="max-w-6xl mx-auto px-4">
      <h1 className="text-4xl font-bold py-6 text-center text-white">ClashMeta</h1>
      <TrophySelector current={trophyRange} onChange={setTrophyRange} />
      <DeckGrid decks={filteredDecks} />
      <Shop items={data.shop} />
    </main>
  );
};

export default Home;
