import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private searchValueSubject = new BehaviorSubject<string>('');

  constructor() {}

  setSearchValue(value: string): void {
    this.searchValueSubject.next(value);
  }

  get searchValue$() {
    return this.searchValueSubject.asObservable();
  }
}
