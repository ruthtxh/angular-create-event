import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateEventComponent } from './create-event/create-event.component';
import { LocationComponent } from './location/location.component';
import { SetLocationComponent } from './location/set-room/set-location.component';
import { TitleComponent } from './title/title.component'
import { SetTitleComponent } from './title/set-title/set-title.component';
import { TeamComponent } from './team/team.component';
import { SetTeamComponent } from './team/set-team/set-team.component';
import { MemberComponent } from './team/member/member.component';
import { DatetimeComponent } from './datetime/datetime.component';
import { PlusMinusInputHoursComponent } from './datetime/plus-minus-input-hours/plus-minus-input.component';

import { PlusMinusInputMinsComponent } from './datetime/plus-minus-input-mins/plus-minus-input-mins.component';
import { DurationComponent } from './datetime/duration/duration.component';
import { ReminderComponent } from './reminder/reminder.component';
import { DatepickerComponent } from './datetime/datepicker/datepicker.component'

import { NgbDate, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { UploadComponent } from './upload/upload.component';
import { GuestComponent } from './guest/guest.component';
import { NotifyComponent } from './notify/notify.component';
import { FileComponent } from './upload/file/file.component';


@NgModule({
  declarations: [
    AppComponent,
    CreateEventComponent,
    LocationComponent,
    SetLocationComponent,
    TitleComponent,
    SetTitleComponent,
    TeamComponent,
    SetTeamComponent,
    MemberComponent,
    DatetimeComponent,
    PlusMinusInputHoursComponent,
    PlusMinusInputMinsComponent,
    DurationComponent,
    ReminderComponent,
    DatepickerComponent,
    UploadComponent,
    GuestComponent,
    NotifyComponent,
    FileComponent,
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
