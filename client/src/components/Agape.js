import React, { useEffect, useState } from "react";
import Burst from "./Burst";

export default function MonnaGenerator({ onHunted }) {
  const [loading, setLoading] = useState(true);
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const res1 = await fetch("https://mhw-db.com/monsters");
        const res2 = await fetch("https://wilds.mhdb.io/en/monsters");

        const data1 = await res1.json();
        const data2 = await res2.json();

        // --- 1. Make IDs unique ---
        const usedIds = new Set(data1.map(m => m.id));

        const fixedData2 = data2.map(m => {
          let newId = m.id;

          while (usedIds.has(newId)) newId++;
          usedIds.add(newId);

          return { ...m, id: newId };
        });

        // --- 2. Merge & sort ---
        const merged = [...data1, ...fixedData2].sort((a, b) => a.id - b.id);

        // --- 3. Remove duplicate monster names ---
        const seenNames = new Set();
        const unique = merged.filter(m => {
          if (seenNames.has(m.name)) return false;
          seenNames.add(m.name);
          return true;
        });

        setMonsters(unique);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchMonsters();
  }, []);

  if (loading) return <p>Locating Monsters...</p>;
  if (!monsters.length) return <p>No Monsters found.</p>;

  return (
    <div className="card-scroll-container">
      {monsters.map(monster => (
        <Burst
          key={monster.id} // FIXED
          hunt={{
            name: monster.name,
            description: monster.description || "No description available.",
          }}
          onClick={() => onHunted(monster)}
        />
      ))}
    </div>
  );
}
