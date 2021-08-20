import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiService } from './services/api.service';
import { DisplayService } from './services/display.service';
import { SearchService } from './services/search.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiService,
    DisplayService,
    SearchService
  ]
})
export class CoreModule { }
