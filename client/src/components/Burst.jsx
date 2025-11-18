import React, {useEffect, useState} from "react";
import "../styles/Cards.css";
import StygianZinogreIcon from "../components/MHWI-Stygian_Zinogre_Icon.webp";




export default function Burst({ hunt, onClick }) {
    const [imageUrl, setImageUrl] = useState(null);
    

    const fallbackImage = "https://monsterhunterwiki.org/images/2/2b/MHWI-Question_Mark_Icon.png";
    const monnaName = hunt.name
    .toLowerCase()
    .replace(/\s+/g, "_") 
    .replace(/-+/g, "-")

    /*
    Links to broken monster renders
    
    */
    /*
    Links to broken icons
    https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhwi-alatreon_icon.png
    */
   
    const base = "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World";


    const monnaIcons = [
      `${base}/${monnaName}_icon.png`,
      `${base}/mhwi-${monnaName}_icon.png`,
      `${base}/mhw-${monnaName}_icon.png`,
      `${base}/mhw-${monnaName}_icon2.png`,
      `${base}/mhw-icono_${monnaName}.png`,
      `https://static.wikia.nocookie.net/monsterhunter/images/f/f3/MHWI-${monnaName}_Icon.png/revision/latest?cb=20210724012446`,
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
        const res = await fetch(url, { method: "HEAD" });
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
    <div className="project-card" onClick={onClick}>
      
              <img 
          src={imageUrl}
          alt={`${hunt.name} Render`}
          width={2}
          height={2}
          />

      
    </div>
  );
}