import { Component, Inject, HostListener, OnDestroy } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  isMenuOpen = false;
  isScrolled = false;
  activeSection = 'hero';

  links = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'work', label: 'Work' },
    { id: 'skills', label: 'Skills' },
    { id: 'journey', label: 'Experience' }
  ];

  mobileLinks = [
    ...this.links,
    { id: 'contact', label: 'Contact' }
  ];

  private sectionIds = ['hero', 'about', 'work', 'skills', 'journey', 'contact'];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngOnDestroy() {
    this.document.body.classList.remove('nav-locked');
  }

  pad(n: number) {
    return n.toString().padStart(2, '0');
  }

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
    this.syncBodyLock();
  }

  closeMenu() {
    this.isMenuOpen = false;
    this.syncBodyLock();
  }

  private syncBodyLock() {
    this.document.body.classList.toggle('nav-locked', this.isMenuOpen);
  }

  scrollToSection(sectionId: string) {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      this.document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    }
    this.activeSection = sectionId;
    this.closeMenu();
  }

  @HostListener('window:resize')
  onResize() {
    if (window.innerWidth > 960 && this.isMenuOpen) {
      this.closeMenu();
    }
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.isScrolled = window.scrollY > 24;
    let closest = this.activeSection;
    let minDistance = Number.POSITIVE_INFINITY;

    this.sectionIds.forEach(id => {
      const el = this.document.getElementById(id);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const distance = Math.abs(rect.top - 120);
      if (distance < minDistance) {
        minDistance = distance;
        closest = id;
      }
    });
    this.activeSection = closest;
  }
}
