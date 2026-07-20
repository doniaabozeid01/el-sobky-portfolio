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
    { icon: 'fa-solid fa-layer-group', label: 'UI/UX Build', sub: 'Figma → Flutter' },
    { icon: 'fa-solid fa-code-branch', label: 'State Mgmt', sub: 'BLoC · Riverpod · GetX' },
    { icon: 'fa-solid fa-microchip', label: 'Architecture', sub: 'Clean · DDD · SOLID' }
  ];

  tools = [
    'Flutter', 'Dart', 'Firebase', 'Git', 'Figma',
    'REST APIs', 'BLoC', 'Riverpod', 'SQLite', 'GetX',
    'Hive DB', 'CI/CD', 'Fastlane', 'Supabase'
  ];
}
