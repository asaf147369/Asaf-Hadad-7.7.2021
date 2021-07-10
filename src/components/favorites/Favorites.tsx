import { Container } from '../common/container/Container';
import { Col } from '../common/col/Col';
import { Text } from '../common/text/Text';

import { useSelector, useDispatch } from 'react-redux';
import { changeCurrent } from '../../store/weatherSlice';
import { useHistory } from 'react-router-dom';

import { Fav } from '../../interfaces/Fav';
import { State } from '../../interfaces/State';

const Favorites = () => {
  const { favorites } = useSelector((state: State) => state);

  const dispatch = useDispatch();
  const history = useHistory();

  const handleClick = (favorite: Fav) => {
    const { location, weather, forecast } = favorite;
    dispatch(changeCurrent({ location, weather, forecast }));
    history.push('/');
  };

  if (favorites && favorites?.length > 0) {
    return (<Container
      dir="flex"
      padding="25px"
      margin="auto"
      height="80vh"
      maxWidth="80%"
      border="1px solid var(--themeColor)"
      radius="8px"
      wrap={'wrap'}
      overflow="auto"
    >
      {favorites.map((favorite: Fav) => (
        <Col
          key={favorite.id}
          dir="column"
          justify="space-evenly"
          alignItems="center"
          width="250px"
          height="300px"
          radius="8px"
          margin="10px"
          border="1px solid var(--themeColor)"
          padding=" 25px"
          cursor='pointer'
          onClick={() => handleClick(favorite)}
        >
          <Text size="2em" margin="15px 0" weight="600">
            {favorite.locationName}
          </Text>
          <Text weight="500" size="1.2em" margin="0">
            {favorite.weather.Temperature.Metric.Value}
            {favorite.weather.Temperature.Metric.Unit}
          </Text>
          <img
            src={`https://developer.accuweather.com/sites/default/files/${favorite.weather.WeatherIcon && favorite.weather.WeatherIcon < 9
                ? `0${favorite.weather.WeatherIcon}`
                : favorite.weather.WeatherIcon
              }-s.png`}
            alt={favorite.weather.WeatherIcon!.toString()}
          />
          <Text weight="500" size="1.2em" margin="0">
            {favorite.weather.WeatherText!}
          </Text>
        </Col>
      ))}
    </Container>
    )
  }
  return (<Container
    dir="flex"
    padding="25px"
    margin="auto"
    height="80vh"
    maxWidth="80%"
    border="1px solid var(--themeColor)"
    radius="8px"
    wrap={'wrap'}
    justify="center"
    alignItems="center"
    overflow="auto"
  >
    <Col
      dir="column"
      justify="space-evenly"
      alignItems="center"
      width="250px"
      height="300px"
      radius="8px"
      margin="10px"
      border="1px solid var(--themeColor)"
      padding=" 25px"
    >
      <Text size="2em" margin="15px 0" color="black" weight="600">
        No favourites selected
      </Text>
    </Col>
  </Container>
  )
};

export default Favorites;
