import { Component, HostListener, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  public navs = [
    {
      id: 1,
      title: 'Tin tức Crypto',
    },
    // {
    //   id: 2,
    //   title: 'Học Crypto',
    // },
    // {
    //   id: 3,
    //   title: 'Kiếm tiền',
    // },
  ];
  // @ViewChild('insideElement') insideElement: any;
  blToggle: boolean = false;

  constructor() {}

  ngOnInit(): void {}

  showBackDrop() {
    const backDrop = document.getElementById('news-backdrop') as HTMLElement;
    if (this.blToggle) {
      this.blToggle = false;

      backDrop.classList.remove('active', 'show');
    } else {
      this.blToggle = true;

      backDrop.classList.add('active', 'show');
    }
  }

  // @HostListener('click', ['$event.target'])
  // public onClick(targetElement: any): void {
  //   if (this.insideElement) {
  //     const clickedInside =
  //       this.insideElement.nativeElement.contains(targetElement);
  //     if (!clickedInside) {
  //       if () {
  //         const toggler = document.getElementById(
  //           'toggler-news'
  //         ) as HTMLElement;
  //         if (toggler) {
  //           toggler.click();
  //         }

  //         const backDrop = document.getElementById(
  //           'news-backdrop'
  //         ) as HTMLElement;
  //         if (backDrop) {
  //           backDrop.classList.remove('active', 'show');
  //         }
  //       }
  //     }
  //   }
  // }

  navigateTo(): void {
    window.open('https://kampfire.app/sign-up', '_blank');
  }
}
