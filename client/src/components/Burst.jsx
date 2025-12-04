import React, { useEffect, useState } from "react";
import "../styles/Cards.css";
import StygianZinogreIcon from "../components/MHWI-Stygian_Zinogre_Icon.webp";


const fallbackImage =
  "https://monsterhunterwiki.org/images/2/2b/MHWI-Question_Mark_Icon.png";

export default function Burst({ hunt, onClick }) {
  const [imageUrl, setImageUrl] = useState(fallbackImage);

const specialNames = {
  "Omega Planetes": "omega-planetes", // special case
};

const monnaName = specialNames[hunt.name]
  || hunt.name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")          // remove accents
      .replace(/[^a-z0-9\s\-'’]/g, "")         // keep letters, numbers, spaces, hyphens, apostrophes
      .trim()
      .replace(/\s+/g, "_")                     // spaces → underscores
      .replace(/-+/g, "-");                     // multiple hyphens → single hyphen

  const base =
    "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World";

  const monnaIcons = [
    `${base}/${monnaName}_icon.png`,
    `${base}/mhwi-${monnaName}_icon.png`,
    `${base}/mhw-${monnaName}_icon.png`,
    `${base}/mhw-${monnaName}_icon2.png`,
    `${base}/mhw-icono_${monnaName}.png`,
    `https://monsterhunterwiki.org/images/8/8b/MHWilds-${monnaName}_Icon.webp?20250304093442`,
    `https://static.wikia.nocookie.net/monsterhunter/images/f/f3/MHWI-${monnaName}_Icon.png/revision/latest?cb=20210724012446`,
    `https://monsterhunterwilds.wiki.fextralife.com/file/Monster-Hunter-Wilds/${monnaName}_monsters_mhwilds_wiki_guide200px.png`,
    `https://monsterhunterwilds.wiki.fextralife.com/file/Monster-Hunter-Wilds/${monnaName}-large-monster-mhwilds-wiki-guide-200px.png`,
    `https://monsterhunterwilds.wiki.fextralife.com/file/Monster-Hunter-Wilds/${monnaName}-icon-large-monster-mhwilds-wiki-guide-200px.png`,
  ];



  
  useEffect(() => {
  const fetchImage = async () => {
    // Special case for Stygian Zinogre
    if (hunt.name === "Stygian Zinogre") {
      setImageUrl(
       StygianZinogreIcon
      );
      return; // stop the loop completely
    }

    // Otherwise, try the normal icons
    for (const url of monnaIcons) {
      try {
        const res = await fetch(url);
        if (res.ok) {
          setImageUrl(url);
          return;
        }
      } catch {
        // ignore
      }
    }
    // fallback if none work
    setImageUrl(fallbackImage);
  };

  fetchImage();
}, [hunt.name]);
  


  return (
    <div className="card-scroll-container">
      <div className="project-card" onClick={onClick}>
        <img
          src={imageUrl}
          alt={`${hunt.name} Icon`}
          loading="lazy"
          width={48}
          height={48}
        />
      </div>
    </div>
  );
}
