import React, { useState, useEffect } from "react";
import TrophySelector from "../components/TrophySelector";
import DeckGrid from "../components/DeckGrid";
import data from "../../meta.json";

const Home = () => {
  const [trophyRange, setTrophyRange] = useState("7000+");
  const [filteredDecks, setFilteredDecks] = useState([]);

  useEffect(() => {
    const decks = data.decks.filter((d) => d.trophy === trophyRange);
    setFilteredDecks(decks);
  }, [trophyRange]);

  return (
    <main className="max-w-5xl mx-auto">
      <h1 className="text-3xl font-bold p-4 text-center">ClashMeta</h1>
      <TrophySelector current={trophyRange} onChange={setTrophyRange} />
      <DeckGrid decks={filteredDecks} />
    </main>
  );
};

export default Home;
