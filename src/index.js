import { createRoot } from 'react-dom/client';
import App from './App';

const container = document.getElementById('root');
const root = createRoot(container);

import ReduxProvider from '@common/providers/Redux/ReduxProvider';
import ThemeProvider from '@common/providers/Theme/ThemeProvider';

root.render(
  <ReduxProvider>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </ReduxProvider>
);
