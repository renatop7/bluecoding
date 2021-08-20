import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HistoryRoutingModule } from './history-routing.module';
import { HistoryPageComponent } from './history-page/history-page.component';
import { IonicModule } from '@ionic/angular';
import { CoreModule } from '../core/core.module';

@NgModule({
  declarations: [HistoryPageComponent],
  imports: [CommonModule, HistoryRoutingModule, IonicModule, CoreModule],
})
export class HistoryModule {}
