import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PlotBookingFormComponent} from "./plot-booking-form/plot-booking-form.component";

const routes: Routes = [
  {path: '', component: PlotBookingFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlotBookingRoutingModule {
}
