import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    // this to exclude url with interceptor
    const excludeEndpoints = ['/auth/login', '/auth/register'];

    // some returns value boolean, it iterates over the array it check any of element is satisfies 
    // the condition or not
    // if satisfied return true else false
    const isExcluded = excludeEndpoints.some(endpoint => request.url.includes(endpoint))

    if(!isExcluded) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${localStorage.getItem('token')}` // Assuming you're storing the token in local storage
        }
      });
      return next.handle(request);
    }
    return next.handle(request);
  }
}
