import styled from 'styled-components';

export const MainInfoStyles = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  flex-wrap: wrap;
  @media (min-width: 1040px) {
    font-size: 1.5rem;
    flex-wrap: nowrap;
  }
`;

export const HalfContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  min-width: 520px;
  flex-wrap: wrap;
  @media (min-width: 800px) {
    width: 50%;
  }
  @media (min-width: 500px) {
    flex-wrap: nowrap;
  }
`;

export const RightHalfContainer = styled(HalfContainer)`
  @media (min-width: 800px) {
    justify-content: flex-start;
  }
`;

export const LeftHalfContainer = styled(HalfContainer)`
  @media (min-width: 800px) {
    justify-content: flex-end;
  }
`;
