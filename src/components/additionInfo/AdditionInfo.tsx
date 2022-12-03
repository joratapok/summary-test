import React from 'react';
import * as Styles from './AdditionInfoStyles';
import {Quotes} from '../quotes/Quotes';
import {MapComponent} from '../map/Map';

export const AdditionInfo = () => {
  return (
    <Styles.AdditionInfoStyles>
      <Quotes />
      <MapComponent />
    </Styles.AdditionInfoStyles>
  );
};
