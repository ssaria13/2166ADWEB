import { CommaExpr } from '@angular/compiler';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent {

  //string interpolation
  position = "CEO";
  work_experience = 10;
  email = "aacastro1@student.hau.edu.ph";
  website = "www.alc.com";
  phone = '09974567382';

  //image interpolation/binding
  imageUrl:string="assets/profile.jpg";
  imageW: number = 110;
  imageH: number = 110;
}
