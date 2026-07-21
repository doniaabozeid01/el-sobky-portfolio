import { Component } from '@angular/core';

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent {
  experience = [
    {
      year: '2025 – Present',
      title: 'Flutter Developer',
      place: 'AlHendal · On-site',
      note: 'Internal business Flutter apps, REST APIs, performance.'
    },
    {
      year: '2025 – 2026',
      title: 'Flutter Developer',
      place: 'ZeroTech · Remote',
      note: 'IoT control, smart home, and CCTV streaming apps.'
    },
    {
      year: '2023',
      title: 'Flutter Developer',
      place: 'VARIANCE · Cairo',
      note: 'Technical development team — Flutter delivery.'
    },
    {
      year: '2022 – 2023',
      title: 'Software Handling',
      place: 'Lake House · Cairo',
      note: 'Debugging and supporting management software systems.'
    },
    {
      year: '2021 – 2022',
      title: 'Software Technical',
      place: 'Vodafone · Cairo',
      note: 'Software technical support and delivery operations.'
    }
  ];

  education = [
    {
      title: 'M.Sc. Software Engineering',
      place: 'Cairo University · In Progress'
    },
    {
      title: 'B.Sc. Computer Science',
      place: 'Thebes Academy · RIC · Honored'
    }
  ];
}
