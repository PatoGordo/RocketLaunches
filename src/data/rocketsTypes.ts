export default interface RocketInterface {
  name: string;
  description?: string;
  first_launch: string;
  manufacturer: string;
  img: string;
  reusable: boolean;
  orbital: boolean;
  stages: number;
  propellent: string;
  total_thrust_kn: number;
  wiki_link?: string;
  engines: Array<{
    name: string;
    quantity: number;
  }>;
  size: {
    height_meters: number;
    diameter_meters: number;
    mass_tons: number;
  };
  pricing: {
    projectCost: string;
    costPerLaunch: string;
  };
  missions?: [
    {
      name: string;
      date: string;
    }
  ];
}