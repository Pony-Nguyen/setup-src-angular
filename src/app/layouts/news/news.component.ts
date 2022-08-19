import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.scss'],
})
export class NewsComponent implements OnInit {
  public scroll: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  @HostListener('window:scroll', ['$event'])
  onScroll(s: any): void {
    const sc = s.target?.scrollTop || 0;
    this.scroll = sc > 0;
  }

  hidden() {
    const toggler = document.getElementById('toggler-news') as HTMLElement;
    if (toggler) {
      toggler.click();
    }

    const backDrop = document.getElementById('news-backdrop') as HTMLElement;
    if (backDrop) {
      backDrop.classList.remove('active', 'show');
    }
  }

  // scrollToTop(): void {
  //   document.getElementById('top').scrollIntoView({
  //     behavior: 'smooth',
  //     block: 'start',
  //     inline: 'nearest',
  //   });
  // }
}
