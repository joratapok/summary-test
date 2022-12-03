import React, {useCallback} from 'react';
import {FlagImage, FlagRow, HeaderInfoContainer} from './HeaderInfoStyles';
import {H4} from '../UI/typography/H4';
import flag from '../../assets/flag.png';
import {LanguagesEditor} from '../languagesEditor/LanguagesEditor';
import {Input} from '../input/Input';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {summarySlice} from '../../store/reducers/summarySlice';

export const HeaderInfo = () => {
  const dispatch = useAppDispatch();
  const {setLocation, setName} = summarySlice.actions;
  const {location, name} = useAppSelector((state) => state.summarySlice);
  const setChangeNameRequest = useCallback((text: string) => {
    dispatch(setName(text));
  }, []);
  const setLocationRequest = useCallback((text: string) => {
    dispatch(setLocation(text));
  }, []);
  return (
    <HeaderInfoContainer>
      <Input text={name} setInState={setChangeNameRequest} size={'large'} />
      <Input text={location} setInState={setLocationRequest} />
      <FlagRow>
        <FlagImage src={flag} alt={'flag'} />
        <H4>English</H4>
      </FlagRow>
      <LanguagesEditor />
    </HeaderInfoContainer>
  );
};
