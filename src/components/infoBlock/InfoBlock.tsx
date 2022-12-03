import React from 'react';
import {Wrapper} from './infoBlockStyles';
import {TitleBlock} from '../titleBlock/TitleBlock';

interface Props extends React.PropsWithChildren {
  label?: string;
}

export const InfoBlock: React.FC<Props> = ({label, children}) => {
  return (
    <Wrapper>
      {!!label && <TitleBlock label={label} />}
      {children}
    </Wrapper>
  );
};
