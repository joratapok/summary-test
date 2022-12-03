import styled from 'styled-components';

interface Props {
  fontsize: 'small' | 'large';
}
interface ContainerProps {
  isActive: boolean;
  isError: boolean;
  fontsize: 'small' | 'large';
  width: undefined | string;
}

export const InputContainer = styled.div<ContainerProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: ${({width}) => (width ? width + 'px' : 'auto')};
  position: relative;
  background-color: ${({isActive}) =>
    isActive ? 'rgba(0, 0, 0, 0.06)' : 'none'};
  border-width: 0;
  border-bottom: ${({isActive, isError}) =>
    isActive ? (isError ? '1px solid #EB5757' : '1px solid') : '0'};
  font-size: ${(props) => (props.fontsize === 'small' ? '1rem' : '2.5rem')};
  font-weight: ${(props) => (props.fontsize === 'small' ? '400' : '500')};
`;

export const InputText = styled.button<Props>`
  display: flex;
  align-items: center;
  font: inherit;
  color: inherit;
  border: none;
  cursor: pointer;
  //font-size: ${(props) => (props.fontsize === 'small' ? '1rem' : '2.5rem')};
`;

export const ActiveInput = styled.input<Props>`
  width: 100%;
  font: inherit;
  //font-size: ${(props) => (props.fontsize === 'small' ? '1rem' : '2.5rem')};
  //font-weight: ${(props) => (props.fontsize === 'small' ? '400' : '500')};
  padding: 0.25rem 0.25rem;
  background: transparent;
  border-width: 0;
  outline: none;
`;

export const IconContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  padding: 0 0.25rem;
`;

export const IconInput = styled.img`
  width: 16px;
  height: 16px;
`;

export const ErrorEntry = styled.span`
  position: absolute;
  left: 32px;
  display: inline-block;
  white-space: nowrap;
  color: #ff0000;
  font-size: 14px;
`;
