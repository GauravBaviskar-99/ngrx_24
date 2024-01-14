import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { counterState } from '../state/counter.state';
import { CustomIncrement } from '../state/counter.actions';

@Component({
  selector: 'app-custom-counter',
  templateUrl: './custom-counter.component.html',
  styleUrls: ['./custom-counter.component.css']
})
export class CustomCounterComponent {



  constructor(private store: Store<{ counter: counterState }>) {

  }


  add(input: HTMLInputElement) {
    console.log(input.valueAsNumber)
    this.store.dispatch(CustomIncrement({ value: input.valueAsNumber }))
  }
}
