import {Component, ViewChild} from '@angular/core';
import { AnimationType } from './carousel/carousel.animations';
import { CarouselComponent } from './carousel/carousel.component';
import { Slide } from './carousel/carousel.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  @ViewChild(CarouselComponent) carousel: CarouselComponent;

  animationType = AnimationType.Scale;

  slides: Slide[] = [
    {
      headline: "For Your Current Mood",
      src:
        "https://i.imgur.com/c1AmvJK.jpg"
    },
    {
      headline: "Miouw",
      src:
        "https://i.imgur.com/J005xyk.jpg"
    },
    {
      headline: "In The Wilderness",
      src:
      "https://i.imgur.com/NmISe5j.jpg"
    },
    {
      headline: "Focus On The Writing",
      src:
        "https://i.imgur.com/NMMJddU.jpg"
    }
  ];

  constructor() {}

  setAnimationType(type: { value: AnimationType; }) {
    this.animationType = type.value;
    setTimeout(() => {
      this.carousel.onNextClick();
    });
  }
}
