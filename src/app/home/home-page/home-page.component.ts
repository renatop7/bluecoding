import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ModalController } from '@ionic/angular';

import { Gif, GifQuery, Pagination } from '../../core/interfaces/gif';
import { ApiService } from '../../core/services/api.service';
import { DisplayService } from '../../core/services/display.service';
import { HistoryService } from '../../core/services/history.service';
import { SearchService } from '../../core/services/search.service';
import { GifViewComponent } from '../../gif/gif-view/gif-view.component';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit, OnDestroy {
  form: FormGroup = this.fb.group({
    search: [null, Validators.required],
    perPage: [10],
  });

  perPage = 10;

  public get results(): Gif[] {
    return this.searchService.searchResults;
  }

  public set results(value: Gif[]) {
    this.searchService.searchResults = value;
  }

  public get pagination(): Pagination {
    return this.searchService.searchPagination;
  }

  public set pagination(value: Pagination) {
    this.searchService.searchPagination = value;
  }

  public set currentGifIndex(value: number) {
    this.displayService.currentGifIndex = value;
  }

  public set currentGif(value: Gif) {
    this.displayService.currentGif = value;
  }

  get currentPage(): number {
    return this.searchService.currentPage;
  }

  set currentPage(value: number) {
    this.searchService.currentPage = value;
  }

  get isFirstPage() {
    return this.searchService.currentPage === 1;
  }

  get isLastPage() {
    return (
      this.currentPage * this.perPage >=
      this.pagination.total_count - this.perPage
    );
  }

  searchPagination: Pagination = null;

  constructor(
    private fb: FormBuilder,
    private api: ApiService,
    private historyService: HistoryService,
    private displayService: DisplayService,
    private searchService: SearchService,
    private modalCtrl: ModalController
  ) {}

  ngOnInit() {}

  searchButtonClick() {
    const searchText = this.form.get('search').value;
    if (!searchText || !searchText.length) return;

    this.currentPage = 1;
    this.historyService.addToHistory(searchText);
    this.searchService.searchText = searchText;
    this.searchGif(searchText);
  }

  searchGif(text: string) {
    const query: GifQuery = {
      q: text,
      limit: this.perPage,
      offset: (this.currentPage - 1) * this.perPage,
    };

    this.api.search(query).subscribe((res) => {
      if (res.data.length) {
        this.pagination = res.pagination;
        this.results = res.data;
      } else {
        this.results = [];
        this.pagination = { total_count: 0, count: this.perPage, offset: 0 };
      }
    });
  }

  async openGifView(gif: Gif, index: number) {
    this.currentGifIndex = index;
    this.currentGif = gif;

    const gifModal = await this.modalCtrl.create({
      component: GifViewComponent,
      cssClass: 'auto-height',
    });

    await gifModal.present();
  }

  nextPage() {
    if (!this.isLastPage) {
      this.currentPage = this.currentPage + 1;
      this.searchGif(this.searchService.searchText);
    }
  }

  previousPage() {
    if (!this.isFirstPage) {
      this.currentPage = this.currentPage - 1;
      this.searchGif(this.searchService.searchText);
    }
  }

  ngOnDestroy(): void {}
}
