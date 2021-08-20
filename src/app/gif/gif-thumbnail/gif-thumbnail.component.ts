import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gif-thumbnail',
  templateUrl: './gif-thumbnail.component.html',
  styleUrls: ['./gif-thumbnail.component.scss'],
})
export class GifThumbnailComponent implements OnInit {

  @Input() src: string;

  constructor() { }

  ngOnInit() {}

}
