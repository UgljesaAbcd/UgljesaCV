import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  lang: 'en',
  colorMode: 'light'
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      return { ...state, lang: action.payload };
    },
    setColorMode: (state, action) => {
      return { ...state, colorMode: action.payload };
    }
  }
});

export const selectLanguage = state => state.user.lang;
export const selectColorMode = state => state.user.colorMode;

const { actions, reducer } = userSlice;

export const { setLanguage, setColorMode } = actions;
export default reducer;
