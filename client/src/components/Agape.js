import React, { useEffect, useState } from "react";
import Burst from "./Burst";


export default function MonnaGenerator({ onHunted }) {
  const [loading, setLoading] = useState(true);
  const [monsters, setMonsters] = useState([]);

useEffect(() => {
  let isMounted = true;

  const fetchMonsters = async () => {
    try {
      const res = await fetch("/api/saint");
      if (!res.ok) throw new Error("Failed to fetch monsters");
      const data = await res.json();

      if (isMounted) {
        setMonsters(data);
        setLoading(false);
        console.log("these are being fetched")
      }
    } catch (err) {
      console.error("Monster fetch error:", err);
      if (isMounted) setLoading(false);
    }
  };

  // Initial fetch
  fetchMonsters();

  // 🔁 Poll every 15 seconds
  const interval = setInterval(fetchMonsters, 15000);

  return () => {
    isMounted = false;
    clearInterval(interval);
  };
}, []);


  if (loading) return <p>Locating Monsters...</p>;
  if (!monsters.length) return <p>No Monsters found.</p>;

  return (
    <div className="card-scroll-container">
      {monsters.map((monster) => (
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
