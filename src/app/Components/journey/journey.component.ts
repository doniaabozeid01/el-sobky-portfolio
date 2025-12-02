import { Component } from '@angular/core';

interface JourneyItem {
  years: string;
  title: string;
  subtitle: string;
}

@Component({
  selector: 'app-journey',
  templateUrl: './journey.component.html',
  styleUrls: ['./journey.component.scss']
})
export class JourneyComponent {

education: JourneyItem[] = [
  {
    years: '2019 - 2023',
    title: 'Bachelor of Computer Science',
    subtitle: 'Thebes Academy'
  },
  {
    years: '15/8/2020 - 15/11/2020',
    title: 'Python & AI Course',
    subtitle: 'Fundamentals of Python, AI concepts, and problem-solving'
  },
  {
    years: '2/5/2022 - 1/9/2022',
    title: 'Flutter Development Track',
    subtitle: 'Mobile app development using Dart & Flutter framework'
  },
  {
    years: '2/9/2022 - 1/12/2022',
    title: 'Network Course',
    subtitle: 'Networking basics, protocols, and infrastructure concepts'
  },
  {
    years: '9/12/2023 - 10/3/2024',
    title: 'Frontend Course',
    subtitle: 'HTML, CSS, JavaScript, Angular fundamentals'
  }
];


experience: JourneyItem[] = [
  {
    years: '2023 - 2024',
    title: 'Bubble Hope – E-commerce Mobile App',
    subtitle: 'Developed a full e-commerce app with multi-branch support, checkout, cart, favourites, and multilingual UI.'
  },
  {
    years: '2023',
    title: 'Bubble Hope Dashboard – Desktop App',
    subtitle: 'Built a desktop dashboard for managing products, discounts, campaigns, and media for Bubble Hope.'
  },
  {
    years: '2023',
    title: 'Bialjumla – Multi-Service E-commerce App',
    subtitle: 'Created an app for daily life services and products (similar to Carrefour). Includes browsing, cart, and user profiles.'
  },
  {
    years: '2023',
    title: 'Alamana Dashboard – Desktop App',
    subtitle: 'Developed a complete admin panel for managing products, discounts, categories, and campaigns for Alamana brand.'
  },
  {
    years: '2022',
    title: 'T4Tea – E-commerce App',
    subtitle: 'Designed and built an online store application for branded tea with catalog, cart, offers, and customer engagement tools.'
  },
  {
    years: '2022',
    title: 'E-Tourism – Tourism Ticketing App',
    subtitle: 'A travel booking system for governorates: ticket booking, trip planning, cost estimation, and company communication.'
  },
  {
    years: '2022',
    title: 'ET-Company – Tourism Companies App',
    subtitle: 'Built a platform for tourism companies to publish tickets, trips, offers, and manage their travel services.'
  },
  {
    years: '2022',
    title: 'ET-Admin – Tourism Control Dashboard',
    subtitle: 'Developed an admin panel to manage tourism companies, tickets, trips, governorates, hotels, and destinations.'
  },
  {
    years: '2021',
    title: 'Bone Care – Medical Diagnosis App',
    subtitle: 'Created an app that analyzes X-ray images to detect fractures, finds nearby doctors/pharmacies, and guides patients.'
  }
];

  
}
