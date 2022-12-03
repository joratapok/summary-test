import {InfoBlock} from '../infoBlock/InfoBlock';
import {StyledList} from '../UI/StyledList';
import {useAppDispatch, useAppSelector} from '../../hooks/redux';
import {ExperienceItem} from './ExperienceItem';
import {summarySlice} from '../../store/reducers/summarySlice';
import {useCallback} from 'react';

export const Experience = () => {
  const dispatch = useAppDispatch();
  const {changeTerm} = summarySlice.actions;
  const {skills} = useAppSelector((state) => state.summarySlice);
  const changeTermRequest = useCallback((id: number, term: number) => {
    dispatch(changeTerm({id, term}));
  }, []);
  return (
    <InfoBlock label={'Experience'}>
      <StyledList>
        {skills.map(({lang, id, term}) => (
          <ExperienceItem
            key={id}
            id={id}
            lang={lang}
            term={term}
            onChangeTermRequest={changeTermRequest}
          />
        ))}
      </StyledList>
    </InfoBlock>
  );
};
