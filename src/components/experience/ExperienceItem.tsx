import React, {useCallback} from 'react';
import * as Styles from './ExperienceStyles';
import {ISkills} from '../../models/ISkills';
import {Input} from '../input/Input';
import {EInputValidation} from '../../helpers/inputValidator';

interface Props extends ISkills {
  onChangeTermRequest: (id: number, term: number) => void;
}

export const ExperienceItem: React.FC<Props> = React.memo(
  ({id, lang, term, onChangeTermRequest}) => {
    const onChangeRequest = useCallback(
      (newTerm: string) => {
        const term = parseInt(newTerm, 10);
        onChangeTermRequest(id, term);
      },
      [id]
    );
    return (
      <li>
        <Styles.EntryContainer>
          <Styles.LangLabel>{lang}</Styles.LangLabel>
          <Input
            text={`${term}`}
            setInState={onChangeRequest}
            withIcon={false}
            width={'48'}
            validation={EInputValidation.NUMBERS}
          >
            <Styles.Entry>
              <Styles.LangExperience>{term} years</Styles.LangExperience>
            </Styles.Entry>
          </Input>
        </Styles.EntryContainer>
      </li>
    );
  }
);
