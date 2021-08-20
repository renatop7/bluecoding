import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HistoryService {
  private _searchHistory$: BehaviorSubject<string[]> = new BehaviorSubject([]);

  public get searchHistory(): string[] {
    return this._searchHistory$.value;
  }
  public set searchHistory(value: string[]) {
    this._searchHistory$.next(value);
  }

  constructor() {}

  addToHistory(text: string) {
    this.searchHistory = [...this.searchHistory, text];
  }

  clearHistory(){
    this.searchHistory = [];
  }
}
