import { HttpInterceptor, HttpRequest, HttpHandler, HttpHeaders } from '@angular/common/http';

export class AuthInterceptor implements HttpInterceptor {
    private headers = new HttpHeaders().set('Authorization', 'token123123');

    intercept(req: HttpRequest<any>, next: HttpHandler): any {
        const reqCloned = req.clone({headers: this.headers});
        return next.handle(reqCloned);
    }
}