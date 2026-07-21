import { DOCUMENT } from '@angular/common';
import { Component, Inject } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent {
  brands = [
    'Flutter',
    'Dart',
    'Firebase',
    'BLoC',
    'Cubit',
    'REST APIs',
    'MVVM'
  ];

  constructor(@Inject(DOCUMENT) private document: Document) {}

  scrollToSection(sectionId: string) {
    this.document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  }
}
