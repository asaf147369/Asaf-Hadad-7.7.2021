import { Temperature } from "./Temperature";

export interface Forcast {
	Date: Date;
	Temperature: Temperature;
	Day: {
		Icon: number;
		IconPhrase: string;
	}
	Night: {
		Icon: number;
		IconPhrase: string;
	}
}