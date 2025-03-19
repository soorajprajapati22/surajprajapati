import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrl: './project.component.css'
})
export class ProjectComponent {
  projects = [
    {
      title: "ESARWA SOFTWARE (Web Development)",
      description: "Developed a comprehensive company website as a full-stack solution, ensuring seamless functionality.",
      link: "https://esarwa.com",
      tech: ["Angular", "Bootstrap", "Material UI", "TypeScript"]
    },
    {
      title: "ESARWA MOBILE APP (Mobile App Development)",
      description: "Developed a cross-platform mobile application using Ionic Framework with Capacitor, integrating backend APIs for seamless data exchange.",
      link: "https://play.google.com/store/apps/details?id=com.esarwa.app",
      tech: ["Ionic", "Capacitor", "Angular", "TypeScript"]
    }
  ];
}
