import React from 'react';
import { Container } from '../common/container/Container';
import Head from './board/Head';
import Forecast from './board/Forecast';
import Search from './search/Search';
import { Spinner } from '../common/Spinner/Spinner';
import { useSelector } from 'react-redux';
import { BiSad } from 'react-icons/bi';
import { State } from '../../interfaces/State';
import { Text } from '../common/text/Text';

const Main = () => {
  const { current, loading, error, favorites } = useSelector((state:State) => {
    console.log(state);
    return state
  });

  return (
    <React.Fragment>
      <Search />
      <Container
        dir="column"
        padding="25px"
        margin="0 auto"
        height="100%"
        maxWidth="80%"
        border="1px solid var(--themeColor)"
        radius="8px"
        justify="space-around"
        alignItems="space-around"
      >
        {loading ? (
          <React.Fragment>
            <Spinner />
          </React.Fragment>
        ) : (current.forecast?.length > 0 ? (
          <React.Fragment>
            <Head current={current} favorites={favorites} />
            <Forecast current={current} />
          </React.Fragment>
          ) : (
          error ? <BiSad size="4em" color="var(--themeColor)" style={{ alignSelf: 'center' }} /> : 
          <React.Fragment>
            <Text>
              An error has occured
            </Text>
          </React.Fragment>
        ))}
      </Container>
    </React.Fragment>
  );
};

export default Main;
