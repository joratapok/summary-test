import React, {useCallback, useMemo} from 'react';
import {
  InputLangContainer,
  LangContainer,
  LangItemContainer,
  LangItemsContainer,
} from './LanguagesEditorStyles';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {LangItem} from './LangItem';
import {Input} from '../input/Input';
import {summarySlice} from '../../store/reducers/summarySlice';
import {H4} from '../UI/typography/H4';

export const LanguagesEditor = () => {
  const dispatch = useAppDispatch();
  const {skills} = useAppSelector((state) => state.summarySlice);
  const sortedSkills = useMemo(() => {
    return [...skills].sort((a, b) => b.term - a.term);
  }, [skills]);
  const {addSkillLang} = summarySlice.actions;
  const createNewLang = useCallback((name: string) => {
    dispatch(addSkillLang(name));
  }, []);

  return (
    <LangContainer>
      <LangItemsContainer>
        {sortedSkills.map((el) => (
          <LangItem key={el.id} name={el.lang} />
        ))}
        <InputLangContainer>
          <Input setInState={createNewLang}>
            <LangItemContainer>
              <H4>+</H4>
            </LangItemContainer>
          </Input>
        </InputLangContainer>
      </LangItemsContainer>
    </LangContainer>
  );
};
