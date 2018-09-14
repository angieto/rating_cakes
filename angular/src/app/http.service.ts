import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // import HttpClient to enable http requests

@Injectable({
    providedIn: 'root'
})

// create class HttpService and export it to app.module.ts && app.component.ts
export class HttpService {
    constructor(private _http: HttpClient) { }

    // these functions will return an observable 
    showCakes() {
        return this._http.get('/cakes');
    }
    createCake(newCake) {
        return this._http.post('/cakes', newCake);
    }
    updateCake() {
        
    }
}



