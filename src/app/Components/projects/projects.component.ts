import { Component } from '@angular/core';

interface ProjectItem {
  title: string;
  image: string;
  description: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {


projects: ProjectItem[] = [
  {
    title: 'Bubble Hope – E-commerce Mobile App',
    image: '../../../assets/projects/2.png',
    description:
      'A complete multi-branch e-commerce mobile app for ordering drinks and appetizers with cart, checkout, and favourites.'
  },
  {
    title: 'Bubble Hope Dashboard – Desktop Management System',
    image: '../../../assets/projects/2.png',
    description:
      'A desktop dashboard to manage products, discounts, images, campaigns, and categories for Bubble Hope.'
  },
  {
    title: 'Bialjumla – Daily Life Services E-commerce App',
    image: '../../../assets/projects/4.jpeg',
    description:
      'A full e-commerce app for daily life services and products, similar to Carrefour-style marketplace.'
  },
  // {
  //   title: 'Alamana Dashboard – Product & Campaign Management',
  //   image: 'assets/projects/alamana-dashboard.png',
  //   description:
  //     'Desktop admin dashboard for adding products, discounts, images, campaigns, and categories for Alamana.'
  // },
  {
    title: 'T4Tea – Branded Tea E-commerce App',
    image: '../../../assets/projects/4.jpeg',
    description:
      'An online store app for branded tea products with catalog browsing, offers, and cart features.'
  },
  {
    title: 'E-Tourism – Travel Booking Mobile App',
    image: 'assets/projects/e-tourism.png',
    description:
      'A mobile app for booking travel tickets, reading articles, exploring governorates, and chatting with travel companies.'
  },
  // {
  //   title: 'ET-Company – Tourism Companies App',
  //   image: 'assets/projects/et-company.png',
  //   description:
  //     'An app for tourism companies to publish tickets, manage trips, and appear inside the E-Tourism ecosystem.'
  // },
  // {
  //   title: 'ET-Admin – Tourism Admin Dashboard',
  //   image: 'assets/projects/et-admin.png',
  //   description:
  //     'A dashboard that manages tourism companies, tickets, trips, governorates, hotels, and destinations.'
  // },
  // {
  //   title: 'Bone Care – Medical X-Ray Analysis App',
  //   image: 'assets/projects/bone-care.png',
  //   description:
  //     'A medical app that analyzes X-ray images, detects fractures, and helps patients find nearby doctors and pharmacies.'
  // }
];


  
}
