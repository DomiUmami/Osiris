import React, {useEffect, useState} from "react";
import "../styles/Cards.css";



export default function Burst({ hunt }) {
    const [imageUrl, setImageUrl] = useState(null);
    const [hunted, setHunted] = useState(null)

    const fallbackImage = "https://monsterhunterwiki.org/images/2/2b/MHWI-Question_Mark_Icon.png";
    const monnaName = hunt.name
    .toLowerCase()
    .replace(/\s+/g, "_") 
    .replace(/-+/g, "-")

    /*
    Links to broken monster renders
    Leshin - https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/leshen-large-monster-monster-hunter-world-wiki-guide-mhw.jpg
    */
    /*
    Links to broken icons
    https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World/mhwi-alatreon_icon.png
    */
   
    const base = "https://monsterhunterworld.wiki.fextralife.com/file/Monster-Hunter-World";
    const monnaRenders = [
      `${base}/mhw-${monnaName}_render.png`,
      `${base}/mhw-${monnaName}_render_001.png`,
      `${base}/mhw-${monnaName}_and_bristly_crake_render_001.png`,
      `${base}/mhwi-${monnaName}_render_001.png`,
      `${base}/mhgen-${monnaName}_render_001.png`,
      `${base}/mhw-${monnaName}_render_002_(1).png`,
      `${base}/gthumbnails/mhwi-${monnaName}_render_2.png`,
      `${base}/${monnaName}.png`,
      `${base}/${monnaName}s.png`,
      `${base}/mhw-${monnaName}.png`,
      `${base}/mhwi-${monnaName}.png`,
      `${base}/${monnaName}_mhw.png`,
      `${base}/${monnaName}-large-monster-monster-hunter-world-wiki-guide-mhw.jpg`,
    ];

    const monnaIcons = [
      `${base}/${monnaName}_icon.png`,
      `${base}/mhwi-${monnaName}_icon.png`,
      `${base}/mhw-${monnaName}_icon.png`,
      `${base}/mhw-${monnaName}_icon2.png`,
      `${base}/mhw-icono_${monnaName}.png`,
    ];

      useEffect(() => {
    let found = false;

    (async () => {
      for (const url of monnaIcons) {
        try {
          const res = await fetch(url, { method: "HEAD" });
          if (res.ok) {
            setImageUrl(url);
            found = true;
            break;
          }
        } catch {
          // ignore and continue
        }
      }
      if (!found) setImageUrl(fallbackImage);
    })();
  }, [hunt.name]);


  console.log(hunt)
  return (
    <div className="project-card">
              <img
          src={imageUrl}
          alt={`${hunt.name} Render`}
          width={2}
          height={2}
          style={{
            borderRadius: "8px",
            display: "flex",
            flexDirection: "center",
            marginBottom: "10px",
            backgroundColor: "rgba(255, 0, 0, 0)",
            padding: "4px",
          }}
        />
      
    </div>
  );
}