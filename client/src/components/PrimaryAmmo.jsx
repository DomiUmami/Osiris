import React, { useEffect, useState } from "react";
import "../styles/Cards.css";

export default function PrimaryAmmo({ monster }) {
  const [imageUrl, setImageUrl] = useState(null);

  const fallbackImage =
    "https://monsterhunterwiki.org/images/2/2b/MHWI-Question_Mark_Icon.png";

  const monsterName = monster.name
    .toLowerCase()
    .replace(/\s+/g, "_")
    .replace(/-+/g, "-");

  const base =
    "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World";

  const renderUrls = [
    `${base}/mhw-${monsterName}_render.png`,
    `${base}/mhw-${monsterName}_render_001.png`,
    `${base}/mhw-${monsterName}_and_bristly_crake_render_001.png`,
    `${base}/mhwi-${monsterName}_render_001.png`,
    `${base}/mhgen-${monsterName}_render_001.png`,
    `${base}/mhw-${monsterName}_render_002_(1).png`,
    `${base}/gthumbnails/mhwi-${monsterName}_render_2.png`,
    `${base}/${monsterName}.png`,
    `${base}/${monsterName}s.png`,
    `${base}/mhw-${monsterName}.png`,
    `${base}/mhwi-${monsterName}.png`,
    `${base}/${monsterName}_mhw.png`,
    `${base}/${monsterName}-large-monster-monster-hunter-world-wiki-guide-mhw.jpg`,
  ];

  useEffect(() => {
    let found = false;
    (async () => {
      for (const url of renderUrls) {
        try {
          const res = await fetch(url, { method: "HEAD" });
          if (res.ok) {
            setImageUrl(url);
            found = true;
            break;
          }
        } catch {}
      }
      if (!found) setImageUrl(fallbackImage);
    })();
  }, [monster.name]);

  return (
    <div className="monster-profile">
      <img className="img"
        src={imageUrl}
        alt={monster.name}
        />
      <h1 className="monster-name">{monster.name}</h1>
      <p className="monster-description">{monster.description}</p>
    </div>
  );
}


