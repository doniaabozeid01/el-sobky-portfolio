import { Component } from '@angular/core';
interface ToolItem {
  name: string;
  percent: number;
  icon: string; // ممكن path لصورة، أو كلاس لآيكون
}
@Component({
  selector: 'app-tools',
  templateUrl: './tools.component.html',
  styleUrls: ['./tools.component.scss']
})
export class ToolsComponent {
  tools: ToolItem[] = [
    { name: 'Figma',       percent: 98, icon: 'assets/icons/figma.png' },
    { name: 'Sketch',      percent: 92, icon: 'assets/icons/sketch.png' },
    { name: 'Photoshop',   percent: 90, icon: 'assets/icons/ps.png' },
    { name: 'After Effects', percent: 85, icon: 'assets/icons/ae.png' },
    { name: 'Storybook',   percent: 90, icon: 'assets/icons/storybook.png' },
    { name: 'InVision',    percent: 95, icon: 'assets/icons/invision.png' }
  ];
}
