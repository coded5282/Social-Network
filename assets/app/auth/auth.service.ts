import {Injectable} from "angular2/core";
import {Http, Headers} from "angular2/http";
import {User} from "./user"; 
import {Observable} from "rxjs/Observable";
import 'rxjs/Rx'; 
@Injectable()
export class AuthService {
    constructor (private _http: Http) {}
    
    signup(user: User) {
        const body = JSON.stringify(user);
        const headers = new Headers({'Content-Type': 'application/json'});
        return this._http.post('https://webdevmean-coded5282.c9users.io/user', body, {headers: headers})
            .map(response => response.json())
            .catch(error => Observable.throw(error.json()));
    }
}