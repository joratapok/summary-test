import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {ISkills} from '../../models/ISkills';

interface ISummarySliceState {
  avatar: null | File;
  name: string;
  location: string;
  skills: Array<ISkills>;
}

const initialState: ISummarySliceState = {
  avatar: null,
  name: 'John Smith',
  location: 'Portland, Oregon, USA',
  skills: [
    {id: 1, lang: 'PHP', term: 6},
    {id: 2, lang: 'Ruby', term: 2},
    {id: 3, lang: 'Java Script', term: 4.5},
  ],
};

export const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    setAvatar(state, action: PayloadAction<File>) {
      state.avatar = action.payload;
    },
    setName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    setLocation(state, action: PayloadAction<string>) {
      state.location = action.payload;
    },
    addSkillLang(state, action: PayloadAction<string>) {
      state.skills = [
        ...state.skills,
        {lang: action.payload, term: 0, id: new Date().getTime()},
      ];
    },
    changeTerm(state, action: PayloadAction<{term: number; id: number}>) {
      state.skills = state.skills.map((skill) => {
        if (skill.id === action.payload.id) {
          return {...skill, term: action.payload.term};
        } else {
          return skill;
        }
      });
    },
  },
});

export default summarySlice.reducer;
