import { Forcast } from "./Forcast";
import { Location } from "./Location";
import { Weather } from "./Weather";

export interface Fav {
	id: string;
	locationName: string;
	location: Location;
    weather: Weather;
    forecast: Forcast[];
}