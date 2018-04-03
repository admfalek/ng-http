import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';

export class SpyInterceptor implements HttpInterceptor {
    intercept(req: HttpRequest<any>, next: HttpHandler): any {
        //throw new Error('Method is implemented,');
        console.log('Zapytanie wykonano dnia: ', new Date());
        console.log('Zapytanie na adres: ', req.url);
        return next.handle(req);
    }
}