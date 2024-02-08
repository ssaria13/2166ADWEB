import { Component } from '@angular/core';
import { Observable, map, interval } from 'rxjs';
import { OnInit } from '@angular/core'; 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
  export class AppComponent implements OnInit{ 
    time$: Observable<Date>;
    title = "enhypen"
    presentDate = new Date();
    constructor(){
      this.time$ = interval(1000).pipe(map(()=> new Date()))
    }
      price: number = 20000; ngOnInit() {
    }
    Enhypen = ["Jungwon","Heeseung","Jay","Jake","Sunghoon","Sunoo", "Ni-ki"];
    decimalNum1: number = 10.98324; 
    decimalNum2: number = 9.78;
    jsonData = { id: '20890135', name: { username: 'aubrey13' }};
    a: number = 0.569;
    b: number = 6.4357;
    c: number = 12.4348;
  
  }


