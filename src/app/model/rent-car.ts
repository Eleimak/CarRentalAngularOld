import {CompanyCar} from './company-car';
import {Customer} from './customer';

export class RentCar {
  id?: string;
  companyCar: CompanyCar;
  customer: Customer;
  dateOfIssue: string;
  returnDate: string;
}
