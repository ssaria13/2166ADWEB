import { Component } from '@angular/core';

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent {

  showText: boolean = false;
  toggleText() {
      this.showText = !this.showText;
    }

  products = [
    { imageUrl: 'assets/a1.jpg', name: 'Classy', price: 'Designed by Sunoo', desc: 'fashion finds its symphony'},
    { imageUrl: 'assets/a2.jpg', name: 'Glamour', price: 'Designedby Halsey', desc: 'sophistication and opulence' },
    { imageUrl: 'assets/a3.jpg', name: 'Timeless', price: 'Designed by Jua', desc: 'epitome of richness'},
    { imageUrl: 'assets/a5.jpg', name: 'Elegance', price: 'Designed by Yeonjun Choi', desc: 'Beauty is Gleaming' },
  ];
}
