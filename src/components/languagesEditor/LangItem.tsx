import React from 'react';
import {H4} from '../UI/typography/H4';
import {LangItemContainer} from './LanguagesEditorStyles';

type Props = {
  name: string;
};

export const LangItem: React.FC<Props> = React.memo(({name}) => {
  return (
    <LangItemContainer>
      <H4>{name}</H4>
    </LangItemContainer>
  );
});
