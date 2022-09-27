import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-datetime',
  templateUrl: './datetime.component.html',
  styleUrls: ['./datetime.component.css']
})
export class DatetimeComponent implements OnInit {



  hour = 12;
  mins = 0;
  minsString = "00";
  amPm = "am";
  duration = "";
  endTime = "";
  constructor() { }

  ngOnInit(): void {
  }
  date = "";

  addDate(newDate: string) {
    this.date = newDate;
  }
  addHour(hr: string) {
    this.hour = parseInt(hr.substring(0, hr.length - 2));
    this.amPm = hr.substring(hr.length - 2, hr.length);
  }
  addMins(m: number) {
    this.mins = m;
    this.minsString = toMinsString(m);
  }
  addDuration(d: string) {
    this.duration = d;
    this.endTime = this.addTime(d);
  }
  addTime(date: string) {
    let min = this.mins +  parseInt(date.substring(0, date.length - 1));
    let hour= this.hour;
    if (min>60) hour += 1;
    return `${hour}:${min}`;
  }
}

function toMinsString(num: number) {
  let text = "";
  if (num < 10) text = "0" + (num).toString();
  else text = (num).toString()
  return text;
}