import { Col } from '../../common/col/Col';
import { Row } from '../../common/row/Row';
import { Text } from '../../common/text/Text';
import { useDispatch } from 'react-redux';
import { handleFavorite } from '../../../store/weatherSlice';
import { BsSun, BsMoon, BsHeartFill } from 'react-icons/bs';
import { IconButton } from '@material-ui/core/';
import { Fav } from '../../../interfaces/Fav';
import { Title } from '../../common/text/Title';
import { Current } from '../../../interfaces/Current';

const Head = ({ current, favorites } : {current:Current, favorites?: Fav[]}) => {
  const dispatch = useDispatch();

  let existInFavorite:boolean = false;
  if (favorites?.length && current.location) {
    existInFavorite = favorites.some(
      (favorite:Fav) => favorite.location.Key === current.location?.Key
    );
  }

  const handleClick = () => {
    dispatch(handleFavorite(current));
  };
  if (current.weather ) {
    return (
      <Row alignItems="center" height="30%" border="0 0 1px 0 solid gray" wrap="wrap">
        <Col flex={'5%'} margin="0 15px">
          {current.weather?.IsDayTime ? (
            <BsSun size="4em" color="orange" />
          ) : (
            <BsMoon size="4em" color="#91A3B0" />
          )}
        </Col>
        <Col flex={'70%'} dir="column">
          <Title level="2">
            {current.location?.LocalizedName}
          </Title>
          <Text>
            {current.weather.Temperature.Metric.Value}
            {current.weather.Temperature.Metric.Unit} {current.weather.Temperature.Imperial.Value}
            {current.weather.Temperature.Imperial.Unit}
          </Text>
        </Col>
        <Col flex="10%" justify="flex-end" alignItems="center">
          <IconButton onClick={handleClick}>
            <BsHeartFill color={existInFavorite ? '#ff0005' : '#ccc'} style={{ cursor: 'pointer' }} />
          </IconButton>
          <Text border="1px solid var(--themeColor)" padding="0 5px 3px" cursor="pointer" onClick={handleClick}>
            Add to favorites
          </Text>
        </Col>
        <Col flex="100%" justify="center">
          <Title level="1">{current.weather.WeatherText}</Title>
        </Col>
      </Row>
    );
  } else {
    return (
      <Row
        alignItems="center"
        justify="space-around"
        wrap="wrap"
        overflow="auto"
        margin="25px 0"
      >
        <Text>
          An error has occured
        </Text>
      </Row>
    )
  }
};

export default Head;
