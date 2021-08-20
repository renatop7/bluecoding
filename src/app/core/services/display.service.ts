import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';
import { Gif } from '../interfaces/gif';
import { SearchService } from './search.service';

@Injectable({
  providedIn: 'root',
})
export class DisplayService {
  private _currentGifIndex$: BehaviorSubject<number> = new BehaviorSubject(
    null
  );

  public get currentGifIndex(): number {
    return this._currentGifIndex$.value;
  }
  public set currentGifIndex(value: number) {
    this._currentGifIndex$.next(value);
  }

  private _currentGif$: BehaviorSubject<Gif> = new BehaviorSubject(null);

  public get currentGif(): Gif {
    return this._currentGif$.value;
  }
  public set currentGif(value: Gif) {
    this._currentGif$.next(value);
  }

  public get gifList(): Gif[] {
    return this.searchService.searchResults;
  }


  constructor(private searchService: SearchService) {}

  nextGif() {
    let nextIndex = this.currentGifIndex + 1;

    if (nextIndex === this.gifList.length) {
      nextIndex = 0;
    }

    this.currentGif = this.gifList[nextIndex];
    this.currentGifIndex = nextIndex;
  }

  previousGif() {
    let previousIndex = this.currentGifIndex - 1;

    if (previousIndex < 0) {
      previousIndex = this.gifList.length - 1;
    }

    this.currentGif = this.gifList[previousIndex];
    this.currentGifIndex = previousIndex;
  }
}
