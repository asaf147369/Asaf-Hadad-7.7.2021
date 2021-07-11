import React from 'react';
import { Col } from '../../common/col/Col';
import { Row } from '../../common/row/Row';
import { Text } from '../../common/text/Text';
import date from '../../../utils/date';
import { v4 as uuidv4 } from 'uuid';
import { Current } from '../../../interfaces/Current';
import { Forcast } from '../../../interfaces/Forcast';

function Forecast({ current }: {current: Current}) {
  if(current.forecast?.length) {
    return (
      <Row
        alignItems="center"
        justify="space-around"
        height="70%"
        wrap="wrap"
        overflow="auto"
        margin="25px 0"
      >
        <React.Fragment>
  
          {current.forecast.length > 0 &&
            current.forecast.map((dailyForcast:Forcast) => (
              <Col
                key={uuidv4()}
                dir="column"
                justify="center"
                alignItems="center"
                width="15%"
                radius="8px"
                border="1px solid var(--themeColor)"
                padding="25px"
                margin="30px 5px"
                height="200px"
              >
                <img
                  src={`https://developer.accuweather.com/sites/default/files/${
                    dailyForcast.Day.Icon < 9 ? `0${dailyForcast.Day.Icon}` : dailyForcast.Day.Icon
                  }-s.png`}
                  alt={dailyForcast.Day.IconPhrase}
                />
                <Text size="2rem" margin="15px 0">
                  {date.isDay(dailyForcast.Date)}
                </Text>
                <Text weight="500" size="1.2rem">
                  {dailyForcast.Day.IconPhrase}
                </Text>
                <Text weight="500">
                  Min: {dailyForcast.Temperature.Minimum.Value}
                  {dailyForcast.Temperature.Minimum.Unit} 
                  
                  Max: {dailyForcast.Temperature.Maximum.Value}
                  {dailyForcast.Temperature.Maximum.Unit}
                </Text>
              </Col>
            ))}
        </React.Fragment>
      </Row>
    );
  } else {
    return (
      <Row
        alignItems="center"
        justify="space-around"
        height="70%"
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
}

export default React.memo(Forecast);
