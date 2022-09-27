import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {

  location: string = "";
  constructor() { }
  ngOnInit(): void {
  }

  addLocation(newLocation: string) {
    this.location=newLocation;
  }
}
