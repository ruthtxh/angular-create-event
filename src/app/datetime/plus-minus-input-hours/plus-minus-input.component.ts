import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-plus-minus-input-hours',
  templateUrl: './plus-minus-input.component-hours.html',
  styleUrls: ['./plus-minus-input.component-hours.css']
})
export class PlusMinusInputHoursComponent implements OnInit {
  hour = 0;
  hours = ["12am", "1am", "2am", "3am", "4am", "5am", "6am", "7am", "8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm", "6pm", "7pm", "8pm", "9pm", "10pm", "11pm"]
  constructor() { }
  @Output() newHourEvent = new EventEmitter<string>();

  ngOnInit(): void {
  }

  increment(hr: number) {
    if (hr == 23) this.hour = 0;
    else this.hour = hr + 1;
    this.newHourEvent.emit(getHrString(this.hour));
  }
  decrement(hr: number) {
    if (hr == 0) this.hour = 23;
    else this.hour = hr - 1;
    this.newHourEvent.emit(getHrString(this.hour));

  }
}
function getHrString(hr: number) {
  if (hr == 12) return "12pm"
  else if (hr > 12) return [hr - 12].toString() + "pm";
  else if (hr == 0) return "12am";
  else return hr.toString() + "am";
}