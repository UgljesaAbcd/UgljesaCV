import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  lang: 'en'
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      return { ...state, lang: action.payload };
    }
  }
});

export const selectLanguage = state => state.user.lang;

const { reducer } = userSlice;

export default reducer;
