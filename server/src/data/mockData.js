const testData = [
 {  "id": 1,
    "name": "Apceros",
    "type": "small",
    "species": "herbivore",
    "description":"Herbivores that inhabit the Wildspire Waste. They've developed...",
    "elements": [],
    "ailments": [],
    "locations": [],
    "resistances": [],
    "weaknesses": [
        {
            "element": "thunder",
            "stars": 1,
            "condition": null
        }
    ],
    "rewards": [
        {
            "id": 1,
            "item": {
                "id":67,
                "name": "Raw Meat",
                "description": "Meat carved from a monster. Can be...",
                "rarity": 1,
                "carryLimit": 10,
                "value": 5,
            },
            "conditions": [
                {
                    "type": "carve",
                    "subtype": null,
                    "rank": "low",
                    "quantity": 1,
                    "chance": 100
                }
             ]
        }
    ]
 }
];

module.exports = testData