import {AfterViewInit, Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {carouselOptions, slides} from 'src/app/mocks/landing.mocks';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit, AfterViewInit {
  public carouselOptions = carouselOptions;
  public slides = slides;

  @ViewChild('slickCarousel') slickCarousel: any;
  @Output() carousel: EventEmitter<any> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.carousel.emit(this.slickCarousel);
  }

  nextSlide() {
    this.slickCarousel.slickNext();
  }

  prevSlide() {
    this.slickCarousel.slickPrev();
  }

}
