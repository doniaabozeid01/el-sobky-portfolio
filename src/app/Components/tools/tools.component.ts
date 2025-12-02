import { Component } from '@angular/core';
interface ToolItem {
  name: string;
  img: string; // ممكن path لصورة، أو كلاس لآيكون
}
@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
 tools: ToolItem[] = [
  {
    img: '../../../assets/tools/1.jpg',
    name: 'Flutter SDK'
  },
  {
    img: '../../../assets/tools/2.jpg',
    name: 'Android Studio'
  },
  {
    img: '../../../assets/tools/3.jpg',
    name: 'Visual Studio'
  },
  {
    img: '../../../assets/tools/4.jpg',
    name: 'Android Emulator & iOS Simulator'
  },
  {
    img: '../../../assets/tools/5.jpg',
    name: 'Figma / Adobe XD'
  },
  {
    img: '../../../assets/tools/6.jpg',
    name: 'Firebase'
  },
  {
    img: '../../../assets/tools/7.jpg',
    name: 'Postman'
  },
  {
    img: '../../../assets/tools/8.jpg',
    name: 'Git & GitHub'
  },
  {
    img: '../../../assets/tools/9.jpg',
    name: 'Pub.dev Packages'
  }

  ];
}
