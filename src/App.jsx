import React, { useState, useEffect } from 'react';
import Localize from 'react-intl-universal';

import { CssBaseline } from '@mui/material';

import AppRouter from '@navigation/AppRouter';

import ReduxProvider from '@common/providers/Redux/ReduxProvider';
import Theme from '@common/providers/Theme/ThemeProvider';

import en from '@locales/en.json';
import de from '@locales/de.json';

const App = () => {
  const [localizeInitDone, setLocalizeInitDone] = useState(false);

  const language = navigator.language.toLowerCase().includes('de')
    ? 'de'
    : 'en';

  const locales = {
    en,
    de
  };

  const loadLocales = () => {
    Localize.init({
      currentLocale: language,
      locales
    }).then(() => {
      setLocalizeInitDone(true);
    });
  };

  useEffect(() => loadLocales());

  return localizeInitDone ? (
    <ReduxProvider>
      <Theme>
        <CssBaseline />
        <AppRouter />
      </Theme>
    </ReduxProvider>
  ) : null;
};

export default App;
