import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  Inject,
  OnDestroy,
  QueryList,
  ViewChildren
} from '@angular/core';

interface ProjectItem {
  title: string;
  category: string;
  year: string;
  desc: string;
  stack: string[];
  image: string;
}

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements AfterViewInit, OnDestroy {
  @ViewChildren('projectRow') projectRows!: QueryList<ElementRef<HTMLElement>>;

  active = 0;
  private observer?: IntersectionObserver;

  projects: ProjectItem[] = [
    {
      title: 'Bubble Hope',
      category: 'Mobile · E-commerce',
      year: '2024',
      desc: 'Multi-branch bubble tea commerce — cart, favourites, checkout, offers, and multilingual support.',
      stack: ['Flutter', 'Firebase', 'BLoC'],
      image: '../../../assets/projects/hero-mockup-1.png'
    },
    {
      title: 'Bubble Hope Dashboard',
      category: 'Desktop · Admin',
      year: '2024',
      desc: 'Admin dashboard for products, campaigns, branches, and orders with real-time updates.',
      stack: ['Flutter', 'Desktop', 'Firebase'],
      image: '../../../assets/projects/Mock up Donia (1).png'
    },
    {
      title: 'ZeroTech IoT',
      category: 'Mobile · Smart Home',
      year: '2025',
      desc: 'Remote appliance control with live CCTV streaming for smart home and security systems.',
      stack: ['Flutter', 'IoT', 'Streaming'],
      image: '../../../assets/projects/hero-mockup-2.png'
    },
    {
      title: 'ZeroTech Store',
      category: 'Mobile · E-commerce',
      year: '2025',
      desc: 'Cross-platform store for electronics and smart devices with a smooth shopping flow.',
      stack: ['Flutter', 'REST', 'BLoC'],
      image: '../../../assets/projects/mockup mobile app 2.jpg'
    },
    {
      title: 'Bialjumla',
      category: 'Mobile · Wholesale',
      year: '2023',
      desc: 'Wholesale marketplace for daily products — catalog, cart, checkout, and order management.',
      stack: ['Flutter', 'REST', 'BLoC'],
      image: '../../../assets/projects/hero-mockup-2.png'
    },
    {
      title: 'Alamana',
      category: 'Mobile + Dashboard',
      year: '2023',
      desc: 'Building-materials commerce with country pricing, stock management, and an admin dashboard.',
      stack: ['Flutter', 'Firebase', 'i18n'],
      image: '../../../assets/projects/1.jpg'
    },
    {
      title: 'E-Tourism',
      category: 'Travel Ecosystem',
      year: '2022',
      desc: 'Discover destinations, book trips, and chat with companies — plus company and admin apps.',
      stack: ['Flutter', 'Maps', 'Firebase'],
      image: '../../../assets/projects/mockup mobile app 3.jpg'
    },
    {
      title: 'Forto',
      category: 'Web · Auto Care',
      year: '2024',
      desc: 'On-demand car wash scheduling with an integrated store for automotive care products.',
      stack: ['Flutter Web', 'Maps'],
      image: '../../../assets/projects/786.png'
    },
    {
      title: 'Rabahny',
      category: 'Mobile · Loyalty',
      year: '2024',
      desc: 'Loyalty and rewards app built to boost retention and branch sales.',
      stack: ['Flutter', 'Firebase', 'FCM'],
      image: '../../../assets/projects/3.jpg'
    },
    {
      title: 'T4Tea',
      category: 'Mobile · E-commerce',
      year: '2023',
      desc: 'Premium tea commerce with browsing, cart, checkout, and multilingual support.',
      stack: ['Flutter', 'Firebase', 'i18n'],
      image: '../../../assets/projects/4.jpeg'
    },
    {
      title: 'Bone Care',
      category: 'AI · Healthcare',
      year: '2023',
      desc: 'AI fracture detection from X-rays with nearby doctors and pharmacies discovery.',
      stack: ['Flutter', 'AI', 'Maps'],
      image: '../../../assets/projects/2.png'
    }
  ];

  get current() {
    return this.projects[this.active];
  }

  constructor(@Inject(DOCUMENT) private document: Document) {}

  ngAfterViewInit() {
    this.observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);

        if (!visible.length) return;
        const index = Number((visible[0].target as HTMLElement).dataset['index']);
        if (!Number.isNaN(index)) {
          this.active = index;
        }
      },
      {
        root: null,
        // Focus band sits under the sticky stage
        rootMargin: '-42% 0px -42% 0px',
        threshold: 0
      }
    );

    this.projectRows.forEach((row) => this.observer?.observe(row.nativeElement));
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }

  pad(n: number) {
    return n.toString().padStart(2, '0');
  }

  select(index: number) {
    this.active = index;
  }

  scrollToContact() {
    this.document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  }
}
