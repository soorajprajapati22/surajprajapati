import { Component } from '@angular/core';
import { AboutMeComponent } from "../about-me/about-me.component";
import { ProjectComponent } from "../project/project.component";
import { ContactComponent } from "../contact/contact.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AboutMeComponent, ProjectComponent, ContactComponent,CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  techStack: string[] = [
    "Angular", "TypeScript", "Spring Boot", "JavaScript", "MySQL",
    "Java", "HTML", "CSS", "Ionic", "Bootstrap"
  ];
}
