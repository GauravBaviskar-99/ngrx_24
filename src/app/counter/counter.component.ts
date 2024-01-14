import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent {
  public counter = 0;


  Increment() {
    this.counter++;
  }

  Decrement() {
    this.counter--;
  }

  Reset() {
    this.counter = 0;
  }

}



