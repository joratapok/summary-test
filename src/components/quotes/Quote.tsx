import React from 'react';
import {
  QuoteContainer,
  TopImageQuotes,
  BottomImageQuotes,
} from './QuotesStyles';
import {H4} from '../UI/typography/H4';
import {InfoBlock} from '../infoBlock/InfoBlock';
import {IQuote} from '../../models/IQuote';
import quotes from '../../assets/qotes.png';

type Props = IQuote;

export const Quote: React.FC<Props> = ({title, quoteText}) => {
  return (
    <InfoBlock label={title}>
      <QuoteContainer>
        <TopImageQuotes src={quotes} alt={'quotes'} />
        <BottomImageQuotes src={quotes} alt={'quotes'} />
        <H4>{quoteText}</H4>
      </QuoteContainer>
    </InfoBlock>
  );
};
