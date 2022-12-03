import styled from 'styled-components';
import {S_GRAY} from '../../constants/colors';

export const Container = styled.section`
  position: relative;
  display: flex;
  flex: 1 1 auto;
  flex-direction: row;
  background-color: ${S_GRAY};
  min-height: 244px;
`;

export const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  width: 100%;
  @media (min-width: 1040px) {
    width: 60%;
  }
  @media (min-width: 1200px) {
    width: 70%;
  }
`;

export const Spacer = styled.div`
  display: flex;
  flex: 1 1 auto;
  position: relative;
`;
