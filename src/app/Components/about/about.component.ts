import { Component } from '@angular/core';

interface StatItem {
  value: string;
  label: string;
}

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
stats: StatItem[] = [
    { value: '13+', label: 'Project Completed' },
    { value: '50+', label: 'Industry Covered' },
    { value: '3+', label: 'Years of Experience' }
  ];

  tags: string[] = [
    'UX/UI Design',
    'Mobile App Design',
    'Website Design',
    'Design System',
    'Prototype',
    'Dashboard',
    'Wireframe Design'
  ];
}
