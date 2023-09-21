import { lazy } from 'react';

export const AboutPageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Так не можно робити в реальному проекті
    setTimeout(() => resolve(import('./AboutPage')), 1500);
}));
