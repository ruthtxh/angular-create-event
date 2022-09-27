import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plus-minus-input-mins',
  templateUrl: './plus-minus-input-mins.component.html',
  styleUrls: ['./plus-minus-input-mins.component.css']
})
export class PlusMinusInputMinsComponent implements OnInit {
  min = 0;
  constructor() { }

  @Output() newMinsEvent = new EventEmitter<number>();
  ngOnInit(): void {
  }

  increment(mm: number) {
    if (mm == 59) this.min = 0;
    else this.min = mm + 1;
    this.newMinsEvent.emit(this.min);
  }
  decrement(mm: number) {
    if (mm == 0) this.min = 59;
    else this.min = mm - 1;
    this.newMinsEvent.emit(this.min);
  }
}