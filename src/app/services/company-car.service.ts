import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { CompanyCar } from '../model/company-car';

@Injectable({
  providedIn: 'root'
})
export class CompanyCarService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get('https://rentalscarangular.herokuapp.com/rest/company/get/list');
  }
}
