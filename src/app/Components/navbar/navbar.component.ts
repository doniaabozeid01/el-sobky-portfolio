import { Component, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  isMenuOpen = false;
  activeSection = 'hero';

  private sectionIds = [
    'hero',
    'services',
    'about',
    'tools',
    'projects',
    'journey',
    'contact'
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string, event?: Event) {
    if (event) event.preventDefault();

    const el = this.document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }

    this.activeSection = sectionId;
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    let closest = this.activeSection;
    let minDistance = Number.POSITIVE_INFINITY;

    this.sectionIds.forEach(id => {
      const el = this.document.getElementById(id);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const center = rect.top + rect.height / 2;
      const windowCenter = window.innerHeight / 2;

      const distance = Math.abs(center - windowCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closest = id;
      }
    });

    this.activeSection = closest;
  }
}
