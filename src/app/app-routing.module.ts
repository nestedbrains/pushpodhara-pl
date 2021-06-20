import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PlotBookingModule} from "./plot-booking/plot-booking.module";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./plot-booking/plot-booking.module').then(m => m.PlotBookingModule),
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
