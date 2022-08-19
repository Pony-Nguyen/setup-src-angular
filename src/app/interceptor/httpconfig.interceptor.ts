import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, of, tap } from 'rxjs';
import {
  makeStateKey,
  StateKey,
  TransferState,
} from '@angular/platform-browser';
import { isPlatformServer } from '@angular/common';
import { environment } from 'src/environments/environment';

@Injectable()
export class HttpconfigInterceptor implements HttpInterceptor {
  token: any;

  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    // this.token = localStorage.getItem('token');
    // if (this.token) {
    //   request = request.clone({
    //     url: this.prepareUrl(request.url),
    //     setHeaders: {
    //       // enctype: 'multipart/form-data',
    //       'Access-Control-Allow-Origin': '*',
    //       'Content-Type': 'application/json',
    //       // Authorization: `Bearer ${this.token}`,

    //       'x-token': `${this.token}`,
    //     },
    //   });
    // } else {
    request = request.clone({
      url: this.prepareUrl(request.url),
      setHeaders: {
        // 'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/json',
      },
    });
    // // }
    return next.handle(request);
  }

  private isAbsoluteUrl(url: string): boolean {
    const absolutePattern = /^https?:\/\//i;
    return absolutePattern.test(url);
  }
  private prepareUrl(url: string): string {
    url = this.isAbsoluteUrl(url) ? url : environment.api + url;
    return url;
  }
  public isAuthenticated(): boolean {
    return this.token != null;
  }
}
