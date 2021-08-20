import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Gif, Pagination } from '../interfaces/gif';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  private _searchText$: BehaviorSubject<string> = new BehaviorSubject(null);

  public get searchText(): string {
    return this._searchText$.value;
  }
  public set searchText(value: string) {
    this._searchText$.next(value);
  }

  private _currentPage$: BehaviorSubject<number> = new BehaviorSubject(1);
  public get currentPage(): number {
    return this._currentPage$.value;
  }
  public set currentPage(value: number) {
    this._currentPage$.next(value);
  }

  private _searchPagination$: BehaviorSubject<Pagination> = new BehaviorSubject(
    null
  );
  public get searchPagination(): Pagination {
    return this._searchPagination$.value;
  }

  public set searchPagination(value: Pagination) {
    this._searchPagination$.next(value);
  }

  private _searchResults$: BehaviorSubject<Gif[]> = new BehaviorSubject(null);

  public get searchResults(): Gif[] {
    return this._searchResults$.value;
  }
  public set searchResults(value: Gif[]) {
    this._searchResults$.next(value);
  }

  constructor() {}
}
