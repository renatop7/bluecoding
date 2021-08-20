import { Component, OnInit } from '@angular/core';
import { HistoryService } from '../../core/services/history.service';

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss'],
})
export class HistoryPageComponent implements OnInit {
  get searchHistory(): string[] {
    return this.historyService.searchHistory;
  }

  constructor(private historyService: HistoryService) {}

  ngOnInit() {
  }

  clearHistory() {
    this.historyService.clearHistory();
  }
}
