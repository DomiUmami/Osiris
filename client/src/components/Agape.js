//Setting up MH Cards built off of mhw-db
import React, { useEffect, useState } from "react";
import Burst from "./Burst";


export default function MonnaGenerator() {
  const [loading, setLoading] = useState(true);
  const [monsters, setMonsters] = useState([]);
  

  /*All Monsters available*/
  useEffect(() => {
    const fetchMonsters = async () => {
      try {
        const res = await fetch("https://mhw-db.com/monsters");
        const data = await res.json();

        // Optional: sort alphabetically or by ID
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

  /*Singular Monster load*/
  /*
  useEffect(() => {
    const fetchMonster = async () => {
      try {
        const res = await fetch(`https://mhw-db.com/monsters/${id}`);
        const data = await res.json();
        setHunt(data);
      } catch (error) {
        console.error("Error locating Monster:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchMonster();
  }, [id]);
  */
  

  if (loading) return <p>Locating Monster...</p>;
  if (!monsters.length) return <p>No Monsters found.</p>;

  return (
    <div>
      <ul>
        {monsters.map((monster) => (
          <Burst key={monster.id}
           hunt={{
            name: monster.name,
            description: monster.description || "No description provided.",

           }}
          />
        ))}
      </ul>
    </div>
  );
}