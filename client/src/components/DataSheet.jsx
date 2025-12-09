import React, { useEffect, useState } from "react";

export default function MonsterDataSheet() {
  const [monsters, setMonsters] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/api/monsters");
      const data = await res.json();
      setMonsters(data);
    })();
  }, []);

  const updateField = (id, field, value) => {
    setMonsters(prev =>
      prev.map(m => (m.id === id ? { ...m, [field]: value } : m))
    );
  };

  const saveMonster = async (monster) => {
    await fetch(`/api/monsters/${monster.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(monster)
    });
    alert("Saved!");
  };

  return (
    <div>
      <h2>Monster Data Sheet</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Species</th>
            <th>Type</th>
            <th>Description</th>
            <th>Edit</th>
          </tr>
        </thead>

        <tbody>
          {monsters.map(mon => (
            <tr key={mon.id}>
              <td>
                <input
                  value={mon.name}
                  onChange={e => updateField(mon.id, "name", e.target.value)}
                />
              </td>

              <td>
                <input
                  value={mon.species}
                  onChange={e => updateField(mon.id, "species", e.target.value)}
                />
              </td>

              <td>
                <input
                  value={mon.type}
                  onChange={e => updateField(mon.id, "type", e.target.value)}
                />
              </td>

              <td>
                <textarea
                  value={mon.description}
                  onChange={e =>
                    updateField(mon.id, "description", e.target.value)
                  }
                />
              </td>

              <td>
                <button onClick={() => saveMonster(mon)}>Save</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
