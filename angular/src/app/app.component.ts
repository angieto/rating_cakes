import { Component, OnInit, Input } from '@angular/core'; // import OnInit & Input from the same library
import { HttpService } from './http.service'; // import HttpService from the service.ts

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// implement OnInit
export class AppComponent implements OnInit {
    // declare variables
    allCakes = [];
    newCake: {baker: "", url: ""};
    shownCake: {};
    createCakeErrors;

    // make constructor and dependency injection
    constructor(private _httpService: HttpService) {}

    // configure initial stage
    ngOnInit() {
        this.showCakes();
        this.reset();
    }

    // logics
    reset() {
        this.newCake = { baker: "", url: "" }
    }

    showCakes() {
        let obs = this._httpService.showCakes();
        obs.subscribe((cakes: any) => {
            console.log("These are all cakes we have", cakes)
            this.allCakes = cakes;
        })
    }
    createCake() {
        let obs = this._httpService.createCake(this.newCake); 
        obs.subscribe((newCake: any) => {
            if (newCake.errors) {
                this.createCakeErrors = newCake.errors;
                console.log("Fail to make cake", this.createCakeErrors);
            } else {
                console.log("Cake is baked!", newCake);
                this.showCakes();
            }
        });
        this.createCakeErrors = undefined;
        this.reset();
    }
    updateCake() {

    }
}
