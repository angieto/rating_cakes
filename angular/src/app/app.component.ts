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
    cakes: any = [];
    newCake: any = {baker: "", url: ""};
    selectedCake: any = {};
    selectedCakeAverage: any;
    selectedReview: any = {rating: "", comment: ""};
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
            this.cakes = cakes;
        })
    }

    getCake(id) {
        let obs = this._httpService.getCake(id); 
        obs.subscribe(cake => {
            this.selectedCake = cake;
            console.log("Selected Cake: ", this.selectedCake);
            if (this.selectedCake.review.length == 0) {
                console.log("Your cake does not have a review");
            }
            else {
                let sum = 0;    
                for (let i = 0; i < this.selectedCake.review.length; i++) {
                    console.log("Rating:", this.selectedCake.review[i].rating, "Stars");
                    sum += parseInt(this.selectedCake.review[i].rating);
                    this.selectedCakeAverage = (sum/this.selectedCake.review.length).toFixed(1);
                }
            }
            console.log("Getting the cake...", cake);
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

    reviewCake(id) {
        let obs = this._httpService.reviewCake(id, this.selectedReview);
        obs.subscribe(review => {
            // req.params.id, { $push: {review: req.body} }
            console.log("CAKE", this.selectedCake)
            console.log("REVIEW", review);
            console.log("Added review!");
        }) 
    }
}
