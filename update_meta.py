"""
update_meta.py

This script updates the meta.json file with refreshed data for the ClashMeta.gg site.
It shuffles the deck order, updates win rates slightly to simulate meta shifts,
and rotates shop items. The script can be extended or connected to an API to
retrieve real‑time game data, but this offline version uses static logic.

Run this script daily via GitHub Actions or manually to keep the site content fresh.
"""

import json
import random
import datetime

# Define a pool of decks with base data
DECK_POOL = [
    {
        "name": "Hog Cycle 2.6",
        "range": "0–2000",
        "base_winrate": 58.9,
        "cards": ["Hog Rider", "Musketeer", "Cannon", "Ice Spirit", "Fireball"],
        "tips": "Use cheap cycle cards to apply constant pressure and defend efficiently. Save Musketeer and Cannon for air and tank threats."
    },
    {
        "name": "Log Bait",
        "range": "2000–4000",
        "base_winrate": 60.1,
        "cards": ["Goblin Barrel", "Princess", "Rocket", "Inferno Tower", "Goblin Gang"],
        "tips": "Force out your opponent's small spells with bait troops, then punish with Goblin Barrel when their log is out of cycle."
    },
    {
        "name": "PEKKA Bridge Spam",
        "range": "4000–6000",
        "base_winrate": 61.7,
        "cards": ["P.E.K.K.A", "Bandit", "Battle Ram", "Electro Wizard", "Minions"],
        "tips": "Apply dual‑lane pressure with Bandit and Battle Ram. Use P.E.K.K.A for heavy tank defence and counter‑push once your opponent overcommits."
    },
    {
        "name": "Royal Giant Lightning",
        "range": "6000+",
        "base_winrate": 63.3,
        "cards": ["Royal Giant", "Mother Witch", "Lightning", "Fisherman", "Phoenix"],
        "tips": "Control tempo with Royal Giant at the bridge. Use Fisherman to pull tanks off your tower, and punish pumps or buildings with Lightning."
    },
    {
        "name": "Miner Control",
        "range": "4000–6000",
        "base_winrate": 59.8,
        "cards": ["Miner", "Poison", "Bomb Tower", "Wall Breakers", "Skeletons"],
        "tips": "Chip away at towers with Miner and Wall Breakers. Defend efficiently using Bomb Tower and cheap cards, then counter‑push when you have a positive elixir trade."
    }
]

SHOP_POOL = [
    {"item": "Magical Chest", "price": "500 Gems"},
    {"item": "Rare Wild Card x20", "price": "120 Gems"},
    {"item": "Champion Token", "price": "250 Gems"},
    {"item": "Gold Crate", "price": "300 Gems"},
    {"item": "Epic Book of Cards", "price": "400 Gems"}
]

def generate_decks():
    """Return a shuffled list of decks with slight winrate variation."""
    decks = []
    pool = DECK_POOL[:]
    random.shuffle(pool)
    for deck in pool:
        # apply slight random winrate adjustment between -0.5 and +0.5
        delta = random.uniform(-0.5, 0.5)
        winrate = round(deck["base_winrate"] + delta, 1)
        decks.append({
            "name": deck["name"],
            "range": deck["range"],
            "winrate": winrate,
            "cards": deck["cards"],
            "tips": deck["tips"]
        })
    return decks


def generate_shop():
    """Return a random subset of shop items with expiry times."""
    offers = random.sample(SHOP_POOL, 3)
    shop = []
    # rotate expiry times: next 12 hours increments
    expires = ["12 hours left", "8 hours left", "4 hours left"]
    for item, expiry in zip(offers, expires):
        shop.append({
            "item": item["item"],
            "price": item["price"],
            "ends": expiry
        })
    return shop


def main():
    meta = {
        "decks": generate_decks(),
        "shop": generate_shop()
    }
    with open("meta.json", "w", encoding="utf-8") as f:
        json.dump(meta, f, indent=2)
    print(f"meta.json updated {datetime.datetime.utcnow().isoformat()}Z")


if __name__ == "__main__":
    main()