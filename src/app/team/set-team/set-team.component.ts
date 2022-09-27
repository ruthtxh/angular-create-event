import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-set-team',
  templateUrl: './set-team.component.html',
  styleUrls: ['./set-team.component.css']
})
export class SetTeamComponent {

  @Output() newItemEvent = new EventEmitter<any>();

  addNewItem(value: string) {
    let randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    this.newItemEvent.emit([value, randomColor]);
  }
  constructor() { }

  ngOnInit(): void {
  }

}
