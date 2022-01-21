import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class SidebarService {

  private inserted: Subject<string> = new Subject<string>();
  private clicked: Subject<string> = new Subject<string>();
  private valuesChanged: Subject<string[]> = new Subject<string[]>();

  constructor() { }

  insert(value: string) {
    this.inserted.next(value);
  }

  click(value: string) {
    this.clicked.next(value);
  }

  changeValues(values: string[]) {
    return this.valuesChanged.next(values);
  }

  inserted$() {
    return this.inserted.asObservable();
  }

  clicked$() {
    return this.clicked.asObservable();
  }

  valuesChanged$() {
    return this.valuesChanged.asObservable();
  }
}
