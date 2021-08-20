import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifThumbnailComponent } from './gif-thumbnail/gif-thumbnail.component';
import { GifViewComponent } from './gif-view/gif-view.component';

@NgModule({
  declarations: [GifThumbnailComponent, GifViewComponent],
  imports: [CommonModule],
  exports: [GifThumbnailComponent, GifViewComponent],
})
export class GifModule {}
