import { Component } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent {
  timeline = [
    {
      year: '2024',
      type: 'work',
      title: 'Bubble Hope Suite',
      place: 'E-commerce Mobile + Desktop',
      note: 'Full app + dashboard for multi-branch ordering'
    },
    {
      year: '2023',
      type: 'work',
      title: 'Bialjumla & Alamana',
      place: 'Commerce & Admin Systems',
      note: 'Marketplace app and brand management dashboard'
    },
    {
      year: '2023',
      type: 'edu',
      title: 'Frontend Course',
      place: 'HTML · CSS · JS · Angular',
      note: 'Expanded into web alongside Flutter'
    },
    {
      year: '2022',
      type: 'work',
      title: 'E-Tourism Ecosystem',
      place: 'Travel Platform',
      note: 'Ticketing app, company app, and admin panel'
    },
    {
      year: '2022',
      type: 'edu',
      title: 'Flutter Development Track',
      place: 'Dart & Flutter',
      note: 'Mobile app development specialization'
    },
    {
      year: '2019–2023',
      type: 'edu',
      title: 'B.Sc. Computer Science',
      place: 'Thebes Academy',
      note: 'Core CS foundation'
    }
  ];
}
