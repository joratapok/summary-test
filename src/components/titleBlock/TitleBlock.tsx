import React from 'react';
import {HeaderText} from '../UI/HeaderText';
import {TitleBlockStyles} from './TitleBlockStyles';

type Props = {
  label: string;
};

export const TitleBlock: React.FC<Props> = ({label}) => {
  return (
    <TitleBlockStyles>
      <HeaderText>{label}</HeaderText>
    </TitleBlockStyles>
  );
};
