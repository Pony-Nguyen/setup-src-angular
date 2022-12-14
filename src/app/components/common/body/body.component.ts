import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { news } from 'src/app/common/tmp';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { CommonService } from 'src/app/services/common.service';
import timeSince from 'src/app/common/timeSince';
@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent implements OnInit, AfterViewInit, OnDestroy {
  news = news;

  slider: OwlOptions = {
    loop: false,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
    },
    nav: true,
  };
  customOptions: OwlOptions = {
    loop: false,
    margin: 16,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    navSpeed: 1000,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };

  owl: any;

  latestNews: any = [];

  panoramaNews: any = [];

  weeklyNews: any = [];

  constructor(private common: CommonService) {}

  ngOnInit(): void {}

  createAt(date: any) {
    const c = timeSince(new Date(date));
    return c;
  }

  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.

    this.owl = document.getElementsByClassName('owl-stage');

    if (this.owl && this.owl.length !== 0) {
      this.owl[0].addEventListener(
        'mousewheel',
        (e: any) => {
          if (e.deltaY > 0) {
            const next: any = document.getElementsByClassName('owl-next');
            next[0].click();
          } else {
            const prev: any = document.getElementsByClassName('owl-prev');
            prev[0].click();
          }
          e.preventDefault();
        },
        false
      );

      this.owl[1].addEventListener(
        'mousewheel',
        (e: any) => {
          if (e.deltaY > 0) {
            const next: any = document.getElementsByClassName('owl-next');
            next[1].click();
          } else {
            const prev: any = document.getElementsByClassName('owl-prev');
            prev[1].click();
          }
          e.preventDefault();
        },
        false
      );
    }
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    document.removeEventListener('mousewheel', this.owl[0]);
    document.removeEventListener('mousewheel', this.owl[1]);
  }
}
