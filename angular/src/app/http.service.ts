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
        return this._http.get('/api/cakes');
    }

    getCake(id) {
        return this._http.get('/api/cakes/'+id)
    }

    createCake(newCake) {
        return this._http.post('/api/cakes', newCake);
    }
    
    reviewCake(cakeId, review) {
        return this._http.post('/api/review/'+ cakeId, review);
    }

}



