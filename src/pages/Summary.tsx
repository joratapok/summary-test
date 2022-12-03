import React from 'react';
import {Header} from '../components/header/Header';
import {Content} from '../components/content/Content';
import {MainInfo} from '../components/mainInfo/MainInfo';
import {AdditionInfo} from '../components/additionInfo/AdditionInfo';
import {SummaryStyles} from './SummaryStyles';

export const Summary = () => {
  return (
    <SummaryStyles>
      <Header />
      <Content>
        <MainInfo />
        <AdditionInfo />
      </Content>
    </SummaryStyles>
  );
};
