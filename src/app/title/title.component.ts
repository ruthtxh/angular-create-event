import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {

  title: string = "";
  constructor() { }
  ngOnInit(): void {
  }

  addTitle(newTitle: string) {
    this.title = newTitle;
  }
}
