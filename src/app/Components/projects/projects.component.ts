import { Component } from '@angular/core';

interface ProjectItem {
  title: string;
  image: string;
  tags: string[];
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


  projects: ProjectItem[] = [
    {
      title: 'Beauty Product – Ecommerce Mobile App Solution',
      image: 'assets/projects/beauty-mobile.png',
      tags: ['UI/UX Design', 'App Design', 'Wireframe']
    },
    {
      title: 'Beauty Product Mobile App Landing Page Design',
      image: 'assets/projects/beauty-landing.png',
      tags: ['UI/UX Design', 'Web Design', 'Wireframe']
    },
    {
      title: 'Coffee Shop App – Coffee Ordering App Solution',
      image: 'assets/projects/coffee-app.png',
      tags: ['UI/UX Design', 'App Design', 'Wireframe']
    },
    {
      title: 'Coffee Shop Mobile App Landing Page Design',
      image: 'assets/projects/coffee-landing.png',
      tags: ['UI/UX Design', 'Web Design', 'Wireframe']
    }
  ];

  
}
