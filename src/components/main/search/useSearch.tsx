import { useSelector, useDispatch } from 'react-redux';
import { Location } from '../../../interfaces/Location';
import { State } from '../../../interfaces/State';
import { getLocationApi, getWeatherApi, getForecastApi } from '../../../store/weatherApi';

const useSearch = () => {
  const { places, loading } = useSelector((state:State) => state);
  const dispatch = useDispatch();

  const handleChange = async (e:any) => {
    dispatch(getLocationApi(e.target.value));
  };

  const handleSelected = (place:Location) => {
    dispatch(getWeatherApi(place));
    dispatch(getForecastApi(place));
  };

  return { places, loading, handleChange, handleSelected };
};

export default useSearch;
