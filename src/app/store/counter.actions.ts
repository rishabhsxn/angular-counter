import { Action, createAction, props } from '@ngrx/store';

export enum CounterActionTypes {
  INIT_COUNT = '[Counter] Init Count',
  SET_COUNT = '[Counter] Set Count',
  INCREMENT_COUNT = '[Counter] Increment Count',
  DECREMENT_COUNT = '[Counter] Decrement Count',
}

export const initCountAction = createAction(CounterActionTypes.INIT_COUNT);

export const setCountAction = createAction(
  CounterActionTypes.SET_COUNT,
  props<{ value: number }>()
);

export const incrementCountAction = createAction(
  CounterActionTypes.INCREMENT_COUNT,
  props<{ value: number }>()
);

export const decrementCountAction = createAction(
  CounterActionTypes.DECREMENT_COUNT,
  props<{ value: number }>()
);

/* -----------  Alternate Syntax
export class IncrementCountAction implements Action {
  readonly type: string = CounterActionTypes.INCREMENT_COUNT;

  constructor(public value: number){}
}

export class DecrementCountAction implements Action {
  readonly type: string = CounterActionTypes.DECREMENT_COUNT;

  constructor(public value: number){}
}

export type Actions = IncrementCountAction | DecrementCountAction
*/
