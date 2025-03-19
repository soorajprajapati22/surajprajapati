import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-project',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent {
  projects = [
    {
      title: "ESARWA SOFTWARE",
      subtitle: "Web Development",
      description: "Developed a full-stack company website ensuring seamless functionality.",
      link: "https://esarwa.com",
      tech: ["Angular", "Bootstrap", "Material UI", "TypeScript"],
      icon: "fas fa-globe"
    },
    {
      title: "ESARWA MOBILE APP",
      subtitle: "Mobile App Development",
      description: "Built a cross-platform app with Ionic & Capacitor, integrating backend APIs.",
      link: "https://play.google.com/store/apps/details?id=com.esarwa.app",
      tech: ["Ionic", "Capacitor", "Angular", "TypeScript"],
      icon: "fas fa-mobile-alt"
    }
  ];
}
