import { Component, Inject, HostListener } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  isMenuOpen = false;
  isScrolled = false;
  activeSection = 'hero';

  links = [
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'contact', label: 'Contact' }
  ];

  private sectionIds = ['hero', 'about', 'work', 'skills', 'journey', 'contact'];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  scrollToSection(sectionId: string, event?: Event) {
    if (event) event.preventDefault();
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    this.activeSection = sectionId;
    this.isMenuOpen = false;
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 40;
    let closest = this.activeSection;
    let minDistance = Number.POSITIVE_INFINITY;

    this.sectionIds.forEach(id => {
      const el = this.document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const distance = Math.abs(rect.top + rect.height / 2 - window.innerHeight / 2);
      if (distance < minDistance) {
        minDistance = distance;
        closest = id;
      }
    });
    this.activeSection = closest;
  }
}
