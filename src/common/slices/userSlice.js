import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import { postByPathAndData } from '@services/BaseApi';
import { USER } from '@common/network/ApiPaths';

const getLocalStorage = key => {
  let data = window.localStorage.getItem('store') || null;
  data = JSON.parse(data);
  if (!data) return null;
  return key in data ? data[key] : null;
};

const setLocalStorage = (key, value) => {
  let data = window.localStorage.getItem('store') || null;
  data = JSON.parse(data) || {};
  data[key] = value;
  window.localStorage.setItem('store', JSON.stringify(data));
};

const clearLocalStorageItem = key => {
  window.localStorage.removeItem(key);
};

const auth = getLocalStorage('auth');
export const initialState = {
  language: auth?.language ?? 'en',
  colorMode: 'light',
  isLoggedIn: Boolean(auth?.token),
  firstName: auth?.firstName ?? '',
  lastName: auth?.lastName ?? '',
  theme: 'light',
  token: auth?.token,
  email: auth?.email ?? '',
  isLoading: false,
  company: auth?.company ?? ''
};

export const loginSubmit = createAsyncThunk('user/login', async userData => {
  const response = await postByPathAndData({
    path: USER.LOGIN,
    data: userData
  });
  if (response?.status !== 200) {
    throw { ...response.response.data };
  }
  return response.data;
});

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      return { ...state, lang: action.payload };
    },
    setColorMode: (state, action) => {
      return { ...state, colorMode: action.payload };
    },
    setUserState: (state, { payload }) => {
      return { ...state, ...payload };
    },
    setLogout: state => {
      clearLocalStorageItem('store');
      state.email = initialState.email;
      state.token = initialState.token;
      state.theme = initialState.theme;
      state.firstName = initialState.firstName;
      state.lastName = initialState.lastName;
      state.isLoggedIn = false;
      state.company = initialState.company;
    }
  },
  extraReducers: builder => {
    builder
      .addCase(loginSubmit.fulfilled, (state, { payload }) => {
        setLocalStorage('auth', { ...payload, isLoggedIn: true });
        state.email = payload.email;
        state.token = payload?.token;
        state.theme = payload?.theme;
        state.firstName = payload?.firstName;
        state.lastName = payload?.lastName;
        state.isLoggedIn = true;
        state.company = payload?.company;
      })
      .addCase(loginSubmit.pending, state => {
        state.isLoading = true;
      })
      .addCase(loginSubmit.rejected, state => {
        state.isLoading = false;
      });
  }
});

export const selectLanguage = state => state.user.lang;
export const selectColorMode = state => state.user.colorMode;
export const selectLoggedIn = state => state.user.isLoggedIn;
export const selectToken = state => state.user.token;

const { actions, reducer } = userSlice;

export const { setLanguage, setColorMode, setUserState, setLogout } = actions;
export default reducer;
