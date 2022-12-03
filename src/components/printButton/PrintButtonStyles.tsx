import styled from 'styled-components';
import {AiFillPrinter} from 'react-icons/ai';
import {S_RED} from '../../constants/colors';

export const ButtonPrint = styled.div`
  display: flex;
  align-items: center;
  position: absolute;
  top: 20px;
  right: 20px;
  white-space: nowrap;
  color: #b3bac0;
  font-size: 0.8rem;
  &:hover {
    color: ${S_RED};
  }
  &:hover a {
    color: ${S_RED};
  }
  @media (min-width: 1040px) {
    top: 40px;
    right: 160px;
  }
`;

export const PrinterIcon = styled(AiFillPrinter)`
  width: 20px;
  height: 20px;
  margin-right: 0.25rem;
  @media (min-width: 1040px) {
    width: 20px;
    height: 20px;
  }
`;
