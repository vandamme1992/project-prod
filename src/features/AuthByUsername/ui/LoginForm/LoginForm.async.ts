import { FC, lazy } from 'react';
import { LoginFormProps } from './LoginForm';

export const LoginFormAsync = lazy<FC<LoginFormProps>>(() => new Promise((resolve) => {
    // @ts-ignore
    // Так не можно робити в реальному проекті
    setTimeout(() => resolve(import('./LoginForm')), 1500);
}));
