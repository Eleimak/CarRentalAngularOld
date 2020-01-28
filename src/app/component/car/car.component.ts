import { Component, OnInit } from '@angular/core';
import {CarService} from '../../services/car.service';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  items: any;
  str: string;

  constructor(private carService: CarService) {
    this.getAll();
  }

  ngOnInit() {
  }

  getAll() {
    this.carService.getAll().subscribe((response) => {
      this.items = response;
      console.log(this.items);
    });
  }
}
