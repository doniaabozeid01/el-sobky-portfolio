import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  socialLinks = [
    { icon: 'fa-brands fa-facebook-f', url: 'https://www.facebook.com/share/1DDHPbckdA/?mibextid=wwXIfr' },
    { icon: 'fa-brands fa-linkedin-in', url: 'https://www.linkedin.com/in/mahmoud-elsobky-757760283' },
    { icon: 'fa-brands fa-github', url: 'https://github.com/MahmoudAhmedElGelany' },
    { icon: 'fa-brands fa-instagram', url: 'https://www.instagram.com/mahmoud_elsobky2' }
  ];
}
