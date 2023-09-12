import { createSelector } from '@reduxjs/toolkit';
import { CounterSchema } from 'entities/Counter';
import { getCounter } from '../getCouter/getCounter';

export const getCounterValue = createSelector(
    getCounter,
    (counter: CounterSchema) => counter.value,
);
