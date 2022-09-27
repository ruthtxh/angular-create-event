import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  currentItem = 'Television';

  items = [['LA', '#f3a995'], ['AM', '#7baff9'], ['ES', '#f8d34c'],];

  addItem(newItem: any) {
    this.items.push(newItem);
  }
  constructor() { }
  ngOnInit(): void {
  }

}
