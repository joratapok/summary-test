import styled from 'styled-components';
import {H4} from '../UI/typography/H4';
import {StyledLink} from '../UI/StyledLink';

export const LangLabel = styled(H4)`
  display: inline-block;
  margin-right: 0.5rem;
  font-weight: 700;
`;

export const Entry = styled.div`
  flex-direction: row;
  align-items: center;
  background-color: white;
`;

export const LangExperience = styled(StyledLink)`
  border-bottom: 1px dashed;
  white-space: nowrap;
  &:hover {
    border-bottom: 0;
  }
`;

export const TextButton = styled.button`
  display: flex;
  align-items: center;
  font: inherit;
  color: inherit;
  border: none;
  cursor: pointer;
  font-size: 1rem;
  background-color: white;
`;

export const EntryContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
`;
