import React from 'react';
import {ButtonPrint, PrinterIcon} from './PrintButtonStyles';
import {StyledLink} from '../UI/StyledLink';

export const PrintButton = () => {
  return (
    <ButtonPrint>
      <PrinterIcon />
      <StyledLink>Print this page</StyledLink>
    </ButtonPrint>
  );
};
