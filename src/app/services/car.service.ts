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
    return this.http.get('http://localhost:8080/rest/car/get/list');
  }
}
