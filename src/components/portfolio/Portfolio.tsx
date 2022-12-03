import {InfoBlock} from '../infoBlock/InfoBlock';
import {StyledLink} from '../UI/StyledLink';
import {H4} from '../UI/typography/H4';
import {StyledList} from '../UI/StyledList';

const mock = [
  'Bootstrap 4 Material Design (Sample Link)',
  'Modern JavaScript stack',
  'DatePicker for twitter bootstrap',
  'Fast and reliable Bootstrap widgets in Angular',
];

export const Portfolio = () => {
  return (
    <InfoBlock label={'Portfolio'}>
      <StyledList>
        {mock.map((entry) => (
          <li key={entry}>
            <StyledLink>
              <H4>{entry}</H4>
            </StyledLink>
          </li>
        ))}
      </StyledList>
    </InfoBlock>
  );
};
