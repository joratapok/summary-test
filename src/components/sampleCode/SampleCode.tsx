import React from 'react';
import {InfoBlock} from '../infoBlock/InfoBlock';
import * as Styles from './SampleCodeStyles';
import {Code} from './Code';

const mockCode = `<div class='golden-grid'>
    <div style='grid-area:
      11 / 1 / span 10 / span 
      12;'>
    </div>
</div>
`;

export const SampleCode = () => {
  return (
    <InfoBlock label={'Sample Code'}>
      <Styles.Wrapper>
        <Code code={mockCode} language={'html'} />
      </Styles.Wrapper>
    </InfoBlock>
  );
};
