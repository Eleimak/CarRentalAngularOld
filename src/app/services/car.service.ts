import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private http: HttpClient) {
    this.getAll();
  }

  getAll() {
    return this.http.get('https://rentalscarangular.herokuapp.com/rest/car/get/list');
  }
}
