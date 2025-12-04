import React, { useEffect, useState } from "react";
import "../styles/Cards.css";

/*
Check Links
https://monsterhunterwilds.wiki.fextralife.com/file/Monster-Hunter-Wilds/mhwilds-lala_barina_render_001.png
https://monsterhunterwilds.wiki.fextralife.com/file/Monster-Hunter-Wilds/mhwilds-arkveld_render_001.png
https://monsterhunterwilds.wiki.fextralife.com/file/Monster-Hunter-Wilds/mhwilds-ajarakan_render_001.png
https://monsterhunterwilds.wiki.fextralife.com/file/Monster-Hunter-Wilds/congalala_large_monster_monsters_mhwilds_wiki_guide300px.png
https://monsterhunterwilds.wiki.fextralife.com/file/Monster-Hunter-Wilds/chatacabra-large-monster-mhwilds-wiki-guide-300px.png
https://monsterhunterwilds.wiki.fextralife.com/file/Monster-Hunter-Wilds/mhwilds-guardian_rathalos_custom_render_001.png
*/

export default function PrimaryAmmo({ monster }) {
  const [imageUrl, setImageUrl] = useState(null);

  const fallbackImage =
    "https://monsterhunterwiki.org/images/2/2b/MHWI-Question_Mark_Icon.png";

const specialNames = {
  "Omega Planetes": "omega-planetes", // special case
};

const monsterName = specialNames[monster.name]
  || monster.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")          // remove accents
      .replace(/[^a-z0-9\s\-'’]/g, "")         // keep letters, numbers, spaces, hyphens, apostrophes
      .trim()
      .replace(/\s+/g, "_")                     // spaces → underscores
      .replace(/-+/g, "-");                     // multiple hyphens → single hyphen


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
    `https://monsterhunterwilds.wiki.fextralife.com/file/Monster-Hunter-Wilds/mhwilds-${monsterName}_render_001.png`,
    `https://monsterhunterwilds.wiki.fextralife.com/file/Monster-Hunter-Wilds/${monsterName}_monsterhunterwilds_wiki_guide300px.png`,
    `https://static.wikia.nocookie.net/monsterhunter/images/6/6d/MHWilds-${monsterName}_Custom_Render_001.png/revision/latest?cb=20250413160814`,
    `https://monsterhunterwilds.wiki.fextralife.com/${monsterName}`,
  ];

  useEffect(() => {
    let found = false;
    (async () => {
      for (const url of renderUrls) {
        try {
          const res = await fetch(url);
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
        loading="lazy"
         onError={e => {
                e.target.onerror = null;
                e.target.src = fallbackImage;
              }}
        />
      <h1 className="monster-name">{monster.name}</h1>
      <p className="monster-description">{monster.description}</p>
    </div>
  );
}


