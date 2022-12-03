import styled from 'styled-components';
import {S_DARK_GRAY} from '../../constants/colors';

export const LangContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  flex-wrap: wrap;
  @media (min-width: 500px) {
    flex-wrap: nowrap;
  }
`;

export const LangItemsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const InputLangContainer = styled.div`
  display: flex;
  align-items: flex-start;
  min-width: 160px;
`;

export const LangItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 4px;
  margin-right: 0.5rem;
  margin-bottom: 0.25rem;
  padding: 0.25rem 0.5rem;
  white-space: nowrap;
  background-color: ${S_DARK_GRAY};
  color: white;
  font-size: 1rem;
`;
