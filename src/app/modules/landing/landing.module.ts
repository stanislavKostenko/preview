import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {LandingComponent} from './components/landing/landing.component';
import {SlickCarouselModule} from 'ngx-slick-carousel';
import {MousewheelDirective} from '../directives/mousewheel.directive';

@NgModule({
  declarations: [LandingComponent, MousewheelDirective],
  exports: [
    LandingComponent
  ],
  imports: [
    CommonModule,
    SlickCarouselModule
  ]
})
export class LandingModule { }
