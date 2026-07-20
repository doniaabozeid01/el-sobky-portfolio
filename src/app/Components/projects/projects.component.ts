import { Component } from '@angular/core';

interface ProjectItem {
  num: string;
  title: string;
  category: string;
  desc: string;
  tags: string[];
  year: string;
  image: string;
  accent: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  hovered = -1;

  projects: ProjectItem[] = [
    {
      num: '01',
      title: 'Bubble Hope',
      category: 'Mobile App · iOS & Android',
      desc: 'Multi-branch e-commerce app for drinks and appetizers with cart, checkout, and favourites.',
      tags: ['Flutter', 'Firebase', 'BLoC'],
      year: '2024',
      image: '../../../assets/projects/mockup mobile app.jpg',
      accent: '#4fc3f7'
    },
    {
      num: '02',
      title: 'Bubble Hope Dashboard',
      category: 'Desktop App · Windows',
      desc: 'Desktop dashboard to manage products, discounts, campaigns, and categories.',
      tags: ['Flutter', 'Desktop', 'GetX'],
      year: '2024',
      image: '../../../assets/projects/Mock up Donia (1).png',
      accent: '#ffffff'
    },
    {
      num: '03',
      title: 'Bialjumla',
      category: 'Mobile App · Cross-platform',
      desc: 'Daily-life services e-commerce marketplace with browsing, cart, and profiles.',
      tags: ['Flutter', 'REST', 'BLoC'],
      year: '2023',
      image: '../../../assets/projects/mockup mobile app 2.jpg',
      accent: '#4fc3f7'
    },
    {
      num: '04',
      title: 'E-Tourism',
      category: 'Mobile App · Travel',
      desc: 'Travel booking app with tickets, articles, governorates, and company chat.',
      tags: ['Flutter', 'Firebase', 'Maps'],
      year: '2023',
      image: '../../../assets/projects/mockup mobile app 3.jpg',
      accent: '#ffffff'
    }
  ];
}
