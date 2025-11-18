import React, { useEffect, useState } from "react";
import Burst from "./Burst";

export default function MonnaGenerator({ onHunted }) {
  const [loading, setLoading] = useState(true);
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const res = await fetch("https://mhw-db.com/monsters");
        const data = await res.json();

        const sorted = data.sort((a, b) => a.id - b.id);
        setMonsters(sorted);
      } catch (error) {
        console.error("Error locating Monsters:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMonsters();
  }, []);

  if (loading) return <p>Locating Monsters...</p>;
  if (!monsters.length) return <p>No Monsters found.</p>;

  return (
    <div className="monster-list">
      {monsters.map((monster) => (
        <Burst
          key={monster.id}
          hunt={{
            name: monster.name,
            description: monster.description,
          }}
          onClick={() => onHunted(monster)}
        />
      ))}
    </div>
  );
}
