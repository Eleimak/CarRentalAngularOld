import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './component/home/home.component';
import {CarComponent} from './component/car/car.component';
import {CompanyCarComponent} from './component/company-car/company-car.component';
import {CarFleetComponent} from './component/car-fleet/car-fleet.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: 'fleet', component: CarFleetComponent },
  {path: 'car', component: CarComponent },
  {path: 'company', component: CompanyCarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
