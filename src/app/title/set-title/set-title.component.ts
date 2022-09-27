import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-set-title',
  templateUrl: './set-title.component.html',
  styleUrls: ['./set-title.component.css']
})
export class SetTitleComponent {
  @Output() newTitleEvent = new EventEmitter<string>();
  constructor() { }

  ngOnInit(): void {
  }
  addNewTitle(value: string) {
    this.newTitleEvent.emit(value);
  }

}
