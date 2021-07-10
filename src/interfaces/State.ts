import { Current } from "./Current";
import { Fav } from "./Fav";
import { Location } from "./Location";
import { Weather } from "./Weather";

export interface State {
  places: Location[];
  current: Current;
  favorites: Fav[];
  loading: boolean;
  error: string;
  weather: {} | Weather;
};