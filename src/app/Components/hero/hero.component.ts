import { Component } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  services: string[] = [
    'App Design',
    'Website Design',
    'Dashboard',
    'Wireframe',
    'Branding',
    'Product Design'
  ];
}
