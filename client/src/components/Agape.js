import React, { useEffect, useState } from "react";
import Burst from "./Burst";

export default function MonnaGenerator({ onHunted }) {
  const [loading, setLoading] = useState(true);
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const [res1, res2] = await Promise.all([
          fetch("https://mhw-db.com/monsters"),
          fetch("https://wilds.mhdb.io/en/monsters")
        ]);

        if (!res1.ok || !res2.ok) {
          throw new Error("Failed to fetch monsters");
        }

        const [data1, data2] = await Promise.all([res1.json(), res2.json()]);

        // --- 1. Track IDs from data1 ---
        const usedIds = new Set(data1.map(m => m.id));

        // --- 2. Normalize and resolve ID collisions from data2 ---
        const fixedData2 = data2.map(m => {
          let newId = Number(m.id) || 0;

          while (usedIds.has(newId)) {
            newId++;
          }

          usedIds.add(newId);
          return { ...m, id: newId };
        });

        // --- 3. Merge and sort ---
        const merged = [...data1, ...fixedData2].sort((a, b) => a.id - b.id);

        // --- 4. Remove duplicate monster names ---
        const seenNames = new Set();
        const unique = merged.filter(m => {
          if (seenNames.has(m.name)) return false;
          seenNames.add(m.name);
          return true;
        });

        setMonsters(unique);
      } catch (err) {
        console.error("Monster fetch error:", err);
        setMonsters([]); // avoid undefined state
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
          key={monster.id}
          hunt={{
            name: monster.name,
            description: monster.description || "No description available."
          }}
          onClick={() => onHunted(monster)}
        />
      ))}
    </div>
  );
}
