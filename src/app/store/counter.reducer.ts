import { createReducer, on } from '@ngrx/store';
import {
  decrementCountAction,
  incrementCountAction,
  setCountAction,
} from './counter.actions';
import { initialState } from './state';

export const CounterReducer = createReducer(
  initialState,

  on(setCountAction, (state, action) => action.value),

  on(incrementCountAction, (state, action) => state + action.value),

  on(decrementCountAction, (state, action) => state - action.value)
);
