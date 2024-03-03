import { Injectable } from '@angular/core';
import { delay, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class UserService {
    getUser() {
        return of({ username: 'abc' }).pipe(delay(3000));
    }
}