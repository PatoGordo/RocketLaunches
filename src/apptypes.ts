export interface LaunchDetails {
  vehicle: {
    id: number;
    name: string;
    company_id: number;
    slug: string
  };
  pad: {
    id: number;
    name: string;
    location: {
      id: number;
      name: string;
      state: string;
      statename: string;
      country: string;
      slug: string;
    }
  };
  weather_temp: string
  weather_condition: string
  weather_wind_mph: string
}