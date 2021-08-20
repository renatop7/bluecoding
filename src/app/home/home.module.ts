import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CoreModule } from '../core/core.module';
import { HomePageComponent } from './home-page/home-page.component';
import { IonicModule } from '@ionic/angular';
import { GifModule } from '../gif/gif.module';

@NgModule({
  declarations: [
    HomePageComponent, 
  ],
  imports: [
    HomeRoutingModule,
    CommonModule,
    CoreModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    GifModule
  ],
})
export class HomeModule {}
