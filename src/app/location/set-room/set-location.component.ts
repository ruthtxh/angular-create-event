import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-set-location',
  templateUrl: './set-location.component.html',
  styleUrls: ['./set-location.component.css']
})
export class SetLocationComponent {
  @Output() newLocationEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addNewLocation(value: string) {
    this.newLocationEvent.emit(value);
  }

}
