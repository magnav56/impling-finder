// Approximate bounding boxes for named areas of the OSRS map, in game tile
// coordinates. Checked in order, so more specific areas must come before the
// larger regions that contain them.
interface Area {
  name: string;
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

const AREAS: Area[] = [
  { name: 'Puro-Puro', x1: 2557, x2: 2627, y1: 4287, y2: 4353 },
  { name: 'Zanaris', x1: 2370, x2: 2500, y1: 4400, y2: 4480 },
  { name: 'Prifddinas', x1: 3200, x2: 3330, y1: 5950, y2: 6150 },

  // Misthalin & Asgarnia
  { name: 'Lumbridge', x1: 3200, x2: 3260, y1: 3200, y2: 3260 },
  { name: 'Lumbridge Swamp', x1: 3135, x2: 3260, y1: 3140, y2: 3200 },
  { name: "Wizards' Tower", x1: 3090, x2: 3125, y1: 3140, y2: 3175 },
  { name: 'Draynor Village', x1: 3075, x2: 3125, y1: 3225, y2: 3285 },
  { name: 'Draynor Manor', x1: 3080, x2: 3130, y1: 3325, y2: 3380 },
  { name: 'Grand Exchange', x1: 3140, x2: 3190, y1: 3465, y2: 3515 },
  { name: 'Varrock', x1: 3175, x2: 3290, y1: 3375, y2: 3505 },
  { name: 'Barbarian Village', x1: 3070, x2: 3100, y1: 3400, y2: 3445 },
  { name: 'Edgeville', x1: 3075, x2: 3125, y1: 3465, y2: 3520 },
  { name: 'Al Kharid', x1: 3265, x2: 3330, y1: 3135, y2: 3215 },
  { name: 'Port Sarim', x1: 3010, x2: 3065, y1: 3170, y2: 3265 },
  { name: 'Rimmington', x1: 2930, x2: 2990, y1: 3190, y2: 3235 },
  { name: 'Falador', x1: 2935, x2: 3065, y1: 3305, y2: 3395 },
  { name: 'Taverley', x1: 2870, x2: 2940, y1: 3410, y2: 3490 },
  { name: 'Burthorpe', x1: 2880, x2: 2940, y1: 3520, y2: 3580 },
  { name: 'Entrana', x1: 2800, x2: 2870, y1: 3320, y2: 3390 },
  { name: 'Crandor', x1: 2820, x2: 2870, y1: 3220, y2: 3310 },

  // Kandarin
  { name: 'Catherby', x1: 2780, x2: 2830, y1: 3410, y2: 3460 },
  { name: "Seers' Village", x1: 2690, x2: 2750, y1: 3460, y2: 3500 },
  { name: 'Camelot', x1: 2740, x2: 2780, y1: 3470, y2: 3520 },
  { name: 'East Ardougne', x1: 2560, x2: 2700, y1: 3255, y2: 3340 },
  { name: 'West Ardougne', x1: 2430, x2: 2560, y1: 3270, y2: 3340 },
  { name: 'Yanille', x1: 2530, x2: 2620, y1: 3070, y2: 3110 },
  { name: 'Castle Wars', x1: 2430, x2: 2460, y1: 3080, y2: 3110 },
  { name: 'Tree Gnome Stronghold', x1: 2380, x2: 2500, y1: 3380, y2: 3520 },
  { name: 'Tree Gnome Village', x1: 2500, x2: 2560, y1: 3140, y2: 3190 },
  { name: 'Feldip Hills', x1: 2480, x2: 2640, y1: 2850, y2: 3000 },

  // Fremennik & islands
  { name: 'Rellekka', x1: 2610, x2: 2700, y1: 3630, y2: 3720 },
  { name: 'Fremennik Province', x1: 2600, x2: 2800, y1: 3550, y2: 3800 },
  { name: 'Lunar Isle', x1: 2050, x2: 2180, y1: 3840, y2: 3960 },
  { name: 'Miscellania', x1: 2490, x2: 2630, y1: 3830, y2: 3900 },
  { name: 'Neitiznot & Jatizso', x1: 2300, x2: 2440, y1: 3770, y2: 3830 },
  { name: 'Ape Atoll', x1: 2690, x2: 2810, y1: 2690, y2: 2810 },
  { name: 'Karamja', x1: 2740, x2: 2990, y1: 2880, y2: 3200 },
  { name: 'Isle of Souls', x1: 2050, x2: 2350, y1: 2800, y2: 3000 },
  { name: 'Tirannwn', x1: 2140, x2: 2380, y1: 3080, y2: 3330 },

  // Morytania
  { name: 'Canifis', x1: 3470, x2: 3520, y1: 3460, y2: 3510 },
  { name: 'Port Phasmatys', x1: 3650, x2: 3700, y1: 3460, y2: 3510 },
  { name: 'Mort Myre Swamp', x1: 3400, x2: 3520, y1: 3290, y2: 3450 },
  { name: 'Morytania', x1: 3390, x2: 3900, y1: 3150, y2: 3600 },
  { name: "Mos Le'Harmless", x1: 3640, x2: 3860, y1: 2920, y2: 3080 },
  { name: 'Fossil Island', x1: 3650, x2: 3850, y1: 3700, y2: 3900 },

  // Kharidian Desert
  { name: 'Pollnivneach', x1: 3330, x2: 3385, y1: 2940, y2: 3020 },
  { name: 'Nardah', x1: 3400, x2: 3450, y1: 2880, y2: 2930 },
  { name: 'Sophanem', x1: 3270, x2: 3330, y1: 2740, y2: 2810 },
  { name: 'Kharidian Desert', x1: 3150, x2: 3500, y1: 2750, y2: 3135 },

  { name: 'Wilderness', x1: 2944, x2: 3392, y1: 3520, y2: 3970 },

  // Zeah & Varlamore
  { name: 'Kourend Castle', x1: 1590, x2: 1690, y1: 3640, y2: 3700 },
  { name: 'Hosidius', x1: 1700, x2: 1850, y1: 3500, y2: 3650 },
  { name: 'Shayzien', x1: 1450, x2: 1560, y1: 3550, y2: 3650 },
  { name: 'Port Piscarilius', x1: 1750, x2: 1880, y1: 3650, y2: 3800 },
  { name: 'Arceuus', x1: 1600, x2: 1800, y1: 3700, y2: 3870 },
  { name: 'Lovakengj', x1: 1400, x2: 1600, y1: 3700, y2: 3900 },
  { name: 'Great Kourend', x1: 1350, x2: 1950, y1: 3450, y2: 3950 },
  { name: 'Kebos Lowlands', x1: 1150, x2: 1350, y1: 3550, y2: 3850 },
  { name: 'Civitas illa Fortis', x1: 1640, x2: 1800, y1: 3050, y2: 3170 },
  { name: 'Varlamore', x1: 1150, x2: 1950, y1: 2850, y2: 3450 },

  // Broad kingdoms, for spots between the named places above.
  { name: 'Misthalin', x1: 3070, x2: 3400, y1: 3140, y2: 3520 },
  { name: 'Asgarnia', x1: 2860, x2: 3070, y1: 3140, y2: 3600 },
  { name: 'Kandarin', x1: 2380, x2: 2860, y1: 2940, y2: 3630 },
];

export function getAreaName(x: number, y: number): string {
  const area = AREAS.find(
    (a) => x >= a.x1 && x <= a.x2 && y >= a.y1 && y <= a.y2
  );
  if (area) return area.name;
  if (y >= 9000) return 'Underground';
  return 'Unknown area';
}

export function isInPuro(x: number, y: number): boolean {
  return x >= 2557 && x <= 2627 && y >= 4287 && y <= 4353;
}
