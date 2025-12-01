import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socialLinks = [
    { icon: 'fa-brands fa-facebook-f', url: '#' },
    { icon: 'fa-brands fa-behance', url: '#' },
    { icon: 'fa-brands fa-youtube', url: '#' },
    { icon: 'fa-brands fa-twitter', url: '#' },
    { icon: 'fa-brands fa-instagram', url: '#' },
  ];

  scrollTo(sectionId: string) {
  const el = document.getElementById(sectionId);
  if (el) {
    el.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }
}

}
