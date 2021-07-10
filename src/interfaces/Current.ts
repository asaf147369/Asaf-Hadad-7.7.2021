import { Forcast } from "./Forcast";
import { Location } from "./Location";
import { Weather } from "./Weather";

export interface Current {
    location: Location | null;
    weather: Weather | null;
    forecast: Array<Forcast>;
  }