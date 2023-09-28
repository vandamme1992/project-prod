import { lazy } from 'react';

export const ProfilePageAsync = lazy(() => new Promise((resolve) => {
    // @ts-ignore
    // Так не можно робити в реальному проекті
    setTimeout(() => resolve(import('./ProfilePage')), 1500);
}));
