import './index.css';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { App } from './App';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { HelmetProvider } from 'react-helmet-async';
import { initMixpanel } from '@/shared/utils';

const container = document.getElementById('root');
const root = createRoot(container!);

const queryClient = new QueryClient();
initMixpanel();

root.render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <App />
      </HelmetProvider>
    </QueryClientProvider>
  </StrictMode>
);
