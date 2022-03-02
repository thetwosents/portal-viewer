const portals = [
  {
    "id": 1,
    "title": "Rosca's Island",
    "description": "The entry point to all metaverse growth functions.",
    "metrics": {
      "visits": 0,
      "rewards": 100,
    },
    "raid": {
      "id": 1,
      "title": "Pirates Cove Raid",
      "description": "A raid on the pirates cove",
    },
    "image": "https://i.natgeofe.com/k/f027ff62-8d64-49eb-8fb4-4bb79cf86166/redwood-forest_16x9.jpg?w=1200",
    "url": "https://google.com",
    "videoUrl": '/abstract.mp4',
  },
  {
    "id": 2,
    "title": "The Colosseum",
    "metrics": {
      "visits": 0,
      "rewards": 100,
    },
    "raid": {
      "id": 1,
      "title": "TCG Raid",
      "description": "A raid on the TCG game",
    },
    "description": "A Metaverse dedicated to Trading Card Games",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com",
    "videoUrl": 'https://vod-progressive.akamaized.net/exp=1646164410~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F2358%2F26%2F661794954%2F3042974316.mp4~hmac=900b29a971561eda3495aa3a9b4cf4eb15fa3f36a681dce1f3a091a9c9738e97/vimeo-prod-skyfire-std-us/01/2358/26/661794954/3042974316.mp4',
  }
]

const quests = [
  {
    "id": 1,
    "title": "Discord Server",
    "project": "Pirates Cove",
    "reward": 100,
    "steps": [
      {
        "id": 1,
        "title": "Create a Discord Server",
        "description": "Create a Discord Server",
        "requirements": [
          {
            "id": 1,
            "title": "Name should be Pirates Cove",
            "description": "Name should be Pirates Cove",
            "type": "string",
            "value": "Pirates Cove"
          },
          {
            "id": 2,
            "title": "Description should be A Metaverse dedicated to piracy",
            "description": "Description should be A Metaverse dedicated to piracy",
            "type": "string",
            "value": "A Metaverse dedicated to piracy"
          },
        ]
      },
      {
        "id": 2,
        "title": "Create a Discord Channel",
        "description": "Create a Discord Channel",
        "requirements": [
          {
            "id": 1,
            "title": "Name should be General",
            "description": "Name should be General",
            "type": "string",
            "value": "General"
          },
          {
            "id": 2,
            "title": "Description should be A Metaverse dedicated to piracy",
            "description": "Description should be A Metaverse dedicated to piracy",
            "type": "string",
            "value": "A Metaverse dedicated to piracy"
          },
        ]
      },
    ]

  }
]

const boosterPacks = [
  {
    "id": 1,
    "title": "Software",
    "description": "A booster pack dedicated to software",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 2,
    "title": "Hardware",
    "description": "A booster pack dedicated to hardware",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 3,
    "title": "Skills",
    "description": "A booster pack dedicated to skills",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 4,
    "title": "Languages",
    "description": "A booster pack dedicated to languages",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 5,
    "title": "Characters",
    "description": "A booster pack dedicated to characters",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 6,
    "title": "Locations",
    "description": "A booster pack dedicated to locations",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 7,
    "title": "Items",
    "description": "A booster pack dedicated to items",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 8,
    "title": "Resources",
    "description": "A booster pack dedicated to resources",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 9,
    "title": "Tools",
    "description": "A booster pack dedicated to tools",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 10,
    "title": "Metrics",
    "description": "A booster pack dedicated to metrics",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 11,
    "title": "Workflows",
    "description": "A booster pack dedicated to workflows",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 12,
    "title": "Sequences",
    "description": "A booster pack dedicated to sequences",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"

  },
  {
    "id": 13,
    "title": "Strategies",
    "description": "A booster pack dedicated to strategies",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 14,
    "title": "Actions",
    "description": "A booster pack dedicated to actions",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 15,
    "title": "Triggers",
    "description": "A booster pack dedicated to triggers",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 16,
    "title": "Events",
    "description": "A booster pack dedicated to events",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 17,
    "title": "User Stories",
    "description": "A booster pack dedicated to user stories",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 18,
    "title": "Products",
    "description": "A booster pack dedicated to products",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 19,
    "title": "Projects",
    "description": "A booster pack dedicated to projects",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 20,
    "title": "Tasks",
    "description": "A booster pack dedicated to tasks",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
  {
    "id": 21,
    "title": "Roles",
    "description": "A booster pack dedicated to roles",
    "image": "https://www.nps.gov/subjects/glaciers/images/KEFJ_Bear_Glacier_NPS_Photo_crop.jpg",
    "url": "https://google.com"
  },
]



module.exports = {
  portals,
  quests,
  boosterPacks,
}