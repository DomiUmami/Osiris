export const testData = [
  {
    "id": 60,
    "type": "large",
    "species": "fanged wyvern",
    "elements": ["thunder"],
    "name": "Zinogre",
    "description": "Lightning courses through the fur and unique plating of this fanged wyvern. It is most deadly in its supercharged state.",
    "ailments": [
      {
        "id": 11,
        "name": "Thunderblight",
        "description": "Thunderblight increases the chance of being stunned.",
        "recovery": {
          "actions": ["dodge"],
          "items": [
            {
              "id": 7,
              "rarity": 2,
              "value": 120,
              "carryLimit": 10,
              "name": "Nulberry",
              "description": "A mysterious berry that cures various blights."
            }
          ]
        },
        "protection": { "skills": [], "items": [] }
      }
    ],
    "locations": [
      { "id": 1, "zoneCount": 17, "name": "Ancient Forest" },
      { "id": 2, "zoneCount": 15, "name": "Coral Highlands" },
      { "id": 13, "zoneCount": 15, "name": "Guiding Lands" }
    ],
    "resistances": [{ "element": "thunder", "condition": null }],
    "weaknesses": [
      { "element": "ice", "stars": 3, "condition": null },
      { "element": "water", "stars": 2, "condition": null },
      { "element": "fire", "stars": 1, "condition": null },
      { "element": "dragon", "stars": 1, "condition": null }
    ],
    "rewards": []
  },
  {
    "id": 5,
    "type": "small",
    "species": "herbivore",
    "elements": [],
    "name": "Mosswine",
    "description": "Mosswine are known for their excellent sense of smell, and are often found foraging for fungi. If you're hunting for mushrooms, follow the Mosswine to the motherlode.",
    "ailments": [],
    "locations": [
      { "id": 1, "zoneCount": 17, "name": "Ancient Forest" },
      { "id": 3, "zoneCount": 15, "name": "Wildspire Waste" },
      { "id": 4, "zoneCount": 16, "name": "Rotten Vale" }
    ],
    "resistances": [],
    "weaknesses": [
      { "element": "fire", "stars": 1, "condition": null },
      { "element": "water", "stars": 1, "condition": null },
      { "element": "thunder", "stars": 1, "condition": null },
      { "element": "ice", "stars": 1, "condition": null }
    ],
    "rewards": []
  },
  {
    "id": 9,
    "type": "small",
    "species": "fish",
    "elements": [],
    "name": "Gajau",
    "description": "Vicious piscine that form groups to defend their territory from intruders. Be sure not to venture too closely to their habitat!",
    "ailments": [],
    "locations": [
      { "id": 1, "zoneCount": 17, "name": "Ancient Forest" },
      { "id": 3, "zoneCount": 15, "name": "Wildspire Waste" }
    ],
    "resistances": [],
    "weaknesses": [
      { "element": "fire", "stars": 1, "condition": null },
      { "element": "thunder", "stars": 1, "condition": null }
    ],
    "rewards": []
  }
];
