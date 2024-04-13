import { Injectable, Provider } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HTTP_INTERCEPTORS,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './enviroments/enviroment';

@Injectable()
export class AppInterceptor implements HttpInterceptor {
  constructor() {}

  API = '/api';

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    if (request.url.startsWith(this.API)) {
      request = request.clone({
        url: request.url.replace(this.API, environment.apiUrl),
        withCredentials: false,
      });
      console.log('cloned and replaced');
    }

    return next.handle(request);
  }
}

export const appInterceptorProvider: Provider = {
  useClass: AppInterceptor,
  multi: true,
  provide: HTTP_INTERCEPTORS,
};
