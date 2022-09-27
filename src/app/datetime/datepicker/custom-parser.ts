

import { Injectable } from "@angular/core";
import { NgbDateParserFormatter, NgbDateStruct } from "@ng-bootstrap/ng-bootstrap";

function padNumber(value: number) {
  if (isNumber(value)) {
    return `0${value}`.slice(-2);
  } else {
    return "";
  }
}
function getMonth(value: number) {
  let mth = ""
  switch (value) {
    case 1:
      mth = "January";
      break;
    case 2:
      mth = "February";
      break;
    case 3:
      mth = "March";
      break;
    case 4:
      mth = "April";
      break;
    case 5:
      mth = "May";
      break;
    case 6:
      mth = "June";
      break;
    case 7:
      mth = "July";
      break;
    case 8:
      mth = "August";
      break;
    case 9:
      mth = "September";
      break;
    case 10:
      mth = "October";
      break;
    case 11:
      mth = "November";
      break;
    case 12:
      mth = "December";
  }
  return mth;
}

function isNumber(value: any): boolean {
  return !isNaN(toInteger(value));
}

function toInteger(value: any): number {
  return parseInt(`${value}`, 10);
}


@Injectable()
export class NgbDateCustomParserFormatter extends NgbDateParserFormatter {
  parse(value: string): NgbDateStruct {
    if (value) {
      const dateParts = value.trim().split('/');
      if (dateParts.length === 1 && isNumber(dateParts[0])) {
        return { year: toInteger(dateParts[0]), month: null as any, day: null as any };
      } else if (dateParts.length === 2 && isNumber(dateParts[0]) && isNumber(dateParts[1])) {
        return { year: toInteger(dateParts[1]), month: toInteger(dateParts[0]), day: null as any };
      } else if (dateParts.length === 3 && isNumber(dateParts[0]) && isNumber(dateParts[1]) && isNumber(dateParts[2])) {
        return { year: toInteger(dateParts[2]), month: toInteger(dateParts[1]), day: toInteger(dateParts[0]) };
      }
    }
    return null as any;
  }

  format(date: NgbDateStruct): string {
    let stringDate: string = "";
    if (date) {
      stringDate += isNumber(date.day) ? padNumber(date.day) + " " : "";
      stringDate += isNumber(date.month) ? getMonth(date.month) + " " : "";
      stringDate += date.year;
    }
    return stringDate;
  }
}
