import styled from 'styled-components';
import {S_BLUE} from '../../constants/colors';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 0 auto;
  justify-content: center;
  align-items: center;
  margin: 0 1rem;
  @media (min-width: 500px) {
    align-items: flex-end;
    margin-right: 1.5rem;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 80px;
  border-radius: 99px;
  border: 4px solid white;
  overflow: hidden;
  @media (min-width: 500px) {
    width: 168px;
    height: 168px;
  }
`;

export const ImageAvatar = styled.img`
  width: 80px;
  height: 80px;
  @media (min-width: 500px) {
    width: 168px;
    height: 168px;
  }
`;

export const Mask = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0);
  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
`;

export const ReloadContainer = styled.div`
  position: relative;
  border-radius: 99px;
`;

export const Reload = styled.button`
  display: none;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -10px;
  right: 8px;
  width: 2rem;
  height: 2rem;
  border: 0;
  border-radius: 30px;
  background-color: ${S_BLUE};
  ${ReloadContainer}:hover & {
    display: flex;
  }
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
  @media (min-width: 500px) {
    top: 4px;
    right: 20px;
  }
`;

export const StyledLabel = styled.label`
  width: inherit;
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover {
    cursor: pointer;
    transform: scale(1.05);
  }
`;

export const ReloadImage = styled.img`
  width: 18px;
  height: 24px;
`;
