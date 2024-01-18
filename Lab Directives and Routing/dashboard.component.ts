import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  showText: boolean = false;
  toggleText() {
      this.showText = !this.showText;
    }

    staff = [ 
      { label: 'Jua co', ceo: 'Joshua Macam', website: 'jua@test.com' },   
      { label: 'Tine ent', ceo: 'Tine tine', website: 'tinejoseph.diaz@test.com' },   
      { label: 'Lelaine labels', ceo: 'Lianne Reyes', website: 'reyes@test.com' }, 
      { label: 'Ester entertainment', ceo: 'Ester laude', website: 'es@test.com' }, 
      ];
  products = [
    { imageUrl: 'assets/pr.jpg', name: 'Lee Ty', price: 'Soloist' },
    { imageUrl: 'assets/prr.jpg', name: 'Kim Sn', price: 'Actor' },
    { imageUrl: 'assets/prrr.jpg', name: 'Choi YJ', price: 'Actor' },
    { imageUrl: 'assets/prrrr.jpg', name: 'BTX', price: 'Boyband' },
  ];

}
