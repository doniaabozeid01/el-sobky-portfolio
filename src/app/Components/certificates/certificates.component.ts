import { Component } from '@angular/core';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent {
  certificates = [
    {
      title: 'Flutter',
      org: 'MASA',
      icon: 'fa-solid fa-mobile-screen-button'
    },
    {
      title: 'Python & AI with Android',
      org: 'TSA',
      icon: 'fa-solid fa-robot'
    },
    {
      title: 'Networks',
      org: 'MASA',
      icon: 'fa-solid fa-network-wired'
    },
    {
      title: 'Front End Web',
      org: 'MASA',
      icon: 'fa-solid fa-code'
    }
  ];

  languages = [
    { name: 'Arabic', level: 'Native' },
    { name: 'English', level: 'Professional' }
  ];
}
