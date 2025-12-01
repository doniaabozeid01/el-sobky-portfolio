import { Component } from '@angular/core';


interface ServiceItem {
  title: string;
  description: string;
  icon: string; // ممكن تبقي path لصورة أو emoji
}



@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  services: ServiceItem[] = [
    {
      title: 'UI/UX Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      icon: 'UX'
    },
    {
      title: 'Application Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      icon: 'APP'
    },
    {
      title: 'Website Design',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod.',
      icon: 'WEB'
    }
  ];
}
