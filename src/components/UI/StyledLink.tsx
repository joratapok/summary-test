import styled from 'styled-components';
import {S_BLUE, S_RED} from '../../constants/colors';

export const StyledLink = styled.a`
  color: ${S_BLUE};
  &:hover {
    color: ${S_RED};
    cursor: default;
  }
`;
