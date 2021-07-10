import React from 'react';
import Nav from './Nav';
import { Container } from '../common/container/Container';
import Switch from '@material-ui/core/Switch';
import { Col } from '../common/col/Col';
import { BsSun, BsMoon } from 'react-icons/bs';
import { Title } from '../common/text/Title';
import Styles from './header.module.scss';

export const Header = ({ setTheme } : { setTheme:React.Dispatch<React.SetStateAction<boolean>> }) => {
  return (
    <Container
      justify="space-between"
      alignItems="center"
      padding="0 25px"
      margin="0 0 30px 0px"
      wrap="wrap"
    >

      <Title level="1" margin="0 20px 0 0">
        Weather App
      </Title>
          <Nav />
        <Col alignItems="center" className={Styles.switch}>
          <BsSun size="36px" color="orange" />
          <Switch
            onChange={() => setTheme((cur:boolean) => !cur)}
            name="checkedA"
            style={{ color: 'var(--themeColor)'}}
          />
          <BsMoon size="36px" color="#91A3B0" />
      </Col>

    </Container>
  );
};