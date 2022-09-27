import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reminder',
  templateUrl: './reminder.component.html',
  styleUrls: ['./reminder.component.css']
})
export class ReminderComponent implements OnInit {
  hours = 2;
  reminder="";
  items = [2, 4, 6];
  constructor() { }

  setReminder(selected: number) {
    this.hours = selected;
    this.reminder = this.hours + " hours before event"
  }
  ngOnInit(): void {
  }

}
