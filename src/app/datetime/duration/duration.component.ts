import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-duration',
  templateUrl: './duration.component.html',
  styleUrls: ['./duration.component.css']
})
export class DurationComponent implements OnInit {

  duration = "";
  items = ["15m", "30m"];
  @Output() newDurationEvent = new EventEmitter<string>();
  constructor() { }

  setDuration(selected: string) {
    this.duration = selected;
    this.newDurationEvent.emit(selected);
  }
  ngOnInit(): void {
  }

}
