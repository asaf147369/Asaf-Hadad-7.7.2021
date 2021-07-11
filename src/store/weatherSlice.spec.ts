import { State } from '../interfaces/State';
import { Fav } from '../interfaces/Fav';
import { Location } from '../interfaces/Location';
import reducer, { handleFavorite, changeCurrent } from './weatherSlice';
import Chance from 'chance';
import { Weather } from '../interfaces/Weather';
import { Temperature } from '../interfaces/Temperature';
import { Current } from '../interfaces/Current';
import { Forcast } from '../interfaces/Forcast';

const chance = Chance();

test('should handle a favorite being added to the state', () => {
	const state: Partial<State> = { favorites: []};
	const previousState: State =  createFakeInitialState(state);
	const fav = createFakeFav();
	expect(reducer(previousState, handleFavorite(fav))).toEqual(
		{
			places: previousState.places,
			current: previousState.current,
			favorites: [fav],
			loading: previousState.loading,
			error: previousState.error,
			weather: previousState.weather

		}
	)
})

test('should handle a favorite being removed from the state', () => {
	const fav = createFakeFav();
	const state: Partial<State> = { favorites: [fav] };
	const previousState: State = createFakeInitialState(state);
	expect(reducer(previousState, handleFavorite(fav))).toEqual(
		{
			places: previousState.places,
			current: previousState.current,
			favorites: [],
			loading: previousState.loading,
			error: previousState.error,
			weather: previousState.weather

		}
	)
})


test('should handle current location being added for the first time', () => {
	const state: Partial<State> = {
		current: {
			location: null,
			weather: null,
			forecast: [],
		} 
	};
	const previousState: State = createFakeInitialState(state);
	const current = createFakeCurrent();
	expect(reducer(previousState, changeCurrent(current))).toEqual(
		{
			places: previousState.places,
			current: current,
			favorites: previousState.favorites,
			loading: previousState.loading,
			error: previousState.error,
			weather: previousState.weather

		}
	)
})


test('should handle current location being changed', () => {
	const state: Partial<State> = {
		current: createFakeCurrent()
	};
	const previousState: State = createFakeInitialState(state);
	const newCurrent = createFakeCurrent();
	expect(reducer(previousState, changeCurrent(newCurrent))).toEqual(
		{
			places: previousState.places,
			current: newCurrent,
			favorites: previousState.favorites,
			loading: previousState.loading,
			error: previousState.error,
			weather: previousState.weather

		}
	)
})

// Mock functions

function createFakeInitialState(state?: Partial<State>):State {
	return {
		places: state?.places || [createFakeLocation()],
		current: state?.current || createFakeCurrent(),
		favorites: state?.favorites || [createFakeFav()],
		loading: chance.bool(),
		error: state?.error || "",
		weather: state?.weather || createFakeWeather(),
	}
}


function createFakeFav(fav?: Partial<Fav>): Fav {
	return {
		id: fav?.id || chance.guid(),
		locationName: fav?.locationName || chance.word(),
		location: fav?.location || createFakeLocation(),
		weather: fav?.weather || createFakeWeather(),
		forecast: fav?.forecast || [createFakeForcast()],
	}
}

function createFakeLocation(location?: Partial<Location>):Location {
	return {
		Key: location?.Key || chance.guid(),
		LocalizedName: location?.LocalizedName || chance.city(),
		Version: location?.Version || chance.integer(),
		AdministrativeArea: {
			ID: location?.AdministrativeArea?.ID || chance.guid(),
			LocalizedName: location?.AdministrativeArea?.LocalizedName || chance.country(),
		},
		Country: {
			ID: location?.Country?.ID || chance.guid(),
			LocalizedName: location?.Country?.LocalizedName || chance.country(),
		},
		Rank: location?.Rank || chance.integer(),
		Type: location?.Type || chance.word(),
	}
}

function createFakeWeather(weather?: Partial<Weather>): Weather {
	return {
		Key: weather?.Key || chance.guid(),
		WeatherIcon: weather?.WeatherIcon || chance.integer(),
		WeatherText: weather?.WeatherText || chance.word(),
		Temperature: weather?.Temperature || createFakeTemperature(),
		error: weather?.error || chance.word(),
		places: weather?.places || [createFakeLocation()],
		IsDayTime: weather?.IsDayTime || chance.word(),
	}
}

function createFakeTemperature(temperature?:Partial<Temperature>) : Temperature {
	return {
		Metric: { Value: temperature?.Metric?.Value || chance.word(), Unit: "C" },
		Imperial: { Value: temperature?.Metric?.Value || chance.word(), Unit: "C" },
		Minimum: { Value: temperature?.Minimum?.Value || chance.word(), Unit: "C" },
		Maximum: { Value: temperature?.Maximum?.Value || chance.word(), Unit: "C" }
	}
}

function createFakeCurrent(current?:Partial<Current>):Current {
	return {
		location: current?.location || createFakeLocation(),
		weather: current?.weather || createFakeWeather(),
		forecast: current?.forecast || [createFakeForcast()]
	}
}

function createFakeForcast(forcast?: Partial<Forcast>): Forcast {
	return {
		Date: forcast?.Date || chance.date(),
		Temperature: forcast?.Temperature || createFakeTemperature(),
		Day: {
			Icon: forcast?.Day?.Icon || chance.integer(),
			IconPhrase: forcast?.Day?.IconPhrase || chance.word()
		},
		Night: {
			Icon: forcast?.Night?.Icon || chance.integer(),
			IconPhrase: forcast?.Night?.IconPhrase || chance.word()
		}
	}
}