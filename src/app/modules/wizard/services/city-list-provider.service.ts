import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { cities } from './cities';

const CITIES = cities;


@Injectable({
  providedIn: 'root'
})
export class CityListProviderService {

  constructor() { }

  getCities(): Observable<string[]> {
    return of(CITIES);
  }
}
