import { Component } from '@angular/core';


interface ServiceItem {
  title: string;
  description: string;
  icon: string; // ممكن تبقي path لصورة أو emoji
}



@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  // services: ServiceItem[] = [
  //   {
  //     title: 'UI/UX Design',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  //     icon: 'UX'
  //   },
  //   {
  //     title: 'Application Design',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  //     icon: 'APP'
  //   },
  //   {
  //     title: 'Website Design',
  //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
  //     icon: 'WEB'
  //   }
  // ];


  services: ServiceItem[] = [
    {
      icon: '📱',
      title: 'Cross-platform Mobile Apps',
      description:
        'Building high-performance Android & iOS applications with one Flutter codebase, optimized for speed and smooth animations.'
    },
    {
      icon: '🌐',
      title: 'Responsive Web Apps',
      description:
        'Creating responsive web experiences using Flutter Web, with layouts that adapt perfectly to mobile, tablet, and desktop.'
    },
    {
      icon: '🖥️',
      title: 'Desktop Applications',
      description:
        'Delivering desktop apps for Windows, macOS, and Linux using Flutter with a consistent UI and shared business logic.'
    },
    {
      icon: '🎨',
      title: 'UI / UX Implementation',
      description:
        'Translating Figma & UI designs into pixel-perfect Flutter screens, with custom widgets, themes, and design systems.'
    },
    {
      icon: '🧱',
      title: 'Clean Architecture & State Management',
      description:
        'Structuring apps using Clean Architecture, SOLID, and modern state management (Bloc, Provider, Riverpod) for scalable projects.'
    },
    {
      icon: '☁️',
      title: 'API & Firebase Integration',
      description:
        'Integrating REST APIs, Firebase Auth, Firestore, Storage, and push notifications into production-ready Flutter apps.'
    }
  ];

}
