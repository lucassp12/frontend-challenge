import React from 'react';

import { Container } from './styles';

import Logo from '../../assets/logo.svg';

const Header: React.FC = () => (
  <Container>
    <img src={Logo} alt="logo" />
  </Container>
);

export default Header;
