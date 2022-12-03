import React from 'react';
import {IQuote} from '../../models/IQuote';
import {QuotesContainer} from './QuotesStyles';
import {Quote} from './Quote';

const mock: IQuote[] = [
  {
    title: 'The Most Amazing...',
    quoteText: 'The only true wisdom is in knowing you know nothing...',
  },
  {
    title: 'In clients I look for...',
    quoteText: 'There is only one good, knowledge, and one evil ignorance.',
  },
];

export const Quotes = () => {
  return (
    <QuotesContainer>
      {mock.map(({title, quoteText}) => (
        <Quote key={title} title={title} quoteText={quoteText} />
      ))}
    </QuotesContainer>
  );
};
