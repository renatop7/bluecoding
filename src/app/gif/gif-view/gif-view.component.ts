import { Component, Input, OnInit } from '@angular/core';
import { Gif } from '../../core/interfaces/gif';
import { DisplayService } from '../../core/services/display.service';

@Component({
  selector: 'app-gif-view',
  templateUrl: './gif-view.component.html',
  styleUrls: ['./gif-view.component.scss'],
})
export class GifViewComponent implements OnInit {


  get gif() {
    return this.displayService.currentGif;
  }

  get gifSrc(){
    return this.displayService.currentGif.images.downsized.url;
  }

  constructor(private displayService: DisplayService) {}

  ngOnInit() {}

  next() {
    this.displayService.nextGif();
  }

  previous() {
    this.displayService.previousGif();
  }
}
