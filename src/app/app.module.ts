import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './component/home/home.component';
import { FailureComponent } from './component/failure/failure.component';
import { CompanyCarComponent } from './component/company-car/company-car.component';
import { CarComponent } from './component/car/car.component';
import { CarFleetComponent } from './component/car-fleet/car-fleet.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FailureComponent,
    CompanyCarComponent,
    CarComponent,
    CarFleetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
