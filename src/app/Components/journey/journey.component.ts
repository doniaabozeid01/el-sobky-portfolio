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
    { years: '2012 - 2014', title: 'Harmony Institute', subtitle: 'Master in Visual Arts' },
    { years: '2008 - 2012', title: 'Aurora Academy', subtitle: 'Master in Visual Arts' },
    { years: '1996 - 2008', title: 'Crystalbrook', subtitle: 'Master in Visual Arts' }
  ];

  experience: JourneyItem[] = [
    { years: '2018 - 2024', title: 'Insightlancer', subtitle: 'Master in Visual Arts' },
    { years: '2016 - 2018', title: 'Self-Employed', subtitle: 'Master in Visual Arts' },
    { years: '2014 - 2016', title: 'KG Graphics Studio', subtitle: 'Master in Visual Arts' }
  ];
  
}
