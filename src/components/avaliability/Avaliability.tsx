import {InfoBlock} from '../infoBlock/InfoBlock';
import * as Styles from './AvaliabilityStyles';
import {TitleBlock} from '../titleBlock/TitleBlock';
import React from 'react';
import {H4} from '../UI/typography/H4';

export const Avaliability = () => {
  return (
    <InfoBlock>
      <Styles.SmallWrapper>
        <TitleBlock label={'Availability'} />
        <Styles.Content>
          <H4>Full time</H4>
        </Styles.Content>
      </Styles.SmallWrapper>
      <Styles.SmallWrapper>
        <TitleBlock label={'Preferred Environment'} />
        <Styles.Content>
          <H4>GitHub, Mac OSX</H4>
        </Styles.Content>
      </Styles.SmallWrapper>
    </InfoBlock>
  );
};
