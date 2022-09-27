import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.css']
})
export class FileComponent implements OnInit {

  constructor() { }
  @Input() file = ""
  note = "";
  
  ngOnInit(): void {
  }
  addNote(note: string) {
    this.note = note;
  }
  removeNote(){
    this.note="";
  }
}
