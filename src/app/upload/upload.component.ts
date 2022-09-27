import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.css']
})
export class UploadComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }
  fileName = "";

  uploadFile(ev: any) {
    this.fileName = ev.target.value.split('\\').pop().split('/').pop();
  }
  dropHandler(ev: any) {
    ev.preventDefault();
    if (ev.dataTransfer.items) {
      [...ev.dataTransfer.items].forEach((item, i) => {
        if (item.kind === 'file') {
          const file = item.getAsFile();
          this.fileName = file.name;
          console.log(`… file[${i}].name = ${file.name}`);
        }
      });
    } else {
      [...ev.dataTransfer.files].forEach((file, i) => {
        console.log(`… file[${i}].name = ${file.name}`);
      });
    }
  }
  dragOverHandler(ev: any) {
    ev.preventDefault();
  }


}


