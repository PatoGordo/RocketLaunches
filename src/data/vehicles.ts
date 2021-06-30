import RocketInterface from './rocketsTypes'

export const SpaceX_Falcon1: RocketInterface = {
  name: 'Falcon 1',
  first_launch: 'March, 24, 2006',
  manufacturer: 'SpaceX',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c8/Falcon_1_Flight_4_liftoff.jpg/300px-Falcon_1_Flight_4_liftoff.jpg',
  reusable: false,
  orbital: true,
  stages: 2,
  propellent: 'RP-1 / LOX',
  total_thrust_kn: 450,
  wiki_link: 'https://en.wikipedia.org/wiki/Falcon_1',
  engines: [
    {
      name: 'Merlin, sea lavel',
      quantity: 1
    },
    {
      name: 'Kastel, vacuum',
      quantity: 1
    }
  ],
  size: {
    height_meters: 21,
    diameter_meters: 1.7,
    mass_tons: 28
  },
  pricing: {
    projectCost: 'US$90 million',
    costPerLaunch: 'US$7 million',
  }
}

export const SpaceX_Falcon9: RocketInterface = {
  name: 'Falcon 9',
  first_launch: 'December, 23, 2018',
  manufacturer: 'SpaceX',
  img: 'https://engenharia360.com/wp-content/uploads/2020/03/spacex-falcon-9-1024x570.jpg',
  reusable: true,
  orbital: true,
  stages: 2,
  propellent: 'RP-1 / LOX',
  total_thrust_kn: 7607,
  wiki_link: 'https://en.wikipedia.org/wiki/Falcon_9',
  engines: [
    {
      name: 'Merlin, sea lavel',
      quantity: 9
    },
    {
      name: 'Merlin, vacuum',
      quantity: 1
    }
  ],
  size: {
    height_meters: 70,
    diameter_meters: 3.7,
    mass_tons: 605
  },
  pricing: {
    projectCost: 'US$300 million',
    costPerLaunch: 'New: US$62 million (2020),\nReused: US$50 million (2019)',
  }
}

export const SpaceX_Starship: RocketInterface = {
  name: 'Starship',
  first_launch: "First Flight hasn't happened yet",
  manufacturer: 'SpaceX',
  img: 'https://img.olhardigital.com.br/wp-content/uploads/2020/09/20200901030459.jpg',
  reusable: true,
  orbital: true,
  stages: 2,
  propellent: 'CH₄(Methane) / LOX',
  total_thrust_kn: 7607,
  wiki_link: 'https://en.wikipedia.org/wiki/SpaceX_Starship',
  engines: [
    {
      name: 'Raptor, sea lavel',
      quantity: 35
    },
    {
      name: 'Raptor, vacuum',
      quantity: 3
    }
  ],
  size: {
    height_meters: 120,
    diameter_meters: 9,
    mass_tons: 5000,
  },
  pricing: {
    projectCost: 'Information not found',
    costPerLaunch: 'US$2 million',
  }
}

export const Roscosmos_Soyuz = {
  name: 'Soyuz FG',
  img: 'https://img.olhardigital.com.br/wp-content/uploads/2021/04/Soyuz_MS-18.jpg',
  first_launch: 'May, 21, 2001'
}

export const RocketLab_Electron = {
  name: 'Electron',
  img: 'https://www.spacelaunchreport.com/electron2.jpg',
  first_launch: 'May, 25, 2017'
}

export const NorthropGrumman_Minotaur = {
  name: 'Minotaur',
  img: 'https://upload.wikimedia.org/wikipedia/commons/7/76/Minotaur_I_rocket.jpg',
  first_launch: 'January, 27, 2000'
}

export const BoeingAndNasa_SpaceLaunchSystem = {
  name: 'Space Launch System(SLS)',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Sls_block1_on-pad_sunrisesmall.jpg/800px-Sls_block1_on-pad_sunrisesmall.jpg',
  first_launch: "First Flight hasn't happened yet"
}

export const BlueOrgin_NewShepard = {
  name: 'New Shepard',
  img: 'https://pplware.sapo.pt/wp-content/uploads/2021/01/new_shepard_blue_origin00.jpg',
  first_launch: "April, 29, 2015"
}

export const NASA_SaturnV = {
  name: 'Saturn V',
  img: 'https://upload.wikimedia.org/wikipedia/commons/1/16/Apollo_11_Launch_-_GPN-2000-000630.jpg',
  first_launch: "November, 9, 1967"
}

export const ESA_ArianeV = {
  name: 'Ariane V',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3c/Ariane_5ES_with_ATV_4_on_its_way_to_ELA-3.jpg/220px-Ariane_5ES_with_ATV_4_on_its_way_to_ELA-3.jpg',
  first_launch: "June, 4, 1996"
}

export const CNSA_LongMarchV = {
  name: 'Long March V',
  img: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/%E9%95%BF%E5%BE%81%E4%BA%94%E5%8F%B7%E9%81%A5%E4%BA%8C%E7%81%AB%E7%AE%AD%E8%BD%AC%E5%9C%BA.jpg/220px-%E9%95%BF%E5%BE%81%E4%BA%94%E5%8F%B7%E9%81%A5%E4%BA%8C%E7%81%AB%E7%AE%AD%E8%BD%AC%E5%9C%BA.jpg',
  first_launch: "November, 3, 2016"
}

export default [
  SpaceX_Falcon1,
  SpaceX_Falcon9,
  SpaceX_Starship,
  Roscosmos_Soyuz,
  RocketLab_Electron,
  NorthropGrumman_Minotaur,
  BoeingAndNasa_SpaceLaunchSystem,
  BlueOrgin_NewShepard,
  NASA_SaturnV,
  ESA_ArianeV,
  CNSA_LongMarchV,
]