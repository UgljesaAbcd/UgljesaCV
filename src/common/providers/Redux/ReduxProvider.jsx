import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';

import userReducer from '@common/slices/userSlice';

export const store = configureStore({
  reducer: {
    user: userReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false })
});

const ReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default ReduxProvider;
