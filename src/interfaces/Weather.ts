import { Current } from "./Current";
import { Fav } from "./Fav";
import { Location } from "./Location";
import { Temperature } from "./Temperature";

export interface Weather {
	Key: string;
	WeatherIcon: number;
	WeatherText: string;
	Temperature: Temperature;
	error: string | null;
	current: Current;
	loading?: boolean;
	places: Location[];
	IsDayTime: string;
}
