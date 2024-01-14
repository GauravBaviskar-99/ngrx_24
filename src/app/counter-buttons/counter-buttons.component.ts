import { ThisReceiver } from '@angular/compiler';
import { Component, EventEmitter, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { Decrement, Increment, Reset } from '../state/counter.actions';
import { counterState } from '../state/counter.state';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.css']
})
export class CounterButtonsComponent {


  constructor(private store: Store<{ counter: counterState }>) {

  }




  onIncrement() {
    this.store.dispatch(Increment())
  }

  onDecrement() {
    this.store.dispatch(Decrement())
  }

  onReset() {
    this.store.dispatch(Reset())
  }
}
