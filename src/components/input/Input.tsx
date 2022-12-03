import React, {ChangeEvent, useRef, useState} from 'react';
import {
  ActiveInput,
  ErrorEntry,
  IconContainer,
  IconInput,
  InputContainer,
  InputText,
} from './InputStyles';
import okIcon from '../../assets/okIcon.png';
import rejectIcon from '../../assets/rejectIcon.png';
import {EInputValidation, inputValidator} from '../../helpers/inputValidator';

interface Props extends React.PropsWithChildren {
  setInState: (text: string) => void;
  text?: string;
  size?: 'small' | 'large';
  withIcon?: boolean;
  width?: string;
  validation?: EInputValidation;
}

export const Input: React.FC<Props> = ({
  setInState,
  text = '',
  size = 'small',
  withIcon = true,
  width,
  validation = EInputValidation.NO_SPEC_SYMBOL,
  children,
}) => {
  const [isActive, setIsActive] = useState(false);
  const [isError, setIsError] = useState(false);
  const [localText, setLocalText] = useState(text);
  const isShowIcon = isActive && withIcon;
  const inputRef = useRef<HTMLInputElement>(null);
  const focusInput = () => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  };
  const activateInput = () => {
    setIsActive(true);
    setTimeout(focusInput, 500);
  };
  const deactivateInput = () => {
    setIsActive(false);
    if (isError) {
      setLocalText(text);
      setIsError(false);
    } else {
      if (localText) {
        setInState(localText);
        if (!text) {
          setLocalText('');
        }
      }
    }
  };
  const handleInput = (e: ChangeEvent<HTMLInputElement>) => {
    const text = e.target.value;
    // if (!text.match(/[-!$%^&*()_+|~=`{}[:;<>?.@#\]]/g)) {
    if (inputValidator(text, validation)) {
      setIsError(false);
    } else {
      setIsError(true);
    }
    setLocalText(text);
  };
  const pressEnter = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== 'Enter') return;
    e.preventDefault();
    deactivateInput();
  };

  return (
    <InputContainer
      fontsize={size}
      isError={isError}
      isActive={isActive}
      width={width}
    >
      {!isActive && (
        <InputText fontsize={size} onClick={activateInput}>
          {!children ? text : children}
        </InputText>
      )}
      {isActive && (
        <ActiveInput
          onBlur={deactivateInput}
          value={localText}
          onChange={handleInput}
          ref={inputRef}
          fontsize={size}
          onKeyUp={pressEnter}
        />
      )}
      <IconContainer>
        {isShowIcon && !isError && <IconInput src={okIcon} alt={'okIcon'} />}
        {isShowIcon && isError && (
          <>
            <IconInput src={rejectIcon} alt={'rejectIcon'} />
            <ErrorEntry>Error description</ErrorEntry>
          </>
        )}
      </IconContainer>
    </InputContainer>
  );
};
