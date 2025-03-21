import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private countryDataSource = new BehaviorSubject<any[]>([]);
  countryData$ = this.countryDataSource.asObservable();

  private childrenColumnsSource = new BehaviorSubject<any[]>([]);
  childrenColumns$ = this.childrenColumnsSource.asObservable();

  private countryColumnsSource = new BehaviorSubject<any[]>([]);
  countryColumns$ = this.countryColumnsSource.asObservable();

  // Método para actualizar la data
  setCountryData(data: any[]) {
    this.countryDataSource.next(data);
  }

  setChildrenColumns(data: any[]) {
    this.childrenColumnsSource.next(data);
  }

  setCountryColumns(data: any[]) {
    this.countryColumnsSource.next(data);
  }
}
