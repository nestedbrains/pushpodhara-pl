import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlotBookingRoutingModule } from './plot-booking-routing.module';
import { PlotBookingFormComponent } from './plot-booking-form/plot-booking-form.component';
import {MatTabsModule} from "@angular/material/tabs";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {MatRadioModule} from "@angular/material/radio";
import {MatToolbarModule} from "@angular/material/toolbar";
import {FormsModule} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    PlotBookingFormComponent
  ],
  imports: [
    CommonModule,
    PlotBookingRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    MatRadioModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class PlotBookingModule { }
