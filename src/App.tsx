import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme, GlobalStyles } from './styles/theme';
// components
import { Header } from './components/header/Header';
import Main from './components/main/Main';
import Favorites from './components/favorites/Favorites';
import Alert from './components/common/alert/Alert';

import { useSelector, useDispatch } from 'react-redux';
import { getCurrentByGeoLocation, getForecastApi, getWeatherApi } from './store/weatherApi';
import { State } from './interfaces/State';

const StyledApp = styled.div`
  color: ${({ theme }) => theme.fontColor};
`;

function App() {
  const [ theme, setTheme ] = useState(false);
  const error = useSelector((state:State) => state.error);
  const dispatch = useDispatch();

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        const lat = pos.coords.latitude;
        const lng = pos.coords.longitude;
        dispatch(getCurrentByGeoLocation({ lat, lng }));
      },
      (error) => {
        const tlvDefaultLocation = {
          AdministrativeArea: { ID: 'TA', LocalizedName: 'Tel Aviv' },
          Country: { ID: 'IL', LocalizedName: 'Israel' },
          Key: '215854',
          LocalizedName: 'Tel Aviv',
          Rank: 31,
          Type: 'City',
          Version: 1,
        };
        dispatch(getWeatherApi(tlvDefaultLocation));
        dispatch(getForecastApi(tlvDefaultLocation));
      }
    );
  }, []);

  return (
    <ThemeProvider theme={!theme ? lightTheme: darkTheme}>
      <GlobalStyles />
      <StyledApp>
        <Router>
          <Header setTheme={setTheme} />
          <Switch>
            <Route exact path="/favorite" component={Favorites} />
            <Route exact path="*" component={Main} />
          </Switch>
          <Alert error={error} />
        </Router>
      </StyledApp>
    </ThemeProvider>
  );
}

export default App;
