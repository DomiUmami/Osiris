import React, { useEffect, useState } from "react";
import Burst from "./Burst";

export default function MonnaGenerator({ onHunted }) {
  const [loading, setLoading] = useState(true);
  const [monsters, setMonsters] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    let isMounted = true; // avoid state updates if component unmounts

    const fetchMonsters = async () => {
      try {
        const res = await fetch("/api/saint");
        if (!res.ok) throw new Error(`Failed to fetch monsters: ${res.status}`);
        const data = await res.json();

        if (isMounted) setMonsters(data); // only update if component still mounted
      } catch (err) {
        console.error("Monster fetch error:", err);
        if (isMounted) setError(err.message || "Unknown error");
      } finally {
        if (isMounted) setLoading(false);
      }
    };

    fetchMonsters();

    return () => {
      isMounted = false; // cleanup to prevent memory leaks
    };
  }, []);

  if (loading) return <p>Locating Monsters...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
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
