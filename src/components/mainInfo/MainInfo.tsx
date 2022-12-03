import React from 'react';
import {
  MainInfoStyles,
  LeftHalfContainer,
  RightHalfContainer,
} from './MainInfoStyles';
import {Portfolio} from '../portfolio/Portfolio';
import {Experience} from '../experience/Experience';
import {SampleCode} from '../sampleCode/SampleCode';
import {Avaliability} from '../avaliability/Avaliability';

export const MainInfo = () => {
  return (
    <MainInfoStyles>
      <LeftHalfContainer>
        <Portfolio />
        <Experience />
      </LeftHalfContainer>
      <RightHalfContainer>
        <SampleCode />
        <Avaliability />
      </RightHalfContainer>
    </MainInfoStyles>
  );
};
