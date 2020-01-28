import {Person} from './person';
import {ReturnRentCar} from './return-rent-car';

export class Customer {
  id?: string;
  person: Person;
  address: string;
  phone: string;
  eMail: string;
  bonusPoints: number;
  carList: any;
  rent: ReturnRentCar;
}
