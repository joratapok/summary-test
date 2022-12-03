import styled from 'styled-components';
import {Map} from '@pbe/react-yandex-maps';

export const MapContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 50%;
  min-width: 550px;
  border-radius: 8px;
  overflow: hidden;
  @media (min-width: 550px) {
    justify-content: flex-start;
  }
`;

export const StyledMap = styled(Map)`
  width: 300px;
  height: 200px;
  @media (min-width: 550px) {
    width: 550px;
  }
`;
