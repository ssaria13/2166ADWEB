import { Component } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent {
    title = 'prelimexam';
    clickCount=0
      clickMe() {
        this.clickCount++;
      }
    
      resetClickCount(){
        this.clickCount=0;
      }
  }
  
