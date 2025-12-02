import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

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
  constructor(@Inject(DOCUMENT) private document: Document) { }

  scrollToSection(sectionId: string, event?: Event) {
    if (event) event.preventDefault();

    const el = this.document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    // this.activeSection = sectionId;
    // this.isMenuOpen = false;
  }




  skills: string[] = [
    'App Design',
    'Website Design',
    'Dashboard',
    'Wireframe',
    'UI/UX Design',
    'Mobile Design'
  ];




}
