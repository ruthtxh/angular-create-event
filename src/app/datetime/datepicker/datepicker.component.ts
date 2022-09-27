import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { NgbDateStruct, NgbDateParserFormatter } from '@ng-bootstrap/ng-bootstrap';
import { NgbDateCustomParserFormatter } from './custom-parser'
declare var $: any;
@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css'],
  providers: [{ provide: NgbDateParserFormatter, useClass: NgbDateCustomParserFormatter }]
})

export class DatepickerComponent implements OnInit {
  @Output() newDateEvent = new EventEmitter<string>();
  model!: NgbDateStruct;
  dateFormat = "Da";
  constructor() { }

  ngOnInit(): void {

  }
  onDateSelect(event: any) {
    console.log(event)
    const { year, month, day } = event;
    this.dateFormat = `${day} ${this.getMonthText(month)} ${year}`;
    this.newDateEvent.emit(this.dateFormat);
  }
  getMonthText = (month: number) => {
    let text = "";
    switch (month) {
      case 1:
        text = "January";
        break;
      case 2:
        text = "February";
        break;
      case 3:
        text = "March";
        break;
      case 4:
        text = "April";
        break;
      case 5:
        text = "May";
        break;
      case 6:
        text = "June";
        break;
      case 7:
        text = "July";
        break;
      case 8:
        text = "August";
        break;
      case 9:
        text = "September";
        break;
      case 10:
        text = "October";
        break;
      case 11:
        text = "November";
        break;
      case 12:
        text = "December";

    }
    return text;
  }
}


