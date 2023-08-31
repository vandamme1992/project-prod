import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Так не можно робити в реальному проекті!
    setTimeout(() => resolve(import('./MainPage')), 1500);
}));
