import React from 'react';
import {Container, HeaderContainer, Spacer} from './HeaderStyles';
import {Avatar} from '../avatar/Avatar';
import {HeaderInfo} from '../headerInfo/HeaderInfo';
import {PrintButton} from '../printButton/PrintButton';

export const Header = () => {
  return (
    <Container>
      <HeaderContainer>
        <Avatar />
        <HeaderInfo />
        <Spacer />
      </HeaderContainer>
      <PrintButton />
    </Container>
  );
};
