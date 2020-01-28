import { Component, OnInit } from '@angular/core';

import { CompanyCarService } from '../../services/company-car.service';
import { CompanyCar } from '../../model/company-car';

@Component({
  selector: 'app-company-car',
  templateUrl: './company-car.component.html',
  styleUrls: ['./company-car.component.css']
})
export class CompanyCarComponent implements OnInit {
  response: any;
  items: any;

  constructor(private companyCarService: CompanyCarService) {
    this.getAll();
  }

  ngOnInit() {
  }

  getAll() {
    this.companyCarService.getAll().subscribe((response) => {
      this.items = response;
      console.log(this.items);
    });
  }

}
