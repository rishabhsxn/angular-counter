import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import {
  decrementCountAction,
  incrementCountAction,
  initCountAction,
  setCountAction,
} from './counter.actions';
import { of, switchMap, tap, withLatestFrom } from 'rxjs';
import { selectCount } from './counter.selectors';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable()
export class CounterEffects {
  loadCount = createEffect(() =>
    this.actions$.pipe(
      ofType(initCountAction),
      switchMap(() => {
        const storedCounter = localStorage.getItem('count');
        if (storedCounter) return of(setCountAction({ value: +storedCounter }));
        return of(setCountAction({ value: 0 }));
      })
    )
  );

  saveCount = createEffect(
    () =>
      this.actions$.pipe(
        ofType(incrementCountAction, decrementCountAction),
        withLatestFrom(this.store.select(selectCount)),
        tap(([action, counter]) => {
          console.log('Inside effects, Action:', action);
          localStorage.setItem('count', counter.toString());
        })
      ),
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private store: Store<{ counter: number }>
  ) {}
}
