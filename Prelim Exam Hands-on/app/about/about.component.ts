import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  staff = [ 
    { label: 'Jua co', ceo: 'Joshua Macam', website: 'jua@test.com' },   
    { label: 'Tine ent', ceo: 'Tine tine', website: 'tinejoseph.diaz@test.com' },   
    { label: 'Lelaine labels', ceo: 'Lianne Reyes', website: 'reyes@test.com' }, 
    { label: 'Ester entertainment', ceo: 'Ester laude', website: 'es@test.com' }, 
    ];
}
