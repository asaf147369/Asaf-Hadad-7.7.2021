import { Forcast } from "./Forcast";
import { Location } from "./Location";
import { Weather } from "./Weather";

export interface Fav {
	id: any;
	locationName: any;
	location: Location;
    weather: Weather;
    forecast: Forcast[];
}