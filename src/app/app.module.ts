import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CounterControlsComponent } from './counter-controls/counter-controls.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CounterReducer } from './store/counter.reducer';
import { CounterEffects } from './store/counter.effects';

@NgModule({
  declarations: [
    AppComponent,
    CounterOutputComponent,
    CounterControlsComponent,
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      counter: CounterReducer,
    }),
    EffectsModule.forRoot([CounterEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
