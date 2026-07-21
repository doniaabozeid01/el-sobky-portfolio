import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    { icon: 'fa-solid fa-mobile-screen-button', label: 'Mobile Apps', sub: 'iOS · Android · Flutter' },
    { icon: 'fa-solid fa-desktop', label: 'Desktop Apps', sub: 'Win · Mac · Linux' },
    { icon: 'fa-solid fa-code', label: 'Web Apps', sub: 'Flutter Web · PWA' },
    { icon: 'fa-solid fa-layer-group', label: 'UI / Architecture', sub: 'Figma · MVVM · SOLID' },
    { icon: 'fa-solid fa-code-branch', label: 'State Mgmt', sub: 'Cubit · BLoC · GetX' },
    { icon: 'fa-solid fa-cloud', label: 'Backend Ready', sub: 'Firebase · REST · Dio' }
  ];

  stackGroups = [
    {
      title: 'Core',
      items: ['Flutter', 'Dart', 'Firebase', 'REST / Dio']
    },
    {
      title: 'State & Data',
      items: ['BLoC', 'Cubit', 'SQLite', 'Hive']
    },
    {
      title: 'Delivery',
      items: ['Git', 'Figma', 'App Publishing', 'Localization']
    },
    {
      title: 'Extras',
      items: ['Animations', 'AI Tools', 'Debugging', 'Hosting']
    }
  ];

  certificates = [
    { title: 'Flutter', org: 'MASA' },
    { title: 'Python & AI', org: 'TSA' },
    { title: 'Networks', org: 'MASA' },
    { title: 'Front End Web', org: 'MASA' }
  ];

  languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Professional' }
  ];
}
