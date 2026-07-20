import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  platforms = [
    { label: 'Mobile', sub: 'iOS · Android', pct: 55 },
    { label: 'Desktop', sub: 'Win · Mac · Linux', pct: 25 },
    { label: 'Web', sub: 'Flutter Web', pct: 20 }
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToContact() {
    this.document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
